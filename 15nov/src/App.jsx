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
// import { useState } from "react";
// const App=()=>{
//   const [color,setColor]=useState("Red");
  

//   return(
//     <>
//     <h1 style={{color:color}}>My Favourite Color: {color}</h1>
//     <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
//     <button onClick={()=>{setColor("green")}}>Green</button>
//     <button onClick={()=>{setColor("orange")}}>Orange</button>
//     <button onClick={()=>{setColor("lightblue")}}>lightblue</button>
//     </>
//   )
// }
// export default App;


import { useState } from "react";

const App=()=>{
  const [cnt,setCnt]=useState(0);
  const myInc=()=>{
    setCnt(cnt+1)
  }
  const myDec=()=>{
    if(cnt<=0){
      alert("You are not decrement less than zero")
    }
    else{
      setCnt(cnt-1)
    }
  }
  return(
    <>
   <h1>My Counter :{cnt}</h1>
   <button onClick={myInc}>Increment</button>
   <button onClick={myDec}>Decrement</button>
   <button onClick={()=>{setCnt(0)}}>Reset</button>


</>
    )}
    export default App;