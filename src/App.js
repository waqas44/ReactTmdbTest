import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';

const App = () => {
  return (
    <div>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </div>
      ;
    </div>
  );
};

export default App;
