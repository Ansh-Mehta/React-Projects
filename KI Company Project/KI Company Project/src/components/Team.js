import React from 'react'
import dp from '../images/dp.webp';

export default function Team(props) {
  return (
    <>
    <h3 className="my-4" style={{textAlign: "center", color: props.mode==="dark"?"white":"black"}}>Our Team</h3>
    <div className="row">

        {/* 1st */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
            <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Kalpesh Bhayade, Proprietor</h5>
                    <p className="card-text">PGDBA-DLP (Operations), B.E. (Production) from Mumbai University, Also, the first
                    partner of our sister concern company named “Bhayade Bros. Co.” and “World
                    Carriage C&F Pvt. Ltd.”</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}
        

        {/* 2nd */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
            <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Hitesh Tamore, Responsible for Operations</h5>
                    <p className="card-text">B.E. (Production) from Mumbai University, Has completed 3-D design certification
                    course, has Nine years of industrial experience.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}

        {/* 3rd */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
            <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Sharad Bolye, Responsible for Operations</h5>
                    <p className="card-text">Have expertise in machining field and running the Lathe and CNC machiness for last
                    twenty years successfully.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}

        {/* 4th */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
        <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Sanjeev Bhagat, Responsible for Operations</h5>
                    <p className="card-text">Have expertise in machining field and running the milling machine for last Fifteen
                    years successfully.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}

        {/* 5th */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
        <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Ninad Deogharkar, Responsible for Design & Marketing</h5>
                    <p className="card-text">MMS (Marketing), B.E. (Production) from Mumbai University, Has completed 3-D
                    design certification course, has seven years of industrial experience.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}

        {/* 6th */}
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
        <div className="card my-4 mx-4" style={{width:"29.5%"}}>
                <img src={dp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mr. Kaustubh Chaulkar, Responsible for Development of Instruments & Electronics</h5>
                    <p className="card-text">Diploma in Instrumentation & Process Control, Has seven years of industrial experience.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        {/* </div> */}
    </div>
    </>
  )
}
