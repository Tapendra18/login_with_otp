const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:true,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    passowrd:{
        type:String,
        required:true,
        minlength:6
    }
});

//creating Model;
const users = new mongoose.model("users" , userSchema);
module.exports = users;