import React from 'react'
import '../styles/Searchbar.css'


const SearchBox = (props) => {
    const {Title, Poster} = props.movie;
  return (
    <div className='search-card'>
       <img className='poster' src={Poster} alt="poster" />
      <span className='vote-search'>{Title}</span>
    </div>
  )
}

export default SearchBox
