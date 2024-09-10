const express = require("express");
const { createTodo, updateTodo } = require("./input-type");
const { todo } = require("./db");
const app = express();
const cors = require("cors");



//middleware for POST
app.use(express.json());
app.use(cors());

app.get("/todos", async function(req,res) {
    const todos = await todo.find({})
    console.log(todos)
    res.json({
        todos
    })
})

//input validation using zod and adding it in DB
app.post("/todo", async function(req,res) {
    const payload = req.body;
    const parsePayload = createTodo.safeParse(payload);
    console.log("inside todo")
    if(!parsePayload.success){
        res.status(404).json({
            msg: "You have sent the wrong inputs"
        })
        return
    }
//put in DB
    console.log( payload.title,payload.description)
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.put("/completed", async function(req,res){
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Not completed"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body._id
    },{
        completed: true
    })
    return res.json({
        
        msg: "Mark as completed"
    })
})


const port =3000;
app.listen(port);
console.log(`App is running on port${port}`)