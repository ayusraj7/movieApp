
import React from 'react'
import './moviecard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
  
  return (
    <>
      <Link to={`/movie/${movie.imdbID}`}>
       <div className='card-item'>
        <div className="card-inner">
          <div className="card-top">
            <img src={movie.Poster} alt={movie.Title} height={250}/>
          </div>
          <div className='card-bottom'>
            <div className="card-info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
       </div>
      </Link>
    </>
  )
}

export default MovieCard

