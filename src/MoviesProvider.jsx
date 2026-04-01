import { createContext } from 'react';
export const MoviesContext = createContext();

import React, { useEffect, useState } from 'react';
const MoviesProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch('https://fooapi.com/api/movies')
      .then(res => res.json())
      .then(data => {
        setMoviesList(data?.data || []);
        console.log(data?.data )
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MoviesContext.Provider value={{ moviesList }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;