import React from 'react'

const AddMovie = () => {
  return <form onSubmit={''}>
    <label>Title</label>
    <input type='text'/>
    <label>Opening Text</label>
    <input type='text' />
    <label>Release Date</label>
    <input type='text'/>
    <button type='submit'>ADD Movie</button>
  </form>
}

export default AddMovie