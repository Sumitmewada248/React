import { useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { message } from "antd";


const Search=()=>{  

    const[year,setYear]=useState("");
    const[mydata, setMydata] = useState([]);
    const [err,SetErr]=useState("");
    const handleSubmit=()=>{
        
        let api=`http://localhost:3000/books?publish_year=${year}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);

            if(res.data.length==0){
                message.error("No Data Found For This Year");
                SetErr("No Data Found");
            }   
            else{
                SetErr("");
                message.success(" Data Found For This Year");
            }   
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.name} </td>
                <td> {key.price} </td>
                <td> {key.author_name} </td>
                <td> {key.publish_year} </td>
              </tr>
            
            </>
        )
    })
    return(
        <>
        <h1> Search Books</h1>
        Enter Year <input type="text" name="publish_year" onChange={(e)=>setYear(e.target.value)}/><button onClick={handleSubmit}>Search</button>



        <Table striped bordered hover>
        <thead>
          <tr>
            <th> Book name</th>
            <th>Price</th>
            <th>Author Name</th>
            <th>Publish Year</th>
          </tr>
        </thead>
        <tbody>
      {err}
        {ans}
      </tbody>
      </Table>
  
</>
        
    )
}    

export default Search  