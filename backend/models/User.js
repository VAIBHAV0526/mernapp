// create the schema and utlization
const mongoose = require('mongoose');
const {Schema}=mongoose; // restructuring
const Userschema=new Schema({
    name :{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date :{
type:Date,
default:Date.now
    }

});
// export the sche
module.exports =mongoose.model('user',Userschema); //model create schema and wrpper

