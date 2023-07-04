import React from "react";
import Footer from "../Components/Foot.jsx";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel.jsx";
function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
          <Carousel></Carousel>
        </div>
        <div className="m-4">
          
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

          
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
