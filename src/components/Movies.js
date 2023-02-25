import React from 'react';
import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';
import '../styles/Movies.css';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  return (
    <div id="movies" className='grid'>
      {/* <Searchbar /> */}
      {movies.map((movieReq) => 
      <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox {...movieReq}/></Link>
      )}
    </div>
  )
}

export default Movies
