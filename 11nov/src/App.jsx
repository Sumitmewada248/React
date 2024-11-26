// import student from "./StuData"

// const ans=student.map((item)=>{

// return(
//   <tr>
//     <td>{item.rollno}</td>
//     <td>{item.name}</td>
//     <td>{item.city}</td>
//     <td>{item.fees}</td>
//   </tr>
// )

// })

import EmpData from "./EmpData"
import EmpDesign from "./EmpDesig"
const ans=EmpData.map((key)=> <
  EmpDesign
empid={key.empno}
empname={key.name}
desi={key.designation}
sal={key.salary}
city={key.City}
/>)

const App=()=>{
  return(
     <>
    {/* /* <table border={"2px solid "}width={"800px"} bgcolor="skyblue" style={{textAlign:"center", color:"red", fontSize:"40px"}}>
    //   <tr>
    //     <th>Rollno</th>
    //     <th>Name</th>
    //     <th>City</th>
    //     <th>Fees</th>
    //   </tr>
    //   {ans}
    // </table> */}
    <div id="div">
      {ans}
    </div>
    
    </>
  )
}
export default App