import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value : 0,
    },
    reducers:{
        increament:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -=1
        },
        increasesbyamt:(state,action)=>{
            state.value += action.payload
        }
    }
})

export const{increament,decrement,increasesbyamt}= counterSlice.actions
export default counterSlice.reducer