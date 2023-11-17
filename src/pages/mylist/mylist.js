import React from 'react';
import MyListMovies from '../../components/MyListMovies/MyListMovies';

const MyList = () => {
  return (
    <>
      <div className='text-white h-fit		'>
        <div className='flex justify-center  mt-6 '>
          <h1 className='border-b border-gray-700 text-4xl font-semibold py-1'>
            My List
          </h1>
        </div>
        <div className='flex justify-evenly gap-28 flex-wrap mt-20'>
          <MyListMovies />
        </div>
      </div>
      <div className='text-center mt-10 '>
        <button className='text-white text-base border-2 border-gray-900 px-8 py-2 hover:bg-gray-900 rounded-lg transition-all'>
          Clear My List
        </button>
      </div>
    </>
  );
};

export default MyList;
