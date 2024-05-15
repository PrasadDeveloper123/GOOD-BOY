import React from "react";

import '../Rowone.css';
import { Link } from "react-router-dom";

function Rowone(){

   
    return(
      <>
        <div className="b">
        <div>
           <img src="/images/logoapsrtc1.gif"class="img-responsive" alt="Cinque Terre" style={{color:"white",width:"450px",height:"100px",marginLeft:"200px",marginTop:"15px"}}></img>
           </div>
           <div>

           
            
            <Link className="c" id="one" to="/"style={{marginLeft:"350px",width:"200px",height:"200px"}}><span className="mahesh" style={{width:"200px"}} >e Ticket login</span></Link>
           <Link className="c" id="two" to="/opr"><span className="mahesh" >ATB/OPR Login</span></Link>
           <div><i class="fa fa-volume-control-phone  font" aria-hidden="true"></i><span style={{color:"black"}}>(24/7 Customer Support)<p id="phone">0866 2570005</p></span></div>

             </div>

 
           
            

            
           </div>


           <div className="secondrow">

            <div><Link className="second" to="/home">Home</Link></div>
            <div><Link className="second"to="/">Ticket Status</Link></div>
            <div><Link className="second"to="/cancel">Cancel Ticket</Link></div>
            <div><Link className="second"to="/track">Track Services</Link></div>
            <div><Link className="second"to="/gallery">Gallery</Link></div>
            <div><Link className="second" to="/">Wallet</Link></div>
            <div><Link className="second"to="/time">Time/Table Track</Link></div>
            <div><Link className="second"to="https://www.shipmantra.com/apsrtc/personal/" id="parcel">Door To Door Online Parcel Booking</Link></div>


           </div>


           </>

           
          

       
    )
}

export default Rowone;