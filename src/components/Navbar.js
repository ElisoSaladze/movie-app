import React from 'react'
import home from '../assets/Home.svg';
import calendar from '../assets/Calendar.svg';
import show from '../assets/TV Show.svg';
import projector from '../assets/Movie Projector.svg';
import logo from '../assets/Vector (4).svg'
import '../styles/Navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <header>
        <div className='logo-div'>
          <img onClick={() => navigate("/")} className="logo" src={logo} alt="movies" />
        </div>
        <nav className='nav-el'>
          <ul className='nav-ul'>
            <li><a onClick={() => navigate("/movie-app/")} href="#home"><img src={home} alt="home"/>Home</a></li>
            <li><a onClick={() => navigate("/Movies/")} href="#movies"><img src={projector} alt="projector"/>Movies</a></li>
            <li><a onClick={() => navigate("/Trending/")} href="#trending"><img src={show} alt="tv-show"/>Trending</a></li>
            <li><a onClick={() => navigate("/Upcoming/")} href="#upcoming"><img src={calendar} alt="calendar"/>Upcoming</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
