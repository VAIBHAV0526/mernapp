import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    // stte
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

    <>
    <div  className='container'>
    <form onSubmit={handlesubmit}>
    <div className="form-group">
    <label htmlFor="name">NAME</label>
    <input type="text" className="form-control" name='name' value={dataname} onChange={e => setname(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'
     value={dataemail} onChange={e => setemail(e.target.value)} ></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'  
    value={datapassword} onChange={e => setpassword(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputaddress">location</label>
    <input type="text" className="form-control" id="exampleInputlocation" placeholder="LOCATION" name='location'
     value={datalocation} onChange={e => setlocation(e.target.value)} ></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link className='m-3 btn btn-danger' to='/login'>allready a user</Link>
</form>
</div>
    </>
    
  )
}


export default Signup
