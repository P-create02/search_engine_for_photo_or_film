import React, { useState, useContext } from 'react'
import useFetch from './useFetch'

export const API_ONE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_FILM}`

const AppContext = React.createContext()

const AppProvider = ({ children }) =>{
    const [query, setQuery] = useState('superman') 
    const { isLoading, error, films } = useFetch(`&s=${query}`)

    return <AppContext.Provider value={{ isLoading, error, query, setQuery, films }}>{children}</AppContext.Provider>
}

export const useFilmContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider}