const express = require("express");
const { createTodo, updateTodo } = require("./input-type");
const { todo } = require("./db");
const app = express();

app.get("/todos", async function(req,res) {
    const todos = await todo.find({})
    res.json({
        todos
    })
})

//middleware for POST
app.use(express.json());
//input validation using zod and adding it in DB
app.post("/todo", async function(req,res) {
    const payload = req.body;
    const parsePayload = createTodo.safeParse(payload);
    if(!parsePayload==success){
        res.status(404).json({
            msg: "You have sent the wrong inputs"
        })
        return
    }
//put in DB
    await todo.create({
        title: payload.title,
        description: payload.description,
        complete: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.put("/completed", async function(req,res){
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload==success){
        res.status(411).json({
            msg: "Not completed"
        })
        return;
    }
    await todo.update({
        _id: req.body._id
    },{
        complete: true
    })
    return res.json({
        
        msg: "Mark as completed"
    })
})


const port =3000;
app.listen(port);
console.log(`App is running on port${port}`)