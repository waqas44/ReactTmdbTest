import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesCard from './Moviescard';
import { options } from './Components/Api';

const Movies = ({ liftMoviesDetails }) => {
  const [allMovies, setAllMovies] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  const [genraId, setGenreId] = useState('all');

  const genres = [
    {
      id: 'all',
      name: 'All',
    },
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  useEffect(() => {
    const getAllMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=0e878adce585c9f967e29b947b785ab9&page=${pageNumber}&with_genres=${genraId}`,
        options
      );
      const data = await res.json();

      setAllMovies(data.results);
    };

    getAllMovies();
  }, [pageNumber, genraId]);

  const nextButton = () => {
    setPageNumber(() => pageNumber + 1);
  };

  const prevButton = () => {
    if (pageNumber > 1) {
      setPageNumber(() => pageNumber - 1);
    } else {
      return;
    }
  };

  const handleGenre = (genreID) => {
    setGenreId(genreID);
  };

  return (
    <>
      <div className='min-h-screen flex  mb-10'>
        <aside className='space-y-4 py-4 top-16 border-r border-gray-700 '>
          <div className='px-4 py-2  sticky top-16'>
            <h2 className='mb-2 px-2 text-xl font-semibold tracking-tight text-white'>
              Genres
            </h2>
            <div className=' w-72 px-5 '>
              <div className='space-y-1  overflow-y-auto h-80 '>
                {genres.map((genre, index) => (
                  <Link key={index} to={`/movie?genre=${genre.id}`}>
                    <div
                      className='flex text-gray-200 mb-3 hover:text-white rounded-lg hover:bg-gray-900 transition-all py-1 '
                      onClick={() => handleGenre(genre.id)}
                    >
                      <button className='px-3 py-1'>{genre.name}</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className='text-white px-10 flex flex-wrap gap-10'>
          {allMovies?.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                data={movie}
                liftMoviesDetails={liftMoviesDetails}
              />
            );
          })}
        </div>
      </div>
      <div className='text-white  gap-20 items-center flex justify-center -mb-6'>
        <button
          onClick={() => prevButton()}
          className='prevButton bg-gray-100  hover:bg-gray-400'
        >
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <span className='pageNumber'>{pageNumber}</span>
        <button
          onClick={() => nextButton()}
          className='nextButton  bg-gray-100 hover:bg-gray-400'
        >
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </>
  );
};

export default Movies;
