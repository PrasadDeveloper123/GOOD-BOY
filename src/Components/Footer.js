import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";

function Footer(){

    return(
        <div  className="prabhas">
            <div className="down">

           <div>
           <Link className="o" to=""style={{marginLeft:"15px",fontSize:"12px"}}>FAQS</Link>
            
           </div>
           <div style={{marginLeft:"15px",fontSize:"12px"}}>
            |
           </div>
           <div>
            
            <Link className="o" to=""style={{marginLeft:"15px",fontSize:"12px"}}>Privacy policy</Link>
           </div>
           <div style={{marginLeft:"15px",fontSize:"12px"}}>
           |
           </div>
           <div>
           
           <Link className="o" to=""style={{marginLeft:"15px",fontSize:"12px"}}>Terms&Conditions</Link>
           </div>
           
           <div style={{marginLeft:"15px",fontSize:"12px"}}>
           |
           </div>
           <div >
         <Link className="o" to=""style={{marginLeft:"15px",fontSize:"12px"}}>About US</Link> 
           </div>

           <div style={{fontSize:"12px",marginLeft:"30px"}}>
         Follow US on:<Link className="o"to="https://www.facebook.com/apsrtc" ><i style={{marginLeft:"10px"}}class="fa-brands fa-square-facebook"></i></Link>
         <Link className="o"to="https://twitter.com/apsrtc"><i style={{marginLeft:"20px"}} class="fa-brands fa-square-twitter"></i></Link>
           </div>

           <div style={{marginLeft:"300px"}}>
            <span>Powered By</span>
            <span style={{marginLeft:"30px",fontSize:"30px"}}>abhibus</span>
           </div>
           
           
           </div>
           <p style={{color:"white",fontSize:"13px",wordSpacing:"wordToWord",marginLeft:"20px"}}> version v4.7 | Copy right @2011 apsrtc.in,All rights reserved</p>
           

           
           
           

        </div>
    )
}


export default Footer