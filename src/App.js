import "./App.css";
import "./Screen/Home";
import React, { useRef } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./Screen/Home";
import Navbar from "./Components/Navbar";
import Login from "./Screen/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login />}/>
     
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
