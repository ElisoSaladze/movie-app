import axios from 'axios';
import React, { useState } from 'react';
import search from '../assets/Search.svg';
import "../styles/Searchbar.css";
import SearchBox from './SearchBox';

const API_KEY = "7b5d3651"
const Searchbar = () => {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    updateMovieList(response.data.Search)
  }
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  }

  return (
    <div className="center-div">
      <div className='search'>
        <button type='submit'><img src={search} alt="search" /></button>
        <input type="text" placeholder="Search for movies.." value={searchQuery} onChange={onTextChange}/>
      </div>
      <div className={movieList?.length ? "grid search-grid" : "none"}>
       {movieList?.length ? movieList.map((movie, index) =><SearchBox key={index} movie={movie}/>) : null} 
      </div> 
    </div>
    
  )
}

export default Searchbar
