import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { message } from "antd";
const Edit = () => {

const [mydata, setMydata] = useState([]);
const {id}=useParams();


const loadData=()=>{
    let api=`http://localhost:3000/books/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}   

const hadleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
}

useEffect(()=>{    
    loadData();
}, [])
const handleSubmit=()=>{
    let api=`http://localhost:3000/books/${id}`; 
    axios.put(api,mydata).then((res)=>{
        message.success("Data Updated Successfully");
    })
}

    return (
        <>
            <h1> Edit Book</h1>
    
      Edit Name : <input type="text" name="name" value={mydata.name} onChange={hadleInput}/><br />
      Edit Price : <input type="text" name="price" value={mydata.price} onChange={hadleInput}/> <br />
      Edit Author Name : <input type="text" name="author_name" value={mydata.author_name} onChange={hadleInput}/><br />
      Edit Publish Year : <input type="text" name="publish_year" value={mydata.publish_year} onChange={hadleInput}/><br />
      <button onClick={handleSubmit}>Update</button>
       </>
    )
}

export default Edit;