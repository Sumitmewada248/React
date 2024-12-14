import {useContext} from "react";
import { myContext } from "./UserContext";

// import Bhopal from "./Bhopal"

 const Cybrom=()=>{
    const {user,setUser}=useContext(myContext);
 return(

     <>
   <h1> This is Counter side</h1>
    <button onClick ={()=>{setUser(user+1)}}>Increment</button>
    <h1>{user}</h1>
    <button onClick={()=>{setUser(user-1)}}>Decrement</button>
    <button onClick={()=>{setUser(0)}}>Reset</button>
    </>
)
 }
  export default Cybrom;



