import React from 'react'

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem" ,"maxHeight" :"360px"}}>
          <img src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">import moduleName from 'module'</p>
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
              <option value="half">Half</option>
              <option value="full">full</option>
              </select>
              <div className="d-inline">
          total price
              </div>

          </div>
        </div>
        </div>
    </div>
  )
}
