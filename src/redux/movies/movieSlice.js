import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
    shows:[],
}

const movieSlice=createSlice({
    
    name:'movie',
    initialState,
    reducers:{
        addMovies:(state,action)=>{
           state.movies.push(action.payload)
           
        },
        addShows:(state,action)=>{
            state.shows.push(action.payload);
        }
    }
})

export const {addMovies,addShows} = movieSlice.actions;
export default movieSlice.reducer;