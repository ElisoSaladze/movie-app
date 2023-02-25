import React from 'react'

const IMG_PATH = "https://image.tmdb.org/t/p/original";
const CarouselInfo = ({backdrop_path, title, index, current}) => {
  return (
    <div className={index === current ? "inside-carousel inside-carousel-active" : "inside-carousel"}>
      <img src={IMG_PATH + backdrop_path} alt="whatever" />
    </div>
  )
}                                    

export default CarouselInfo
