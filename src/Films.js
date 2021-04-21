import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useFilmContext } from './context'

import { FaSearch } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
// not avaliable photo
const urlAvaliable = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


function Films() {
    const { query, setQuery, error, isLoading, films } = useFilmContext()

    return(
        <Wrapper>
            <section className="pages">
                <Link to='/' className='btn'><IoHome /></Link>
                <Link to='/photos' className='btn'><FaSearch/> photos</Link>
            </section>

            <section className='search'>
                <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='search films' className='form-input' value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type='submit' className='submit-btn'>
                        <FaSearch />
                    </button>
                </form><hr />
                    {error.show && <div className='error'>{error.msg}</div>}
            </section>

            <section className='films'>
                <div className='films-center'>

                    {films.map((film, index) =>{
                        const { imdbID, Poster, Title, Year } = film
                        return(
                             <Link to={`/films/${imdbID}`} key={index} className='film'> 
                                <article>
                                    <img src={Poster === 'N/A' ? urlAvaliable : Poster} alt={Title} />
                                    <div className='film-info'>
                                        <h4 className='title'>{Title}</h4>
                                        <p>{Year}</p>
                                    </div>
                                </article>
                            </Link>
                        )
                    })}

                </div>
             {isLoading && <h2 className='loading'></h2>}
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.main`
    overflow-x: hidden; 
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
    .films {
        padding: 5rem 0;
    }
    .films-center {
        width: 90vw;
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        gap: 2rem;
    }
    .film {
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
    }
    .film-info {
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
    .film:hover .film-info {
        transform: translateY(0);
    }
    @media screen and (min-width: 576px) {
        .films-center {
            grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        }
        .search-form {
            max-width: var(--fixed-width);
        }
    }
`

export default Films