import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieReducer'
import watchlistReducer from './watchListReducer'

const store = configureStore({
    reducer:{
        moviesData: movieReducer,
        watchlistData: watchlistReducer
    }
})

export default store