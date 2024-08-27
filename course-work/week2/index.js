//create a HTTP Server

//to import express library
const express = require("express");
const port = 3000;
const app = express();

app.get("/initial",(req,res) =>{
    res.send("Hello Initial Divya");
})

app.post("/data", (req,res)=>{
    res.json({
        name: "Divya",
        age:25
    })
});


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
});




