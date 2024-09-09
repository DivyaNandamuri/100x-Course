const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://divyasri:Fairways%40200@standalone.if1mybs.mongodb.net/")

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) 

const todo = mongoose.model('todos',todoschema)

module.exports= { 
    todo: todo
 } 