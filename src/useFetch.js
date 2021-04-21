import { useState, useEffect } from 'react'

export const API_ONE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_FILM}`


const getLocalStorage = () =>{
    let films = localStorage.getItem('films')
    if(films) return JSON.parse(localStorage.getItem('films'))
    else return []
}

const useFetch = (urlMain) =>{
    const [isLoading, setIsLoading] = useState(true) 
    const [films, setFilms] = useState(getLocalStorage()) 
    const [error, setError] = useState({show: false, msg: ''}) 

    const fetchFilms = async(url) =>{
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()

            if(data.Response === 'True'){
                setFilms(data.Search || data)
                setError({show: false, msg: ''})
            } else{
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        fetchFilms(`${API_ONE}${urlMain}`)
        localStorage.setItem('films', JSON.stringify(films))
    }, [urlMain])

    return { isLoading, error, films }
}   

export default useFetch