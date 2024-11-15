// import { useState } from "react";

// const App=()=>{
//   const [ran,setRan]=useState("Bhopal");
//   const myval=()=>{
//     setRan("Indore")
//   }
//   return(
//     <>
//     <h1>Welcome to: {ran}</h1>
//     <button onClick={myval}>click Here</button>
//     </>
//   )
// }
// export default App;

import { useState } from "react";

const App=()=>{
  const [color,setColor]=useState("Red");
  
  
  return(
    <>
    <h1 style={{color:color}}>My Favourite Color: {color}</h1>
    <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("green")}}>Green</button>
    <button onClick={()=>{setColor("orange")}}>Orange</button>
    <button onClick={()=>{setColor("lightorange")}}>DarkOrange</button>
    </>
  )
}
export default App;