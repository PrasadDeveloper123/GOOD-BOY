import React from "react";
import "../Home.css"
import Footer from "./Footer";


function Home(){
    return(
        <>
        <div style={{width:"100%",height:"400px",backgroundSize:"cover",backgroundImage:"url('/images/green1.jpg')"}}>
           

    
<div className="prasad">
    <div className="ticket">
        <h1 style={{color:"red",marginLeft:"80px",fontSize:"35px"}}>Search for bus tickets!</h1>

        <form>

        <input style={{marginLeft:"110px"}}type="text" placeholder="From"/><br></br><br></br>
        <input type="text" style={{marginLeft:"110px"}}placeholder="To"/><br></br><br></br>
        

        <input type="date" style={{marginLeft:"110px"}} placeholder="Depart On"/>
        <input type="date" style={{marginTop:"15px",marginLeft:"110px"}} placeholder="For Round Trip"/><br></br><br></br>
        <button style={{width:"200px",height:"50px",backgroundColor:"red",marginLeft:"150px",color:"white"}} >Check Availability</button>

        </form>
    </div>

    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img style={{width: "500px",height:"350px"}}className="img-responsive praneeth"src="/images/slider1.webp"  alt="..."/>
    </div>
    <div class="carousel-item ">
      <img style={{width:"500px",height:"350px"}}src="/images/slider2.webp"className="img-responsive praneeth"/>
    </div>
    <div class="carousel-item ">
      <img style={{width:"500px",height:"350px"}}src="/images/slider3.webp"className="img-responsive praneeth"  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev kohli" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next kholi" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>




                                  </div>


        
       
        
        </div>
<p style={{backgroundColor:"red",color:"red",height:"5px",fontSize:"4px",position:"absolute",width:"100%",marginTop:"0px"}}>h</p>  



  
  


        
     <Footer/>   
        
   
        </>
    )
} 
export default Home;