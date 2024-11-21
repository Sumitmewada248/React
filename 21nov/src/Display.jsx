import { useState,useEffect } from "react";

const Display=()=>{
    const [mydata,setData]=useState([])

    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setMydata(res.data);

          
        }).catch((err)=>{
            console.log(err);
        })+
     }


}