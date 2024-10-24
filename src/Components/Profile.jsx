import React, { useEffect } from 'react'
import useFetch from './Hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/movieReducer';

const Profile = () => {
    const dispatch = useDispatch()
    const socialData = useSelector((state) => state.profileData.data)
    console.log(socialData)
    const url = 'https://dummyapi.online/api/movies';

    useEffect(() => {
        dispatch(fetchData(url))
    }, [])

    return (
        <div className='bg-black'>
            <div class="container mb-5 py-5">
                <div class="row row-cols-1 row-cols-md-6 g-4">
                    {
                        socialData && socialData.length > 0 && socialData.map((list) => (
                            <div class="col">
                                <div class="card h-100">
                                    <img src={`./${list.image}`} class="card-img-top" alt={list.movie} />
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="card-rating">★ {list.rating}</span>
                                        </div>
                                        <h5 class="card-title">{list.movie}</h5>
                                        <div class="d-flex justify-content-center">
                                            <a href="#" class="btn btn-primary my-3">Watch options</a>
                                        </div>
                                        <a href="#" class="btn btn-outline-secondary btn-trailer">Trailer</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Profile