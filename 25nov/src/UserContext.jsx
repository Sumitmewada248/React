
import { useState,createContext } from "react";
const myContext=createContext();
const UserContext=({children})=>{
    const [user,setUser]=useState(" Pani");
    return(
        <>
        <myContext.Provider value={{user,setUser}}>

        {children}

        </myContext.Provider>
        </>
    )
}
export default UserContext;
export {myContext};
