//ZOD for input validation
const express = require("express")
const zod = require("zod")

const port = 3000
const app = express();

//input schema
const schema = zod.array(zod.number());

//middleware for body
app.use(express.json())

app.post("/health", function(req,res){
    const kidney = req.body.kidney;
    //schema validation
    const response = schema.safeParse(kidney)
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    } else {
        res.json({
            msg:response
        })
    }
})

app.listen(port,() =>{
    console.log(`serving on port ${port}`)
})