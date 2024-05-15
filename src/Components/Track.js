import React from "react";
import "../Track.css"
import Footer from "./Footer";

function Track(){

    return(
      <>
        <div className="track">
            <h3 style={{fontSize:"20px",marginLeft:"10px"}}>Track service Status</h3>

            <div className="dhoni" style={{border:"1px solid black",width:"1100px",height:"80px",marginLeft:"45px",marginTop:"10px",backgroundColor:"whitesmoke"}}>
                <div className="vijay" >
                   <div >
                    <form>
                      <label style={{fontSize:"13px",color:"black"}}>Service No.</label>  <input style={{height:"40px"}} type="phone"/>
                    </form>
                    
                    </div> 
                    <div>
                    <form>
                    <label style={{fontSize:"13px",color:"black"}}>Journey date.</label> <input style={{height:"40px"}} type="date"/>
                    </form>
                    
                    </div>
                    <div>

                      <button style={{backgroundColor:"red",color:"white",width:"90px",height:"40px",border:"none",marginRight:"30px"}}>Track Bus</button>
                        </div> 
                </div>

            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Track;