import React from 'react'

export default function Card(prop) {
let opt=prop.options;
let price=Object.keys(opt)
 
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem" ,"maxHeight" :"360px"}}>
          <img src={prop.foodimg} className="card-img-top " alt="..."  style={{height:"120px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{prop.foodname}</h5>
            {/* <p className="card-text">{prop.fooddesc}</p> */}
            <div className="container w-100"></div>
                 <select className="m-2 h-100  bg-success rounded">
                  {
                    Array.from(Array(6),(e,i)=>{
                      return (
                     <option key={i+1} value={i+1}>{i+1}</option>
                      )
                    }
                    )
                  }
                 </select>
          
            <select className="m-2 h-100  bg-success rounded">
             {
              price.map((data)=>{
                return (
                  <option key={data} value={data}>{data}</option>
                )
              })

             }
              </select>
              <div className="d-inline">
          {
          
          }
              </div>

          </div>
        </div>
        </div>
    </div>
  )
}
