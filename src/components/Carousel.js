import React from 'react'
import { useEffect, useState } from 'react'
import CarouselInfo from './CarouselInfo';
import { Link } from 'react-router-dom';
import '../styles/Carousel.css'

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Carousel = () => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect(() => {
      timeOut =
        autoplay &&
        setTimeout(() => {
          slideRight();
        }, 2000);
    });

    const slideRight = () => {
      if (current === carouselImages.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    };
    const slideLeft = () => {
      if (current === 0) {
        setCurrent(carouselImages.length - 1);
      } else {
        setCurrent(current - 1);
      }
    };
  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setCarouselImages(data.results);
    })
  }, [])
  return (
    <div className='carousel' 
    onMouseEnter={() => {
      setAutoplay(false);
      clearTimeout(timeOut)}} 
    onMouseLeave={() => {setAutoplay(true)}}>
        <div className='wrapper'>
            {carouselImages.map((info, index) =>
            <Link key={info.id} className='link' to={`/About-movie/${info.id}`}><CarouselInfo key={info.id} {...info} index={index}  current={current}/></Link>
            )}
            <div className='arrow-left' onClick={slideLeft}>&lsaquo;</div>
            <div className='arrow-right' onClick={slideRight}>&rsaquo;</div>
        </div>
    </div>
  )
}

export default Carousel

