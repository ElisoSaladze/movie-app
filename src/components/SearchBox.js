import React from 'react'
import '../styles/Searchbar.css'


const SearchBox = (props) => {
    const {Title, Poster} = props.movie;
  return (
    <div>
      <div className='search-card'>
        <img className='poster' src={Poster} alt="poster" />
        <span className='vote-search'>{Title}</span>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}

export default SearchBox
