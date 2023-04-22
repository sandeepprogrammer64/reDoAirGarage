import React from 'react'
import "../Styles/styles.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    fade: true,
   
    
    autoplay: true,
    autoplaySpeed: 1500,
    
    
  };

const Navbar = () => {
  return (
    <div>
    
    <div id='Navbar'>

    <a href="./">
        <img  src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff7de92714ca4713ab426d7_AirGarage%20Full%20White%20SVG-p-500.png" alt="" />
    </a>
    <a href="./"> 
        <p id="link1">Find parking</p> </a>
    <a id="link2" href="login.html">Log in</a>
    <a id= "link3" href="./TalkToSales.html">Talk to Sales</a>
    
    </div>

    <div id="Nav2">
        <img id="Nav2-img" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png" alt="" />
        <h1 id="Nav2-H1">Parking Operations for the 21st Century</h1>
        <p id="Nav2-P1">AirGarage modernizes parking assets with one streamlined service covering enforcement, payment collection, 
          </p>
          <p id="smallp">maintenance and more</p>
        

     <a id="btn1" href="TalkToSales.html">TALK TO SALES</a>
    </div>
    
    
    <div
      id="skills"
      style={{marginTop:"50px"}}
      
    >
       
      <Slider {...settings}>
        <div id="yes">
          <h3 id="skill_heading">Dashboard</h3>
          <div className="imgs">
            <img
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash.png"
              alt=""
            />
           
            
           
          </div>
        </div>

        <div id="yes">
          <h3 id="skill_heading">Daily Performance</h3>
          <div className="imgs">
            <img
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0b5fc492169126b7a_graphs.png"
              alt=""
            />
           
          </div>
        </div>
        <div id="yes">
          <h3 id="skill_heading">Online Listing Aggregations</h3>
          <div className="imgs">
            <img
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0cf2e6bf5f160cdb6_rentals.png"
              alt=""
            />
           
          </div>
        </div>
      </Slider>
      <br /><br />
      <br /><br />
      <hr />
    </div>

    

    </div>
  )
}

export default Navbar