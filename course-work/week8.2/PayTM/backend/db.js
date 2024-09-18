// Import mongoose
const mongoose = require('mongoose')


// Connect to the database
mongoose.connect('mongodb://localhost:27017/paytm');
  
//create schema
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,  
        lowercase:true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
}) 

const accountschema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance: {
        type:Number,
        require:true
    }
})

//export model

const User =  mongoose.model('User',userschema);
const Accounts = mongoose.model('Accounts',accountschema)
module.exports= { 
    User:User,
    Accounts:Accounts
 } ;