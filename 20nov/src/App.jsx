// import { useState ,useEffect } from "react";
// import axios from "axios";


// const App=()=>{
//   const [mydata,setMydata]=useState([]);
//   const loadData=()=>{
//     let api="http://localhost:3000/student";
//     axios.get(api).then((res)=>{
//       setMydata(res.data);
//       console.log(res.data);
//     })
//   }
//   const ans=mydata.map((key)=>{
//     return(
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>
//     </tr>
//     )
//   });
//   return(
//     <>
//     <h1>Display Axios data</h1>
//     <button onClick={loadData}>show data</button>
//     <hr />

//     <table border="2px" width="500px"bgcolor="aqua" align="center">
//       <tr bgcolor="yellow" >
//       <th >Rollno</th >
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>

//     </>
//   )
// }
// export default App;


import { useState,useEffect } from "react";
import axios from "axios";

const App=()=>{

const [mydata,setMydata]=useState([])
const loadData=()=>{

let api="http://localhost:3000/student";
axios.get(api).then((res)=>{

    setMydata(res.data);
    console.log(res.data);

})
}

const ans=mydata.map((key)=>{

    return(
       <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.class}</td>
        <td>{key.city}</td>
       </tr>

    )

})

    return(
        <>
        <h1>Display Data</h1>
        <button onClick={loadData}> Show Data</button>


        <hr />
        <table>
            <tr>

                <th>Rollno</th>
                <th>Name</th>
                <th>Class</th>
                <th>City</th>
            </tr>
            {ans}
        </table>
         
        </>
    )
}
export default App;