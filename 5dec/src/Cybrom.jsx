import { increment,decrement } from "./counterSlice"
import { useSelector,useDispatch } from "react-redux"

const Cybrom = () => {
const myvalue = useSelector(state => state.mycounter.count)
const dispatch = useDispatch()

    return (
        <>
        <center>
            <h1>Counter Program</h1>
        
            <button onClick={() => dispatch(increment())}> INCREMENT</button>
            <h1>{myvalue}</h1>
            <button onClick={() => dispatch(decrement())}> DECREMENT</button>

            </center>
        </>
    )   
}

export default Cybrom