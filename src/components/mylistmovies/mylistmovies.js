import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveList } from '../reduxtoolkit/listslice';

const MyListMovies = ({ data }) => {
  const dispatch = useDispatch();
  const baseurl = 'https://image.tmdb.org/t/p/w500/';

  const handleRemove = (id) => {
    dispatch(RemoveList(id));
  };

  return (
    <>
      <div className='text-white'>
        <div>
          <button
            className='text-white text-base border-2 border-gray-900 px-14 py-2 hover:bg-gray-900 rounded-lg transition-all'
            onClick={() => handleRemove(data.id)}
          >
            Remove From List
          </button>

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
export default MyListMovies;
