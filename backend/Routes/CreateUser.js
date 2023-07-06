const express=require('express');
const router =express.Router();
const {body,validator, validationResult}=require('express-validator');
const user=require('../models/User');
const { model } = require('mongoose');
const becrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const jwtscreate= "musgsfsfnfnslfjs-fjpj23ornwofpw-fjwpf2-3skjfnsofnsfnlsanfonoasnflsndflnslfsfnsf";


router.post("/creatuser",[
body('email',"insert proper email format").isEmail(),
body('password',"create a strong password").isStrongPassword(),
body('name').isAlpha(),

],async(req,res)=>{

    const err=validationResult(req);
    if(!err.isEmpty()){
        return  res.status(404).json({errr:err.array()});
    }
    const salt=await becrypt.genSalt(10);
    const secPass=await becrypt.hash(req.body.password,salt);
try{

await user.create({
    name:req.body.name,
    password:secPass,
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








router.post("/loginuser" ,async(req,res)=>{
    body('email',"insert proper email format").isEmail();
    //let email=req.body.email;
    let password=req.body.password;
    try{
    let useremail=await user.findOne({email:req.body.email});
    if(!useremail){
       return res.status(400).json({
        errror:"user not found"

       })
    }
    const passcomp=await becrypt.compare(password,useremail.password);
if(passcomp==false){
return res.status(400).json({
    error:" wrong password"
});

}
const data={
    user:{
        id:useremail.id
    }
    }

    const authtoken=jwt.sign(data,jwtscreate);
res.json({success:true,authtoken});
    }
    catch(err){
        console.log(err);
        res.json({success:false});
    
    }
    })
module.exports=router;