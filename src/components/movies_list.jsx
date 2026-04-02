import React, { memo, useContext, useEffect, useState } from 'react';
import MovieCard from './movie.jsx';
import { MoviesContext } from '../context/MoviesProvider.jsx';
import { useFilterContext } from '../context/FilterContext.jsx';
import CircularIndeterminate from './spinner.jsx';

const MoviesList = ({ page }) => {
  const { search, genre, filterBygenres } = useFilterContext();
  const { moviesList } = useContext(MoviesContext);
  const [hovered, setHovered] = useState(null);

  useEffect(() => { filterBygenres('All'); }, [page]);

  const filteredMovies = moviesList.filter((movie) => {
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre ? movie.genre.includes(genre) : true;
    const matchWishlist = page === "wishlist"
      ? JSON.parse(localStorage.getItem('wishlist') || '[]').includes(movie.id)
      : true;
    const matchtoprated = page === "top_rated" ? +(movie.imdbRating) >= 8.9 : true;
    return matchSearch && matchGenre && matchWishlist && matchtoprated;
  });
  if(moviesList.length==0)return(<CircularIndeterminate></CircularIndeterminate>)

  return (
    <div className='px-4 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center min-h-[450px]'>
      {filteredMovies.map((movie, index) => (
        <div className='mt-4' key={movie.id}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}>
          <MovieCard movie={movie} index={index} hovered={hovered} no_rotate={true} />
        </div>
      ))}
    </div>
  );
};

export default memo(MoviesList);