const express= require("express")
const router = express.Router();
const z = require("zod")
const {User, Accounts} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const auth = require("../middleware")

//zod schema for input validation
const signupSchema = z.object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName:z.string()
});

//To create a user account
router.post("/signup",async (req,res) => {
    const body = req.body;
    //input validation
    const input = signupSchema.safeParse(req.body)
    if(!input) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    //user exists validation in db
    const existingUser = await User.findOne({
        username: req.body.username
    })
    
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    //generate random balance and save it in Accounts collection
    const balance = 1+Math.random()*10000
    
    //create new user in db
    const newuser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    await Accounts.create({
        userId: newuser._id,
        balance: balance
    })
    // generate a jwt token for the user
    const token = jwt.sign({
        userId: newuser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

//zod signin input schema
const signinSchema = z.object({
    username: z.string().email(),
    password: z.string()
})

//To validate the user and sigin
router.post("/signin",async (req,res)=>{
    const body = req.body;
    //input validation
    const signinValid = signinSchema.safeParse(body)

    if(!signinValid) {
        return res.status(411).json({
            message: "Invalid credentials"
        })
    }


    //validate user in DB
    const userValidation = await User.findOne({
        username: body.username,
        password: body.password
    })
    console.log("signin user is " + userValidation)
   
    if(userValidation) {
        const token = jwt.sign({
            userId: userValidation._id
        },JWT_SECRET);
        return res.json({
            token: token
        })
    } else
        return res.status(411).json({
            message: "Error while logging in"
    })
})

//input validation using ZOD
const updateInput = z.object({
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
})

//To update the user details in DB
router.put("/",auth,async (req,res) => {
    const input = updateInput.safeParse(req.body)
    console.log(req.userId)
    if(input){
        const {acknowledged} = await User.updateOne({
        _id:req.userId},req.body)
        // console.log("userUpdate",userUpdate)
        if(acknowledged){
            return res.json({
                message:"updated successfully"
            })
        }
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    return res.status(403).json({
        message:"Invalid data entered"
    })
    
})

//get the user details using fName or lName
router.get("/bulk", async (req,res) => {
    const filter = req.query.filter || "";
    const userDetails = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } }, // 'i' for case-insensitive
            { lastName: { $regex: filter, $options: 'i' } }
          ]
    })
    return res.json({
        users: userDetails.map((users) =>({
            firstName: users.firstName,
            lastName: users.lastName,
            _id: users._id
        }))  
    })
})

module.exports = router;

//get all users
router.get("/all",auth,async (req,res) =>{
    const userDetails = await User.find({})
    return res.json({
        userDetails
    })
})