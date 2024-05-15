import React from "react";
import Footer from "./Footer";


function Cancel(){

    return(
        <>
        <div style={{border:"1px solid black",width:"1100px",height:"200px",marginTop:"20px",marginLeft:"90px"}}>
         <h4 style={{fontSize:"22px",marginLeft:"10px",marginTop:"10px"}}>Cancel ticket</h4>
         <div style={{border:"1px solid black",width:"1050px",height:"120px",marginLeft:"25px",backgroundColor:"whitesmoke"}}>
<div style={{display:"flex",marginTop:"20px",justifyContent:"space-evenly"}}>
    
            <div><label style={{color:"black",fontSize:"13px"}}>Ticket No.</label><input style={{width:"250px",outline:"black"}} type="phone"/></div>
            <div><label style={{color:"black",fontSize:"13px"}}>UID Number</label><input style={{width:"250px"}}type="phone"/></div>
            <div><label style={{color:"black",fontSize:"13px"}}>Mobile No.</label><input style={{width:"250px"}} type="phone"/></div>
            </div>
            <div style={{display:"flex",marginLeft:"370px",marginTop:"10px"}}>
                <div><button style={{color:"white",backgroundColor:"red",height:"40px",width:"70px",border:"none"}}>Search</button></div>
                <div><button style={{color:"white",backgroundColor:"red",marginLeft:"3px",height:"40px",width:"70px",border:"none"}}>Reset</button></div>
            </div>
            
            </div> 
              

        </div>
        <Footer/>
        </>
    )
}

export default Cancel;