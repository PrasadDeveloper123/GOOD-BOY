import React from "react";


function Table(){

var a;
function one(){
   
   a=  fetch("https://dummyjson.com/cartsg")

   a.then((data)=>{
    console.log(data)
   })

   


    console.log(a)
}
  var d='prasad'

    return(
        <>
        <h1 style={{color:"black"}} onClick={one}>hiii</h1>

        




        
        </>

    )
}

export default Table
