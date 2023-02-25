import React from 'react'
import '../styles/Searchbar.css'
import { useState } from 'react';


const SearchBox = (props) => {
  const [click, setClick] = useState(false);
    const {Title, Poster, Year, Type} = props.movie;
  return (
    <div onClick={() => setClick(!click)}  className='result'>
      <div  className='search-card'>
        <img className='poster' src={Poster} alt="poster" />
      </div>
      <div className={click ? "info" : "hide"}>
        <h3>{Title}</h3>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
    </div>
    
  )
}

export default SearchBox
