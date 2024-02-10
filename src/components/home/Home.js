import React, { useEffect, useState } from 'react'
import "./home.css"
import MovieListing from '../MovieListing/MovieListing'
import axios from 'axios'
import { addMovies,addShows } from '../../redux/movies/movieSlice'
import { useDispatch} from 'react-redux'
import Loader from '../loader/loader'
const Home = () => {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch();
  const API_KEY=88314691;
  const title='Harry';
  useEffect(()=>{
      const fetchMovies = async()=>{
         setloading(true);
         try{
            const res=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}&type=movie`)
            dispatch(addMovies(res.data))
            console.log('res',res);
            setloading(false);
         }catch(error)
         {
            
             console.log('error',error);
         }
      }
      fetchMovies();
  },[])
  const show='Friends'
  useEffect(()=>{
    const fetchshows = async()=>{
       try{
          const res=await axios.get(`https://www.omdbapi.com/?s=${show}&apikey=${API_KEY}&type=series`)
          dispatch(addShows(res.data))
          console.log('res',res.data);
          
       }catch(error)
       {
           console.log('error',error);
       }
    }
    fetchshows();
},[])

  
  return (
    <div className="banner-img">
        {/* <MovieListing/> */}
        {
          loading?(<Loader/>):(<MovieListing/>)
        }
    </div>
  )
}

export default Home
