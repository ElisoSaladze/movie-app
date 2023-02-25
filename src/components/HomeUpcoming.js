import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';

const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
const HomeUpcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        fetch(UPCOMING)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setUpcoming(data.results);
        })
      }, [])
  return (
    <div className='home-grid'>
      <div className='grid'>
        <div className='header'>
          <h1>Upcoming</h1>
          <Link className='a' to={"/Trending/"} >See all</Link>
        </div>
        {upcoming.slice(0, 4).map((movieReq) => 
        <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox key={movieReq.id} {...movieReq}/></Link>)}
      </div>
    </div>
  )
}

export default HomeUpcoming
