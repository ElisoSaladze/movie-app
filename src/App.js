import React from 'react'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Trending from './components/Trending'
import Upcoming from './components/Upcoming'
import AboutMovie from './components/AboutMovie'
import Top from './components/Top'
import ".//App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {                                             
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/movie-app/" element={<Home />} />
          <Route path="/Movies/" element={<Movies />} />
          <Route path="/Trending/" element={<Trending />} />
          <Route path="/Upcoming/" element={<Upcoming />} />
          <Route path="/Top/" element={<Top />} />
          <Route path='/About-movie/:id' element={<AboutMovie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App



