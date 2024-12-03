import { useMemo, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const multi= useMemo(()=>{ 
return count*3;
  },[count])
    return (
        <>
            <h1>App</h1>
            <h1>my Multiply:{multi}</h1>
            <h1>my Increment:{count}</h1>
            <h1>my Increment:{count2}</h1>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount2(count2 -1)}>Increment</button>
        </>
    )
}
export default App  ;