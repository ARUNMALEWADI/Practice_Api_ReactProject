import React, { useState } from 'react';
import { useEffect,useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies,setMovies]=useState([]);
  const [IsLoading,SetLoading]=useState(false);
  const [error,setError]=useState(null)



 const  FetchMovieHandler=useCallback(async ()=>{
  setError(null)
  SetLoading(true)
  try {
   const response =await fetch('https://react-http-6fa83-default-rtdb.firebaseio.com/movie.json')
   if(!response.ok)
    {        
      throw new Error('Something went Wrong......');
    
    }
   const data=await response.json();
   const loadedmovies=[];
   for(const key in data)
   { loadedmovies.push({id:key,
    title:data[key].title,
    openingText:data[key].opening_text,
    releaseDate:data[key].releaseDate
  })

   }
   
     setMovies(loadedmovies);
                       
  } catch (error) { 
   setError(error.message)
 
    
  }
SetLoading(false)

},[]);

const RetryingHandler=()=>{
 
FetchMovieHandler();
  
  
}

useEffect(()=>{FetchMovieHandler();},[FetchMovieHandler])
 async function AddMovieHandler(movie){
 const response=await fetch('https://react-http-6fa83-default-rtdb.firebaseio.com/movie.json',{
    method:'POST',
    body:JSON.stringify(movie),
    headers:{
      'contet-type':'application/json'
    }
  })
  const data=await response.json()
  console.log(data);
  

}


  return (
    <React.Fragment>
     { !IsLoading && error && <button onClick={RetryingHandler} >Retry</button>}
      <section>
        {<AddMovie OnAddMovie={AddMovieHandler}></AddMovie>}
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
