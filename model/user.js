import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },role:{
        type:String,
        enum:["admin","customer"],
        default:"customer"
    }
})

const User = mongoose.model('User' , userschema);
export default User;