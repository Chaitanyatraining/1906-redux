import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Movies from '../Components/Movies'
import MovieDetails from '../Components/MovieDetails'
import WatchList from '../Components/WatchList'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/moviedetails/:id' element={<MovieDetails />} />
        <Route path='/watchlist' element={<WatchList />} />
    </Routes>
  )
}

export default Routing