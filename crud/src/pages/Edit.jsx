import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

    return (
        <>
            <h1> Edit Book</h1>
    
      Edit Name : <input type="text" name="name" value={mydata.name} onChange={hadleInput}/>
      Edit Price : <input type="text" name="price" value={mydata.price} onChange={hadleInput}/> 
      Edit Author Name : <input type="text" name="author_name" value={mydata.author_name} onChange={hadleInput}/>
      Edit Publish Year : <input type="text" name="publish_year" value={mydata.publish_year} onChange={hadleInput}/>
      <button onClick={loadData}>Update</button>
       </>
    )
}

export default Edit;