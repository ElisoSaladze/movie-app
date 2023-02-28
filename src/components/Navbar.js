import React from 'react'
import home from '../assets/Home.svg';
import calendar from '../assets/Calendar.svg';
import show from '../assets/TV Show.svg';
import projector from '../assets/Movie Projector.svg';
import logo from '../assets/Vector (4).svg'
import '../styles/Navbar.css'
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import list from '../assets/List.svg'
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const navigate = useNavigate();
  return (
    <div className='navbar'>
      <header>
        <div onClick={() => setClick(!click)} className='nav-icon'>
          <img src={list} alt="nav-icon" />
        </div>
        <div className='logo-div'>
          <img onClick={() => window.location.reload(false)} className="logo" src={logo} alt="movies" />
        </div>
        <nav className={click ? "nav-el show" : "nav-el"}>
          <ul className='nav-ul'>
            <li><Link to={"/movie-app/"}><img src={home} alt="home"/>Home</Link></li>
            <li><Link to={"/Movies/"}><img src={projector} alt="projector"/>Movies</Link></li>
            <li><Link to={"/Trending/"}><img src={show} alt="tv-show"/>Trending</Link></li>
            <li><Link to={"/Upcoming/"}><img src={calendar} alt="calendar"/>Upcoming</Link></li>
          </ul>
        </nav>
        <Searchbar />
      </header>
    </div>
  )
}

export default Navbar
