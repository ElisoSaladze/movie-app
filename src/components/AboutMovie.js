import React from 'react'
import '../styles/AboutMovie.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import star from '../assets/smol.svg'
const AboutMovie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams();

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    return (
    <div className='parent'>
        <div className='backdrop-div'>
            <img className='backdrop' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="poster" />
            <div className='title'>
                <p>Movibes / about</p>
                <h2>{currentMovieDetail ? currentMovieDetail.original_title : ""}</h2>
            </div>
        </div>
      <div className='about-movie'>  
      <div className="posterBox">
        <img alt="poster" className="movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
      </div>
      <div className='text-div'>
        <h3>{currentMovieDetail ? currentMovieDetail.tagline : ""}</h3>
        <div className='overview-div'>
            <p className="overview">{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
        </div>
        <div>
            <img src={star} alt="star" />
            {currentMovieDetail ? currentMovieDetail.vote_average + " | " + currentMovieDetail.vote_count: ""}
        </div>
        <div>
            <p>Release Date</p>
            <span>{currentMovieDetail ? currentMovieDetail.release_date : ""}</span>
        </div>
        <div>
            <p>Run time</p>
            <span>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</span>
        </div>
        <p>Genres</p>
        <div className="movie-genres">
            {currentMovieDetail && currentMovieDetail.genres
            ? currentMovieDetail.genres.map(genre => (
            <><span className="movie-genre" id={genre.id}>{genre.name}</span></>
            )) : ""}
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutMovie

