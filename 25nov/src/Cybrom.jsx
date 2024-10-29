import {useContext} from "react";
import { myContext } from "./UserContext";

// import Bhopal from "./Bhopal"

 const Cybrom=()=>{
    const {user,setUser}=useContext(myContext);
 return(

     <>
   <h1> Welcome to Cybrom:{user}</h1>
    <button onClick={()=>{setUser("Sumit")}}>click</button>
    </>
)

 }
 
  export default Cybrom;



