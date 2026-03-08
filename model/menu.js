import mongoose from 'mongoose';

const menuschema = new mongoose.Schema({
    name:{
        type:String,
        requiured:true
    },description:{
        type:String,
        required:true
    },price:{
        type:Number,
        required:true
    },category:{
        type:String,
        required:true
    },model:{
        type:String,
        required:true
    },poster:{
        type:String,
        required:true,
        default:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    }
})


const Menu = mongoose.model("Menu",menuschema);
export default Menu;
