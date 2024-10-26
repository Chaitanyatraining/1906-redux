import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { add } from '../Redux/watchListReducer'
import { useDispatch } from 'react-redux'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
      getMovieList()
  }, [])

  const getMovieList = async () => {
    const response = await fetch(`https://dummyapi.online/api/movies/${id}`)
    const data = await response.json()
    setMovie(data)
  }

  const handleAdd = (movie) => {
    // console.log(add(movie))
    dispatch(add(movie))
  }

  return (
    <div>
        <h2>MovieDetails</h2>
        {
          movie && (
            <div className='row'>
              <div className='col-md-6'>
                <img src={`../${movie.image}`} className='img-fluid' />
              </div>
              <div className='col-md-6'>
                <h4>Movie: {movie.movie}</h4>
                <h4>Rating: {movie.rating}</h4>
                <button className='btn btn-warning' 
                onClick={()=> handleAdd(movie)}
                >WatchList</button>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default MovieDetails