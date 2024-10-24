import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieReducer'

const store = configureStore({
    reducer:{
        moviesData: movieReducer 
    }
})

export default store