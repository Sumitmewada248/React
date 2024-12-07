import { useMemo, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const[mynum, setMynum] = useState(0);
  const [nm, setNm] = useState("");
  const heavy=useMemo(()=>{
    for(let i=0;i<1000000000;i++){

  }


  return mynum*2;
},
[mynum])

  const multi= useMemo(()=>{ 
return count*3;
  },[count])
    return (
        <>
            <h1>App in use</h1>
            <h1>{heavy}</h1>
            <h1>my Multiply:{multi}</h1>
            <h1>my Increment:{count}</h1>
            <h1>my Increment:{count2}</h1>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount2(count2 -1)}>Increment</button>

            <hr color="red" size="4px" />

             <h1>Welcome</h1>
             <input type="number" value={mynum} onChange={(e) => setMynum(e.target.value)} />
              <input type="text" value={nm} onChange={(e) => setNm(e.target.value)} />



        </>
    )
}
export default App  ;