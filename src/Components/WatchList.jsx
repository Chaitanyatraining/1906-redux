import React from 'react'
import { useSelector } from 'react-redux'

const WatchList = () => {
    const watchlistData = useSelector((state) => state.watchlistData)
    console.log(watchlistData)
    
  return (
    <div>
        <h2>WatchList</h2>
        {
            watchlistData && watchlistData.length>0 && watchlistData.map((watchlist) => (
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <img src='' alt='' />
                            <h3>{watchlist.movie}</h3>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default WatchList