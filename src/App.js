import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/navbar/navbar';
import Header from './Components/header/header';

import Movies from './Pages/movies/movies';
import MyList from './Pages/mylist/mylist';
import About from './Pages/about/about';
import Footer from './Components/footer/footer';
import Search from './Components/search/search';
import MovieDetails from './Components/moviedetails/moviedetails';

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
