import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';


function App() {
    
    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=15c4d07d'

    const[movies , setMovies]=useState("");
    const[search,setSearch]=useState("");

    const searchMovies=async (title)=>
    {
      const response=await fetch(`${API_URL}&s=${title}`);
      const data=await response.json();
      setMovies(data.Search)
    }
    useEffect(()=>
    {
      searchMovies('Batman ');
    },[])




  return (
    <div className='app'>
      <h1>MovieMania</h1>
     <div className='search'>
    <input placeholder='Search for awesome movies !' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    ></input>
    <img
      src=""
      alt='search'
      onClick={()=> searchMovies(search)}
    />
    </div>

    {
      movies?.length>0 ? (<div className='container'> 
       {movies.map((movie)=>
       (
          <MovieCard
            movie={movie}
          />
       ))}
       </div>) :( <div className='empty'><h2>No Movies Found</h2></div>)
    }

    
    
    </div>
    
  )
}

export default App;