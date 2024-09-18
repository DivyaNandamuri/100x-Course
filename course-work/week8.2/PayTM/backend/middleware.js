const jwt = require("jsonwebtoken")
const JWT_SECRET= require("./config.js")

const authMiddleware = (req,res,next) =>{
    //Header validation
    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer")) {
        return res.status(403).json({
            message:"Invalid Header"
        })
    }
    const token = header.split(' ')[1]

    console.log("token",token)
    //verify the user using token
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        console.log("decoded", decoded.userId);
        req.userId=decoded.userId;
        next();
    } catch(e) {
        return res.status(403).json({
            message:"Invalid token"
        })
    }
   
}


module.exports = authMiddleware