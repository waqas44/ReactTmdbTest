import React from 'react';

import CardContainer from './Cardcontainer';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='bg-gradient-to-r  from-sky-900  to-blue-950  h-2/5 flex items-center justify-center flex-col'>
        <div>
          <h1 className='text-6xl text-white font-medium mb-7 '>
            Welcome to{' '}
            <span className='animate-bounce inline-block transition-all'>
              🎬
            </span>{' '}
            Tmdb Movie
          </h1>
          <h4 className='text-2xl font-normal text-white'>
            Discover and explore a vast collection of movies.
          </h4>
          <Link to='/movie'>
            <button className='text-black mt-10 bg-white rounded-md w-32 py-2 hover:bg-gray-200'>
              Browse Movies
            </button>
          </Link>
        </div>
      </div>
      <CardContainer />
    </>
  );
};

export default Header;
