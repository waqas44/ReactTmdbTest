import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';

import Movies from './components/movies/movies';
import MyList from './components/mylist/mylist';
import About from './components/about/about';

const App = () => {
  return (
    <div>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/movie' element={<Movies />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      ;
    </div>
  );
};

export default App;
