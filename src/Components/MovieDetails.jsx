import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const {id} = useParams()

  useEffect(() => {
      getMovieList()
  }, [])

  const getMovieList = async () => {
    const response = await fetch(`https://dummyapi.online/api/movies/${id}`)
    const data = response.json()
    setMovie(data)
  }

  return (
    <div>
        <h2>MovieDetails</h2>
        {
          // movie && Object.keys(movie) 
        }
    </div>
  )
}

export default MovieDetails