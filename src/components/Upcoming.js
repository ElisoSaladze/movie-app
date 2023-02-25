import React from 'react'
import { useState, useEffect } from 'react'
import MovieBox from './MovieBox';
import '../styles/Movies.css'
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
const Upcoming = () => {
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
    <div className='grid' id="upcoming">
      <Searchbar />
        <div className='header d'>
            <h1>Upcoming</h1>
        </div>
      {upcoming.map((movieReq) => 
      <Link key={movieReq.id} className='box' to={`/About-movie/${movieReq.id}`}><MovieBox {...movieReq}/></Link>)}
    </div>
  )
}

export default Upcoming
