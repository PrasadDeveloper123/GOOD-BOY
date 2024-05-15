import React from "react";
import { Link } from "react-router-dom";
import "./Time.css"
import Footer from "./Footer";



function Time(){

    return(
        <>
        <div style={{border:"1px solid black",width:"1000px",height:"380px",marginTop:"20px",marginLeft:"150px"}}>
            <h5 style={{marginTop:"10px",marginLeft:"30px"}}>Time Table/Live Tracking </h5>
          <div style={{marginLeft:"100px",marginTop:"40px"}}>
            <div className="over"><Link style={{textDecoration:"none",fontSize:"22px"}}to="https://www.apsrtclivetrack.com/#/">City Services Time Table</Link></div>
            <div className="over" style={{marginTop:"20px"}}> <Link style={{textDecoration:"none",fontSize:"22px"}} to="https://www.apsrtclivetrack.com/#/">All Services Time Table & Tracking</Link></div>
            
            </div>
            

        </div>

        <Footer/>

        </>
    )
}
export default Time;