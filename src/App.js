import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';

import Movies from './components/movies/movies';
import MyList from './components/mylist/mylist';
import About from './components/about/about';
// import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/movie' element={<Movies />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
