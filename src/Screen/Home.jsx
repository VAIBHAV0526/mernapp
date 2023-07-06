import React from "react";
import Footer from "../Components/Foot.jsx";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { useState,useEffect } from "react";
;
function Home() {
  const [fooditem,setfooditem] = useState([])
  const [foodcategory,setfoodcategory] = useState([])
  const [search,setsearch] = useState("")
;
const loadata = async ()=>{
    let response=await fetch("http://localhost:4000/api/foodData",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    }});

response=await response.json()

setfoodcategory(response[1]);
setfooditem(response[0]);
}
useEffect(()=>{
  loadata();
},[])

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  style={{ objectfit : "contain" }} >
  <div className="carousel-inner" id="carousel">
  <div className="carousel-caption d-none d-md-block" style={{zIndex:10}}>
  <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
    </div>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100"  style={{filer:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?cake"className="d-block w-100" style={{filer:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900*700/?fries" className="d-block w-100" style={{filer:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="containeer">
     { 
     foodcategory.map(
      (data)=>{
        return (
          <div className="row mb-3">
          <div key={data.id} className="fs-3 m-3">{data.CategoryName}</div>
          <hr/> {fooditem!==[] ?
            fooditem.filter((item)=>
               (item.CategoryName===data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filteritems)=>{
                return(
                  <div className="col-12 col-md-6 col-lg-3" key={filteritems.id}>
                 <Card className="m-3" foodname={filteritems.name}
                    fooddesc={filteritems.description}
                    foodimg={filteritems.img}
                    foodprice={filteritems.price}
                    foodcategory={filteritems.CategoryName}
                    options={filteritems.options[0]}
                    foodid={filteritems.id}
                  
                 
                 ></Card>
                  </div>
                )
               })
          :<div>"not found"</div>}
          </div>
        )
    
    
        
       }
     )} 
       
    
        
         

          
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
