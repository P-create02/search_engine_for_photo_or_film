import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'

const Film = () =>{
    const { id } = useParams()

    const { isLoading, error, films } = useFetch(`&i=${id}`)

    if(isLoading){
        return <div className="loading"></div>
    }
    if(error.show){
        return(
        <div className='page-error'>
            <h1>{error.msg}</h1>
            <Link to='/films' className='btn'>
                back
            </Link>
        </div>
        )
    }

    const { Poster, Title, Plot, Year } = films
    return(
    <Wrapper>
      <img src={Poster} alt={Title} />
      <div className='single-film-info'>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to='/films' className='btn'>
          back
        </Link>
      </div>
    </Wrapper>
    )
}


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  color: black;
  padding: 1rem 0.25rem;
  background: rgb(228,120,98);
  background: linear-gradient(90deg, rgba(228,120,98,1) 0%, rgba(246,212,205,1) 15%, rgba(255,255,255,1) 50%, rgba(247,217,211,1) 85%, rgba(228,120,98,1) 100%);
  p{ color: black;}
  img {margin-bottom: 1rem;}
  div{ width: 100vw;}
  .btn { margin: 1rem;}
`

export default Film
