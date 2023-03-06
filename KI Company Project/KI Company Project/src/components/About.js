import React from 'react';
import logo from '../images/main_logo.png';
import bg from '../images/bg_img.webp';
import v from '../images/vis.jpg';
import img1 from '../images/carousel_1.webp';
import img2 from '../images/carousel_2.webp';
import img3 from '../images/carousel_3.webp';
import img4 from '../images/carousel_4.webp';
import faci from '../images/facilities.png';
import qc from '../images/qc_equip.png';
import './About.css';
import './Footer.js';

export default function About(props) {
    let aboutStyle = {
        textAlign: "justify",
        margin: "10px",
        padding: "10px",
        fontWeight: "bold"
    }

    let carousel_text = {
        backgroundColor: "black",
        color: "white"
    }

  return (
    <>
    <img src={bg} id="bg_image" alt="bg_pic"/>

    <h2 style={{textAlign:"center", color: props.mode==="dark"?"white":"black"}} className="my-4">About Us</h2>
    <div style={aboutStyle} id="about" className="mx-4 my-4">
        <img src={logo} id="about_pic" style={{borderRadius: "20px", marginRight: "50px"}} width="600px" height="400px" alt="pic"/>
        <p style={{color: props.mode==="dark"?"white":"black"}}>The Engineering solution set up of Karishma Industries is a first step for the vision of 
        Mr. Kalpesh Bhayade. The operations of set up of machines and equipments are 
        running in the Vasai premises and supplying job works to local market. The idea of 
        such set up has come out to ride a growth spurt, having discovered the low capital 
        investment with low risk in terms of marketing and sales. Our technical expertise in the 
        engineering field gave us a push to start this new venture. Bolstered by appearances in 
        standard manufacturing processes, we are developing a channel to sell directly to 
        corporations. 
        This annual business plan calls for three years of accelerated growth. We also expect to 
        be profitable as never before. In all, Karishma Industries is a healthy company with 
        good growth prospects, looking to manage its orderly growth soon. 
        </p>
    </div>


    <h3 style={{textAlign:"center", color: props.mode==="dark"?"white":"black"}} className="my-4">Our Vision</h3>
    <div style={aboutStyle} id="vision" className="my-4">
        <img src={v} id="vision_pic" style={{borderRadius: "20px"}} className="mx-4" width="600px" height="300px" alt="pic"/>
            <p style={{color: props.mode==="dark"?"white":"black"}}>Our Vision is to expand and continually improve utilizing quality practices and employee 
            involvement to manufacture industrial products, for the production/ manufacturing industry 
            in the domestic markets that result in customer and employee satisfaction. 
            </p>
    </div>


    <h3 style={{textAlign:"center", color: props.mode==="dark"?"white":"black"}} className="my-4">Our Objectives</h3>
    <div id="carouselExampleCaptions" style={{color: props.mode==="dark"?"white":"black"}} className="carousel slide my-8" data-bs-ride="false">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={img1} height="500px" className="d-block w-100" alt="pic"/>
                <div className="carousel-caption d-none d-md-block text-dark">
                    {/* <h5>First slide label</h5> */}
                    <h5 style={carousel_text}>Focus on the new channels to increase sales.</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img2} height="500px" className="d-block w-100" alt="pic"/>
                <div className="carousel-caption d-none d-md-block text-dark">
                    {/* <h5>Second slide label</h5> */}
                    <h5 style={carousel_text}>Invest in the new machinery.</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img3} height="500px" className="d-block w-100" alt="pic"/>
                <div className="carousel-caption d-none d-md-block text-dark">
                    {/* <h5>Third slide label</h5> */}
                    <h5 style={carousel_text}>Maintain a gross margin, with the sales increase.</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img4} height="500px" className="d-block w-100" alt="pic"/>
                <div className="carousel-caption d-none d-md-block text-dark">
                    {/* <h5>Fourth slide label</h5> */}
                    <h5 style={carousel_text}>Increase the net profit significantly.</h5>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div style={aboutStyle} className="my-4">
        <p style={{color: props.mode==="dark"?"white":"black"}}>Founded in mid 2007 by Kalpesh Bhayade used to offer manufacturing related services 
        like 3D designs, documentation systems, consultancy services etc. to other 
        organizations. Our 3D design services were known for their accuracy, adaptability with 
        various systems and meeting exact requirements of the customer. We have been quite 
        successful in preparing 3D designs and notably in injection moulds & products designs. 
        Our customer list included big names like M/s Larsen & Toubro too. Other than these 
        we have sister concern companies in Diagnostic Distribution business as well as 
        Clearing and forwarding industry. 
        </p>
    <h3 style={{textAlign:"center", marginTop: "30px", color: props.mode==="dark"?"white":"black"}}>Available Facilities</h3>
    <img src={faci} width="90%" style={{marginLeft: "63px"}} alt="pic"/>

    <h3 style={{textAlign:"center", color: props.mode==="dark"?"white":"black"}} className="my-4">Quality Control Equipments</h3>
    <img src={qc} width="90%" style={{marginLeft: "63px"}} alt="pic"/>
    </div>
    </>
  )
}
