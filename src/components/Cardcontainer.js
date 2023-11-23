import React, { useEffect, useState } from 'react';
import Card from './Card';
import { options } from './Api';

const CardContainer = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);

  useEffect(() => {
    const getNowPlaying = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      );
      const data = await res.json();

      setNowPlaying(data.results);
    };

    const getPopular = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        options
      );
      const data = await res.json();
      setPopularMovies(data.results);
    };

    const getTopRated = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        options
      );
      const data = await res.json();
      setTopRated(data.results);
    };

    const getUpComing = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        options
      );
      const data = await res.json();
      setUpComing(data.results);
    };

    getNowPlaying();
    getPopular();
    getTopRated();
    getUpComing();
  }, []);

  return (
    <>
      <div className=' px-4 py-6'>
        <div className='mb-10'>
          <h1 className='text-white  border-gray-600 border-b my-4 py-2 text-3xl font-semibold'>
            Now Playing
          </h1>
          <div>
            <div className='flex space-x-4 pb-4 overflow-x-auto'>
              {nowPlaying?.map((movie, index) => {
                return <Card key={index} data={movie} />;
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-white  border-gray-600 border-b my-4 py-2 text-3xl font-semibold'>
            Popular
          </h1>
          <div>
            <div className='flex space-x-4 pb-4 overflow-x-auto'>
              {popularMovies?.map((movie, index) => {
                return <Card key={index} data={movie} />;
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-white  border-gray-600 border-b my-4 py-2 text-3xl font-semibold'>
            Top Rated
          </h1>
          <div>
            <div className='flex space-x-4 pb-4 overflow-x-auto'>
              {topRated?.map((movie, index) => {
                return <Card key={index} data={movie} />;
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-white  border-gray-600 border-b my-4 py-2 text-3xl font-semibold'>
            Upcoming
          </h1>
          <div>
            <div className='flex space-x-4 pb-4 overflow-x-auto'>
              {upComing?.map((movie, index) => {
                return <Card key={index} data={movie} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
