import { useState,useEffect } from "react";
import axios from "axios";

const Insert=()=>{
    const [input,setInput]=useState([])

const handelInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput((values)=>({...values, [name]:value}))
    console.log(input);
}

const handelSubmit=()=>{
    let api="http://localhost:3000/student"
    axios.post(api,input).then((res)=>{
        alert("data save !!")
    })
}

return(
    <>
    <h1>Insert Page</h1>
    Enter rollno : <input type="text"  name="rollno" onChange={handelInput}/> <br />
   Enter name : <input type="text"  name="name" onChange={handelInput}/> <br />
    Enter city : <input type="text"  name="city" onChange={handelInput}/> <br />
    Enter fees : <input type="text"  name="fees" onChange={handelInput}/> <br />

    <button onClick={handelSubmit}>Submit</button>
    
    </>
)
}
export default Insert;


