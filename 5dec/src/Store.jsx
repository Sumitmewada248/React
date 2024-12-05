import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./counterSlice";
const store = configureStore({
    reducer: {
        // reducers
        mycounter: countReducer
    }
})

export default store    




