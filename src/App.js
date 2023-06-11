import React, { useState } from 'react';
import { useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const [IsLoading,SetLoading]=useState(false);
  const [error,setError]=useState(null)


 async function FetchMovieHandler(){
  setError(null)
  SetLoading(true)
  try {
   const response =await fetch('https://swapi.dev/api/film/')
   if(!response.ok)
    {        
      throw new Error('Something went Wrong......');
    
    }
   const data=await response.json();
   
    const transfomeddata=data.results.map((movie)=>{return {id:movie.episode_id,
                           title:movie.title,
                           openingText:movie.opening_crawl,
                          releaseDate:movie.release_date}} )
  
                          setMovies(transfomeddata);
                      
                        
                        
                          
    
  } catch (error) { 
   setError(error.message)
 
    
  }
  SetLoading(false)

}

const RetryingHandler=()=>{
 
FetchMovieHandler();
  
  
}




  return (
    <React.Fragment>
     { !IsLoading && error && <button onClick={RetryingHandler} >Retry</button>}
      <section>
        <button onClick={FetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       { !IsLoading && movies.length>0&&<MoviesList movies={movies} />}
       {!IsLoading&&movies.length==0 && <p>No movies </p>}
       {IsLoading&&<p>Loading.....</p>}
       { !IsLoading && error &&<p>{error}</p>}
    
      </section>
    </React.Fragment>
  );
}

export default App;
