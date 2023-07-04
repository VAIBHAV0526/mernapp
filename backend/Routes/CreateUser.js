const express=require('express');
const router =express.Router();
const {body,validator, validationResult}=require('express-validator');
const user=require('../models/User');
const { model } = require('mongoose');
router.post("/creatuser",[
body('email',"insert proper email format").isEmail(),
body('password',"create a strong password").isStrongPassword(),
body('name').isAlpha(),

],async(req,res)=>{

    const err=validationResult(req);
    if(!err.isEmpty()){
        return  res.status(404).json({errr:err.array()});
    }
try{

await user.create({
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
    location:req.body.location,
})
res.json({success:true});
}
catch(err){
    console.log(err);
    res.json({success:false});

}
})
module.exports=router;