import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.css'
const MovieListing = () => {
  const [name,setName]=useState('');
  const movies=useSelector(state=>state.movies);
  const shows=useSelector(state=>state.shows);
  
 
  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        
        <h2>Movies 
             
          </h2>
        <div className="movie-container">
           {
               movies[0]?.Response==='True'?movies[0].Search.map((movie,index)=>(
                 <MovieCard key={index} movie={movie}></MovieCard>
               )):(
                 <div className='movies-error'>Error Aaya hai</div>
               )
           }
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
           {
               shows[0]?.Response==='True'?shows[0].Search.map((movie,index)=>(
                <MovieCard key={index} movie={movie}></MovieCard>
               )):(
                 <div>{shows.Error}</div>
               )
           }
        </div>
      </div>
    </div>
  )
}

export default MovieListing