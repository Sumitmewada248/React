import { createSlice } from "@reduxjs/toolkit";
import message from "antd/es/message";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if(state.count ==0){
                message.error("Don`t Go Below Zero")
            }
            else{
            state.count-= 1;
            }
            
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;


