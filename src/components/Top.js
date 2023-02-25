import React from 'react'
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import { Link } from 'react-router-dom';

const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
const Top = () => {
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
      <div className='grid'>
        <div className='header'>
          <h1>Top-Rated</h1>
        </div>
        {top.map((movieReq) => 
        <Link className='box' to={`/About-movie/${movieReq.id}`}><MovieBox key={movieReq.id} {...movieReq}/></Link>)}
      </div>
  )
}

export default Top
