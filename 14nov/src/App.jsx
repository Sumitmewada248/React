// without parameter

// const App=()=>{

//   const display=()=>{
// alert("Event Example!!!");
//   }
//   return(
//     <>
//     <h1>hello</h1>
//     <button onClick={display}>click here</button>

//     </>
//   )
// }
// export default App;


// const App=()=>{
// With Parameter
//   const myname=(nm)=>{
// alert(`my name is : ${nm}`);
//   }
//   return(
//     <>
//     <h1>Welcome!!</h1>
//     <button onClick={()=>{myname("sumit!")}}>click here</button>

//     </>
//   )
// }
// export default App;


// const App=()=>{
//   // With event (e)
//     const myname=(nm, e)=>{
//    alert(`my name is : ${nm}  Event : ${e.type}`);
//     }
//     return(
//       <>
//       <h1>Welcome!!</h1>
//       <button onClick={(e)=>{myname("sumit!",e)}}>click here</button>
  
//       </>
//     )
//   }
//   export default App;

// const App=()=>{
//   // With event (e)
//     const myname=(e)=>{
//    alert("My name is sanju   Event :"+e.type);
//     }
//     return(
//       <>
//       <h1>Welcome!!</h1>
//       <button onClick={myname}>click here</button>
  
//       </>
//     )
//   }
//   export default App;


const App=()=>{
  
    const myval=(e)=>{
      console.log(e);
      let nm=e.target.name;
      let val=e.target.value;
      alert("Name :"+nm+"value :"+val)
    }
    return(
      <>
      <h1>Welcome!!</h1>
      <button name="btn1" value="mybutton" onClick={myval}>click here</button>
  
      </>
    )
  }
  export default App;