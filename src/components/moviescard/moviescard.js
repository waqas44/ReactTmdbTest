import React from 'react';
import { Link } from 'react-router-dom';
const MoviesCard = ({ data }) => {
  const baseurl = 'https://image.tmdb.org/t/p/w500/';
  const handleMoviesDetails = (id) => {
    console.log(id);
  };

  return (
    <>
      <Link onClick={() => handleMoviesDetails(data.id)}>
        <div className='text-white gap-8'>
          <div>
            <div className='w-60 h-96 rounded-xl '>
              <img
                src={`${baseurl}${data.poster_path}`}
                alt=''
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

export default MoviesCard;
