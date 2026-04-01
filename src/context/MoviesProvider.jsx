import { createContext, useEffect, useState } from 'react';

export const MoviesContext = createContext();  

const MoviesProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fooapi.com/api/movies')
      .then(res => res.json())
      .then(data => {
        setMoviesList(data?.data || []);
        console.log(data?.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MoviesContext.Provider value={{ moviesList, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;