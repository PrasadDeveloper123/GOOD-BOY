import React from "react";
import Footer from "./Footer";


function Gallery(){

    return(
      <>
        <div style={{border:"1px solid black",marginLeft:"95px",marginTop:"30px",height:"390px",width:"1100px"}}>

  <div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class=" carousel-inner">
    
    <div class="carousel-item active ">
      <img style={{width: "500px",height:"350px",marginLeft:"300px"}}className="img-responsive praneeth"src="/images/img1.jpg"  alt="..."/>
    </div>
    <div class="carousel-item ">
      <img style={{width:"500px",height:"350px",marginLeft:"300px"}}src="/images/img2.jpg"className="img-responsive praneeth"/>
    </div>
    <div class="carousel-item ">
      <img style={{width:"500px",height:"350px",marginLeft:"300px"}}src="/images/img4.jpg"className="img-responsive praneeth"  alt="..."/>
    </div>
    
  </div>
  <button style={{display:"none"}}class="carousel-control-prev kohli" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next kholi" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
</div>

<Footer/>
    </>

  
       
        
    )
}

export default Gallery