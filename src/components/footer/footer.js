import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className='flex items-center justify-center h-32 mt-16 flex-col  text-gray-400 footer-border gap-5	'>
        <h3 className='font-medium text-base'>Made with ❤️</h3>
        <div>
          <h2>
            Powered by{' '}
            <Link to='https://www.themoviedb.org/'>
              <span className='font-medium underline underline-offset-2'>
                TMDB
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
