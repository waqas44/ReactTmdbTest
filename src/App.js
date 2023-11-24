import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';

import Header from './Components/Header';

import Movies from './Pages/Movies';
import MyList from './Pages/Mylist';
import About from './Pages/About';
import Footer from './Components/Footer';
import Search from './Components/Search';

import MovieDetails from './Components/Moviedetails';

const App = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);

  const liftMoviesDetails = (data) => {
    setMoviesDetails(data);
  };
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route
            path='/movie'
            element={<Movies liftMoviesDetails={liftMoviesDetails} />}
          />
          <Route path='/movies' element={<Movies />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route
            path='/movie-detail'
            element={<MovieDetails moviesDetails={moviesDetails} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
