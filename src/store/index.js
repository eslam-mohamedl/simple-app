
import { createSlice , createStore } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name : "auth",
    initialState : {counter : 0},
    reducers: {
        increase : (state, action) =>{
            state.counter += 1;
        },
        decrease : (state, action) =>{
            state.counter -= 1;
        }
    }
 })

 const store = createStore(counterSlice.reducer);

 export const {increase,decrease} = counterSlice.actions;

 export default store;





