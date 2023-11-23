import React, { useState } from 'react';
import options from '../api/api';
import SearchBarCard from '../searchbarcard/searchbarcard';

const APIKEY = '0e878adce585c9f967e29b947b785ab9';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&page=1&query=${search}`,
      options
    );

    const data = await res.json();
    setSearchData(data.results);
  };

  // const nextButton = () => {
  //   setPageNumber(() => pageNumber + 1);
  // };

  // const prevButton = () => {
  //   if (pageNumber > 1) {
  //     setPageNumber(() => pageNumber - 1);
  //   } else {
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   handleSearch();
  // }, [pageNumber, search]);

  return (
    <>
      <div className='flex flex-col min-h'>
        <div className='flex items-center justify-end space-x-2 search-bar px-10 py-4'>
          <input
            type='text'
            placeholder='Enter Movie...'
            onChange={(e) => setSearch(e.target.value)}
            className='bg-black text-white border border-white rounded-md'
          />

          <button
            className='bg-white  text-black ml-2 px-3 py-2 rounded-md hover:bg-gray-200 font-medium	'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className='text-white px-10 flex flex-wrap gap-10 mt-6'>
          {searchData?.map((movie) => {
            return <SearchBarCard key={movie.id} data={movie} />;
          })}
        </div>
        {/* <div className="text-white  gap-20 items-center flex justify-center -mb-6">
          <button
            onClick={() => prevButton()}
            className="prevButton bg-gray-100  hover:bg-gray-400"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <span className="pageNumber">{pageNumber}</span>
          <button
            onClick={() => nextButton()}
            className="nextButton  bg-gray-100 hover:bg-gray-400"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Search;
