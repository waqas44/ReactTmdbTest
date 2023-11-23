import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import options from './Api';

import { useDispatch } from 'react-redux';
import { addList } from './Listslice';

const MovieDetails = ({ moviesDetails }) => {
  const [youtubeVideo, setYoutubeVideo] = useState([]);
  const [movieCast, setMovieCast] = useState([]);

  // const [myList, setMyList] = useState([]);

  const dispatch = useDispatch();

  const baseurl_backdrop =
    'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const imdb_url = `https://www.imdb.com/title/${moviesDetails.imdb_id}/`;

  // console.log("movie Details", moviesDetails);

  useEffect(() => {
    const youtubeVideo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesDetails.id}/videos?language=en-US`,
        options
      );

      const data = await res.json();
      setYoutubeVideo(data);
    };

    const cast = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesDetails.id}/credits?language=en-US`,
        options
      );

      const data = await res.json();
      setMovieCast(data);
    };

    youtubeVideo();
    cast();
  }, [moviesDetails.id]);

  // console.log(youtubeVideo);
  // const castList = movieCast?.cast.slice(0, 12);

  // console.log(castList);

  console.log(movieCast);
  console.log(youtubeVideo);

  const handleAddToFav = () => {
    dispatch(addList(moviesDetails));
    // setMyList([...myList, moviesDetails]);
  };

  // console.log(myList);

  return (
    <>
      <div className='text-white min-h-screen '>
        {/* Background Pic */}
        <div className='flex h-[640px] overflow-hidden'>
          <div className='absolute'>
            {moviesDetails.backdrop_path ? (
              <img
                src={`${baseurl_backdrop}${moviesDetails.backdrop_path}`}
                alt='backdrop'
                className='h-auto w-full object-cover filter brightness-50 blur-sm	'
              />
            ) : (
              <div className='h-auto w-full object-cover aspect-[2/3] transition-all hover:scale-110 bg-gradient-to-r from-violet-500 to-fuchsia-500 filter brightness-50' />
            )}
          </div>

          <div className=' flex z-[999] px-28 py-16'>
            <div className='mr-10'>
              {moviesDetails.poster_path && (
                <img
                  src={`${baseURL}${moviesDetails.poster_path}`}
                  alt=''
                  className='w-[340px] h-[500px] rounded-xl object-cover aspect-[2/3] transition-all hover:scale-90'
                />
              )}
            </div>
            <div className='mt-6'>
              <h2 className='text-5xl font-semibold mb-4'>
                {moviesDetails.title}
              </h2>
              <p className='text-base w-[555px] text-gray-200 leading-6 mb-6'>
                {moviesDetails.overview}
              </p>
              <p className='text-gray-200 mb-4'>
                <span className='text-white font-semibold	'>Release Date: </span>
                {moviesDetails.release_date}
              </p>

              <p className='text-gray-200 mb-4'>
                <span className='text-white font-semibold	'>Status: </span>
                {moviesDetails.status}
              </p>

              {/* <div className="text-gray-200 mb-8 flex">
                <span className="text-white font-semibold	">Genres: </span>
                {Object.values(moviesDetails.genres).map((genre, index) => (
                  <p key={index}>{genre.name}</p>
                ))}
              </div> */}
              <div style={{ width: 70, height: 30 }} className='mb-16'>
                <CircularProgressbar
                  value={moviesDetails.vote_average}
                  text={`${Math.floor(moviesDetails.vote_average)} / 10`}
                />
              </div>
              <div className='flex gap-6 mb-5 mt-6'>
                <Link
                  to={`${moviesDetails.homepage}`}
                  target='_blank'
                  rel='noreferrer'
                  className='text-white text-base font-normal  px-8 py-2 hover:bg-gray-900 rounded-lg transition-all'
                >
                  Website
                </Link>
                <Link
                  to={imdb_url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-white text-base font-normal  px-8 py-2 hover:bg-gray-900 rounded-lg transition-all'
                >
                  IMDB
                </Link>
              </div>
              <button
                className='text-gray-900 font-normal text-base px-8 py-2 bg-white hover:bg-gray-300 rounded-lg'
                onClick={handleAddToFav}
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
        {/* Youtube Trailer */}
        <div className='p-10'>
          <div>
            <h1 className=' border-gray-700 border-b py-2 text-3xl font-semibold text-gray-200'>
              Trailer
            </h1>
          </div>

          <div className='aspect-video rounded-xl mt-3'>
            <iframe
              className='w-full h-full border-none rounded-xl'
              src={`https://www.youtube.com/embed/`}
              allow='autoplay; encrypted-media; fullscreen;'
              title='Embedded YouTube video'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
