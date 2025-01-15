import { useContext, useState } from "react";
import Comp1 from "./Comp1";
import { createContext } from "react";
const myContext=createContext();

const App=()=>{
  const [name ,setName]=useState("Dhananjay")
  return(
    <>
    <h1>Hello Ring</h1>
   < myContext.Provider value={{name}}>
    <Comp1/>
   </myContext.Provider>
  
    </>
  )

  
}
export default App;
export {myContext};