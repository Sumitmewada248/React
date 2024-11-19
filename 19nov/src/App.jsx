// import { useState,useEffect} from "react";

// const App=()=>{
//   // const [count,setCount]=useState(0);

//   //not stopable
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(count+1)
//   //   },1000)
//   // })


//   //fo5r stop at once place
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(count+1)

//   //   },1000)
//   // },[])

// // const [multi, setMulti]=useState(0);
// // const mycounter=()=>{
// //   setCount(count+1);
// // }

//   //
//   // useEffect(()=>{
//   //   setMulti(count*2)
//   // },[count])
//    return(
//     <>
//   {/* //   <h1>my Counter : {count}</h1>
//   //   <h1>Multiplication : {multi}</h1>
//   //   <button onClick={mycounter}>Click here</button> */}
//     </>
//    )
// }




import { useState,useEffect } from "react";
import axios from "axios";

const App=()=>{

const [mydata,setdata]=useState([])
const loudData=()=>{
  let api="https://jsonplaceholder.org/comments"
axios.get(api).then((res)=>{
  setdata(res.data);
})


}
useEffect(()=>{
  loudData();

},[])
const ans=mydata.map((key)=>{
  return(
    <tr>
      <td>{key.id}</td>
      <td>{key.userId}</td>
      <td>{key.postId}</td>
      <td>{key.comment}</td>
    </tr>
  )
})

  return(
    <>
    <table border="20px solid " bgcolor="aqua">
      <tr>
        <td>ID</td>
        <td>UserID</td>
        <td>PostID</td>
        <td>Comment</td>
      </tr>
      {ans}
    </table>
    </>
  )
}


export default App;