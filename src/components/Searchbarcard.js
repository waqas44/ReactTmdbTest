import React from 'react';

const SearchBarCard = ({ data }) => {
  const baseurl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
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
    </>
  );
};

export default SearchBarCard;
