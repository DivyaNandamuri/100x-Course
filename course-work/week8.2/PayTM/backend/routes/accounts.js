const express = require("express")
const router = express.Router();
const {User, Accounts} = require('../db')
const auth = require('../middleware')

router.get("/balance",auth,async (req,res)=>{
    const userId = req.userId;
    const user = await Accounts.findOne({
        userId: userId
    })
    return res.json({
        balance: user.balance
    })
})

router.post("/transfer",auth,async (req,res)=>{
    const name = req.body.to;
    const amount = req.body.amount;
    const userId = req.userId
    //get the account details of the sender user
    const user = await Accounts.findOne({
        userId:userId
    })
    console.log("sender account details",user);
    //check balance of sender, if the balance is greater or equal to amount then send else return insufficient bal
    if(!(user.balance>=amount)){
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }
    // find the reciever ID from the name
    const to = await User.findOne({
        $or: [
            {firstName: {$regex: name, $options: 'i'}},
            {lastName: {$regex: name, $options:'i'}}
        ]
    })
    if(!to){
        return res.status(401).json({
            message:"Receiver not found"
        })
    }
    console.log("reciever details",to)
    const touser = to._id
    //getting the 'to' reciever account details to update the balance
    const user2account = await Accounts.findOne({
        userId:touser
    })
    if(!user2account){
        return res.status(400).json({
            message: "Invalid account"
        })
    }
    console.log("reiever account balance",user2account)
    //updating sender balance
    const updatedbal = await Accounts.findOneAndUpdate({userId: userId},{ $inc: { balance: -amount } },{new:true})
    console.log("sender updated balance",updatedbal) 
    //updating reciever balance
    const updatedtobal = await Accounts.findOneAndUpdate({userId: touser},{balance: user2account.balance + amount},{new:true})
    console.log("reciever updated balance",updatedtobal) 
    return res.json({
        message: "Transfer successful"
    })
})
module.exports = router;