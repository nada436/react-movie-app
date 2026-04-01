import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './movie.jsx';
import { MoviesContext } from '../MoviesProvider.jsx';

const Movies_slider = () => {
  const { moviesList } = useContext(MoviesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const visibleMovies = moviesList.slice(currentIndex, currentIndex + 6);

  const handlePrev = () => {
    setHovered(null);
    setCurrentIndex(prev =>  prev - 1);
  };

  const handleNext = () => {
    setHovered(null);
    setCurrentIndex(prev =>  prev + 1);
  };

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < moviesList.length - 6;

  return (
    <div className="relative w-full h-fit flex justify-center items-center pt-30 pb-10">
      {/* Left Arrow — absolute on the left edge */}
      <button
        onClick={handlePrev}
        disabled={!canPrev}
        className={`
          absolute left-4 z-50
          w-10 h-10 rounded-full flex items-center justify-center
          border transition-all duration-200
          ${canPrev
            ? 'border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400'
            : 'border-zinc-800 text-zinc-700 cursor-not-allowed opacity-40'
          }
        `}
      >
        <i className="fa-solid fa-angle-left" />
      </button>

      {/* Cards Fan */}
      <div className="flex justify-center items-end h-[450px] relative w-full">
        {visibleMovies.map((movie, index) => (
          <div
            key={movie.id}
            className="absolute"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <MovieCard
              movie={movie}
              index={index}
              hovered={hovered}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow — absolute on the right edge */}
      <button
        onClick={handleNext}
        disabled={!canNext}
        className={`
          absolute right-4 z-50
          w-10 h-10 rounded-full flex items-center justify-center
          border transition-all duration-200
          ${canNext
            ? 'border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400'
            : 'border-zinc-800 text-zinc-700 cursor-not-allowed opacity-40'
          }
        `}
      >
        <i className="fa-solid fa-angle-right" />
      </button>

    </div>
  );
};

export default Movies_slider;