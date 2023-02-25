import React from 'react'
import '../styles/Movies.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';

const TRENDING = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
const HomeTrending = () => {
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
    <div className='home-grid'>
      <div className='grid'>
        <div className='header'>
          <h1>Trending</h1>
          <Link className='a' to={"/Upcoming/"} >See all</Link>
        </div>
        {trending.slice(0, 4).map((movieReq) => 
        <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox key={movieReq.id} {...movieReq}/></Link>)}
      </div>
    </div>
  )
}

export default HomeTrending
