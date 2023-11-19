import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';

import Movies from './pages/movies/movies';
import MyList from './pages/mylist/mylist';
import About from './pages/about/about';
import Footer from './components/footer/footer';
import Search from './components/search/search';
import MovieDetails from './components/moviedetails/moviedetails';

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
          <Route path='/movie' element={<Movies />} />
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
