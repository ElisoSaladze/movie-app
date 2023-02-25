import React from 'react'
import '../styles/MovieBox.css'
import star from '../assets/Star.svg'
const IMG_PATH = "https://image.tmdb.org/t/p/original";
const MovieBox = ({poster_path, vote_average}) => {
  return (
    <div className='card-mom'>
      <div className='card'>
       <img className='poster' src={IMG_PATH + poster_path} alt="poster" />
      <span className='vote'><img src={star} alt="star" /> {vote_average}</span>
     </div>
    </div>
     
    )
}

export default MovieBox
