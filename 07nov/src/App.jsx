// const data=name.map((key)=><li>{key}</li>)

// const App=()=>{
//     const name=["Ram","Aditya","Pawan","Danish","Sumit","Shubham"];
//     const data=name.map((key)=>{
//         return(
//             <>
//             {/* <h1>{key}</h1> */}
//             {/* <li>{key}</li>     */}    
//             <option>{key}</option>    
//             </>
//         )
        
//     })
//     return(
//         <>
//         {/* {data} */}
//         <h1>Welcome</h1>
//         {/* <ol> */}
//             {/* {data} */}
//         {/* </ol> */}

//         <select>
//             {data}
//         </select>
//         </>
//     )
   
// }
// export default App;


const student=[
  {
      "rollno":121,
      "name":"Ram",
      "city":"bhopal"
  },
  {
      "rollno":122,
      "name":"Aditya",
      "city":"ujjain"
  },
  {
      "rollno":123,
      "name":"Ankur",
      "city":"bhopal"
  },
  {
      "rollno":124,
      "name":"Ashish",
      "city":"Up"
  },
  {
      "rollno":125,
      "name":"Sumit",
      "city":"indore"
  }
]

const data=student.map((key)=>{
  return(
      <>
          <tr>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
          </tr>
      </>
  )
})
const App=()=>{
      return(
          <>
          <table width="50%" border="2">
              <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>City</th>
              </tr>
              {data}
          </table>
          </>
      )
}
export default App;
