import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([])
 async function FetchMovieHandler(){
  const response =await fetch('https://swapi.dev/api/films/')
 const data=await response.json()
  const transfomeddata=data.results.map((movie)=>{return {id:movie.episode_id,
                         title:movie.title,
                         openingText:movie.opening_crawl,
                        releaseDate:movie.release_date}} )
                        
                        setMovies(transfomeddata);

}

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
