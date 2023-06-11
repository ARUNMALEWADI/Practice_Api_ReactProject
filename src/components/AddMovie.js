import React, { useRef } from 'react'



const AddMovie = (props) => {
    const titleref=useRef();
    const openingtextref=useRef();
    const releasedateref=useRef();

    const MovieHandler=(e)=>{
        e.preventDefault();
        const Movie={
            title:titleref.current.value,
            opening_text:openingtextref.current.value,
            releaseDate:releasedateref.current.value
        }
        props.OnAddMovie(Movie)
        
    
    }





  return <form onSubmit={MovieHandler}>
    <label>Title</label>
    <input type='text' ref={titleref} />
    <label>Opening Text</label>
    <input type='text' ref={openingtextref}/>
    <label>Release Date</label>
    <input type='text'ref={releasedateref}/>
    <button type='submit'>ADD Movie</button>
  </form>
}

export default AddMovie