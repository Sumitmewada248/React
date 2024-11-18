import { useState } from "react";

const App=()=>{

// const [name,setName]=useState("");
// const [city,setCity]=useState("");
// const [roll,setRoll]=useState("");
// const Handel=()=>{
//   alert("name :"+name + "City :"+city + "Rollno :"+roll);
// }
const[input, setInput]=useState({})
const Handel=(e)=>{
let name=e.target.name;
let value=e.target.value;

setInput(values=>({...values,[name]:value}))
console.log(input);
}

  return(
    <>
    <h1>Applicaion Form</h1>
{/* 
    Enter Your Name :<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <br />
    Enter Your City :<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>

<br />

    Enter Your Rollno :<input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}}/>
<br /> */}


Enter Rollno: <input type="text" name="rollno" onChange={Handel} /> <br />
Enter Name: <input type="text" name="name" onChange={Handel} /> <br />
Enter City: <input type="text" name="city" onChange={Handel} /> <br />
Enter Fees: <input type="text" name="fees" onChange={Handel} /> <br />

<button onClick={Handel}>Save !!!</button>

    </>
    


  )
}
export default App;