import { myContext } from "./App"
import { useContext } from "react"
const Bhopal=()=>{
    const{user,setUser}=useContext(myContext);
    return(
    
        <>
       <h1> Welcome to Bhopal: {user}</h1>
       <button onClick={()=>{setUser("Ranvir")}}>click</button>
        
        </>
    )
    
    }
    export default Bhopal