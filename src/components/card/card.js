import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ data }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <Link>
        <div className='mt-8 text-white gap-8 '>
          <div>
            <div className='w-60 h-96 rounded-xl '>
              <img
                src={`${baseURL}${data.poster_path}`}
                alt='poster'
                className='w-60 h-96 rounded-xl object-cover aspect-[2/3] transition-all hover:scale-90'
              />
            </div>
            <h1 className='text-sm w-52 font-normal py-2'>{data.title}</h1>
            <p className='text-sm	text-gray-400 font-semibold'>
              {data.release_date}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
