import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }

    return data
}   

export default useFetch