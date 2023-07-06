import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();

  const [dataemail, setemail] = useState("");
  const [datapassword, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault(); // syntentc event
    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: dataemail, password: datapassword }),
    });
    const json = await response.json();
    console.log(json);
localStorage.setItem('authtoken',json.authtoken);
console.log(localStorage.getItem('authtoken'));
    if (!json.success) {
      alert("invalid data");
    }
    else{
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={dataemail}
              onChange={(e) => setemail(e.target.value)}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={datapassword}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="m-3 btn btn-danger" to="/signup">
            new user
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
