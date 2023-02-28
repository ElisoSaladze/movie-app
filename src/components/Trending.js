import React from 'react';
import {  useState, useEffect } from 'react';
import MovieBox from './MovieBox';
import '../styles/Movies.css'
import { Link } from 'react-router-dom';

const TRENDING = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
const Trending = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        fetch(TRENDING)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setTrending(data.results);
        })
      }, [])
  return (
    <div  id="trending">
      <div className='grid'>
        <div className='header d'>
          <h1>Trending</h1>
        </div>
        {trending.map((movieReq) => 
        <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox {...movieReq}/></Link>)}
      </div>
    </div>
    
  )
}

export default Trending
