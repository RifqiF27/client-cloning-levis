import {useEffect, useState} from 'react'
import {baseUrl} from '../config/baseUrl'


export default function useFetch(path) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        setLoading(true)
        fetch(baseUrl+ path)
        .then(async (res) => {
            const resData = res.json()
            if (!res.ok) throw await res.text()
            return resData
        })
        .then((result) =>{
            setData(result)
        })
        .catch((err) =>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        fetchData()
    }, [])

    return {data, error, loading, fetchData}
}