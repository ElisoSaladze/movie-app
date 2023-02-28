import React from 'react'
import '../styles/Home.css'
import Carousel from './Carousel'
import HomeTrending from './HomeTrending'
import HomeUpcoming from './HomeUpcoming'
import HomeTop from './HomeTop'

const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <HomeTrending />
      <HomeUpcoming />
      <HomeTop />
    </div>
  )
}

export default Home
