import { useState } from "react"
import React  from 'react'

function Login() {
  const [dataname ,setname] = useState('')
 const [dataemail ,setemail] = useState('')
 const [datapassword ,setpassword] = useState('')
 const [datalocation ,setlocation] = useState('')
    const   handlesubmit= async(e)=>{

e.preventDefault() // syntentc event
const response = await fetch('http://localhost:4000/api/creatuser',{
    method:'POST',
    headers:{
 'Content-Type':'application/json',
    },
    body : JSON.stringify({name:dataname,email:dataemail,password:datapassword,location:datalocation})
    }
);
const json = await response.json();
console.log(json);
if(!json.success){
  alert("invalid data");
} 
}
    
  return (
    <div>
      <h1>  log</h1>
    </div>
  )
}

export default Login
