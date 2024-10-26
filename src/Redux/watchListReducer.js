import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
    name:'watchlist',
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload)
        }
    }
})

export default watchListSlice.reducer
export const {add} = watchListSlice.actions