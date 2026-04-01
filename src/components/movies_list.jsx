import React, { memo, useContext, useEffect, useState } from 'react';
import MovieCard from './movie.jsx';
import { MoviesContext } from '../MoviesProvider.jsx';

const MoviesList = ({ genre, search }) => {
  const { moviesList } = useContext(MoviesContext);
  const [hovered, setHovered] = useState(null);

  const filteredMovies = moviesList.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre = genre? movie.genre.includes(genre) : true;

    return matchSearch && matchGenre;
  });

  return (
    <div className='p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap justify-between'>
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
  );
};

export default  memo(MoviesList) ;
