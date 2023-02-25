import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';

const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
const HomeTop = () => {
    const [top, setTop] = useState([]);
    useEffect(() => {
        fetch(TOP_RATED)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setTop(data.results);
        })
      }, [])
  return (
    <div className='home-grid'>
      <div className='grid'>
        <div className='header'>
          <h1>Top-Rated</h1>
          <Link className='a' to={"/Top/"} >See all</Link>
        </div>
        {top.slice(0, 4).map((movieReq) => 
        <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox key={movieReq.id} {...movieReq}/></Link>)}
      </div>
    </div>
  )
}

export default HomeTop
