import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import './movieDetail.css'
import { data } from 'autoprefixer';
const MovieDetail = () => {

  const location=useLocation();
  let path=location.pathname;
  path=path.split('/')[2];
  const API_KEY=88314691;
  const [data,setData]=useState('');
  const fetchDetails=async()=>{
    try{
    
      const res=await axios.get(`http://www.omdbapi.com/?i=${path}&apikey=${API_KEY}&plot=full`)
      console.log('res->data',res.data);
      setData(res.data);
    }catch(error)
    {
      console.log('error',error);
    }
  }
  useEffect(()=>{
    fetchDetails();
  },[])
  
  
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className='fa fa-star'></i> :{data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumbs-up'></i> :{data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa fa-film'></i> :{data.Runtime}
          </span>
          <span>
            Year <i className='fa fa-calender'></i> :{data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  )
}

export default MovieDetail