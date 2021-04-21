import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import { BiCopy } from 'react-icons/bi'

// from https://unsplash.com/developers
const clientID = `?client_id=${process.env.REACT_APP_KEY_P}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function Photos() {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(0)
    const [query, setQuery] = useState('')
    const [on, setOn] = useState(false)

    
    const createImages = async() =>{
        // document.cookie = 'SameSite=None';
        setLoading(true)
        let url
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`

        if(query) {url = `${searchUrl}${clientID}${urlPage}${urlQuery}`}
        else {url = `${mainUrl}${clientID}${urlPage}`}

        try {
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data);

            setPhotos((oldOnes) =>{
                if(query && page === 1){ return data.results}
                else if(query) {return[...oldOnes, ...data.results]}
                else {return [...oldOnes, ...data]}
            })
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(() =>{
        createImages()
        // eslint-disable-next-line
    }, [page])


    useEffect(() =>{
        const event = window.addEventListener('scroll', () =>{
            if(!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight){
                setPage((oldOne) => {return oldOne + 1})
                setOn(true)
            }
        })
        return () => window.removeEventListener('scroll', event)
        // eslint-disable-next-line
    }, [])
    const goUp = () =>{
        document.documentElement.scrollTop = 0
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setPage(1)
    }

    return(
        <Wrapper>
            <section className="pages">
                <Link to='/' className='btn'><IoHome /></Link>
                <Link to='/films' className='btn'><FaSearch/> films</Link>
            </section>

            <section className='search'>
                <form className='search-form'>
                    <input type='text' placeholder='search photos' className='form-input' value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type='submit' className='submit-btn' onClick={handleSubmit}>
                        <FaSearch />
                    </button>
                </form><hr />
            </section>

            <section className='photos'>
                <div className='photos-center'>
                
                    {photos.map((item, index) =>{
                        // console.log(item);
                        const { urls: { regular }, 
                        alt_description, 
                        user: {name, location, portfolio_url, 
                        profile_image: { medium }} } = item

                        return(
                            <article className='photo' key={index}>
                                <img src={regular} alt={alt_description}/>
                                <div className='photo-info'>
                                    <div className="copy"><a href={regular} target="_blank" rel="noopener noreferrer" rel="noreferrer"><BiCopy /></a></div>
                                    <div>
                                    <h4>{name}</h4>
                                    <h5>{location}</h5>
                                    </div>
                                    <a href={portfolio_url} target='_blank' rel="noreferrer">
                                    <img src={medium} className='user-img' />
                                    </a>
                                </div>
                            </article>
                        )
                    })}

                </div>
                {loading && <h2 className='loading'></h2>}
            </section>
            {on && <div className='up' onClick={() => goUp()}><RiArrowUpCircleFill /></div>}
        </Wrapper>
    )
}

const Wrapper = styled.main`
    overflow-x: hidden; 
    .up{
        position: fixed;
        right: 1%;
        bottom: 1%;
        font-size: 3rem;
        cursor: pointer;
    }
    .copy a{
        color: var(--primary7);
        cursor: zoom-in;
        font-size: 2rem;
    }
    .pages{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        box-shadow: var(--dark-shadow);
    }
    .search {
        padding: 4rem 1rem 1rem 1rem;
        width: 90vw;
        max-width: var(--max-width);
        margin: 0 auto;
        box-shadow: var(--dark-shadow);
    }
    .search-form {
        display: flex;
    }
    .form-input {
        width: 100%;
    }
    .form-input,
    .submit-btn {
        padding: 0.75rem 1.25rem;
        border: none;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        font-size: 1.5rem;
        background: transparent;
        color: var(--xddd);
        border-bottom: 3px solid var(--xddd);
    }
    .form-input {
        color: var(--xddd);
    }
    .form-input::placeholder {
        color: var(--xddd);
    }
    .photos {
        padding: 5rem 0;
    }
    .photos-center {
        width: 90vw;
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        gap: 2rem;
    }
    .photo {
        height: 17.5rem;
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
        h4 {
            margin-bottom: 0.25rem;
        }
        h5{
            font-style: italic;
            color: var(--primary4);
        }
    }
    .user-img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }
    .photo-info {
        position: absolute;
        width: 100%;
        padding: 1rem;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        transform: translateY(100%);
        transition: var(--transition);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .photo:hover .photo-info {
        transform: translateY(0);
    }
    @media screen and (min-width: 576px) {
        .photos-center {
            grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        }
        .search-form {
            max-width: var(--fixed-width);
        }
    }
`

export default Photos