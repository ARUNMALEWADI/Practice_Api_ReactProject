import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const [IsLoading,SetLoading]=useState(false);
 async function FetchMovieHandler(){
  console.log('Inside');
  SetLoading(true)
  console.log('afterloading');
  const response =await fetch('https://swapi.dev/api/films/')
 const data=await response.json();
  const transfomeddata=data.results.map((movie)=>{return {id:movie.episode_id,
                         title:movie.title,
                         openingText:movie.opening_crawl,
                        releaseDate:movie.release_date}} )

                        setMovies(transfomeddata);
                        console.log('aftersetmovies');
                        SetLoading(false)
                        console.log('afternot loading');

}
console.log('outside');

  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       { !IsLoading && <MoviesList movies={movies} />}
       {IsLoading&&<p>Loading.....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
