import React, { memo, useContext, useEffect, useState } from 'react';
import MovieCard from './movie.jsx';
import { MoviesContext } from '../context/MoviesProvider.jsx';
import { useFilterContext } from '../context/FilterContext.jsx';

const MoviesList = ({page}) => {    //home,wishlist,top_rated
  const { search, genre ,filterBysearch,filterBygenres} = useFilterContext();
  const { moviesList } = useContext(MoviesContext);
  const [hovered, setHovered] = useState(null);

//clear search
  useEffect(() => {
    filterBygenres('All'); 
  }, [page]);

  const filteredMovies = moviesList.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchGenre = genre? movie.genre.includes(genre) : true;
const matchWishlist = page === "wishlist" 
  ? JSON.parse(localStorage.getItem('wishlist') || '[]').includes(movie.id) 
  : true;

 const matchtoprated = page === "top_rated" ? +(movie.imdbRating) >= 8.9 : true;
    return matchSearch && matchGenre && matchWishlist &&  matchtoprated;
  });
  


    return (
     
      <div className='p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap justify-between min-h-[450px]'>
        {filteredMovies.map((movie, index) => (
          <div
            className='mt-7'
            key={movie.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <MovieCard
              movie={movie}
              index={index}
              hovered={hovered}
              no_rotate={true}
            />
          </div>
        ))}
      </div>
    )
};

export default  memo(MoviesList) ;
