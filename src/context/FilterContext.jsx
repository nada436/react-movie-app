import { createContext, useContext, useState } from 'react';

export const FilterContext = createContext(null);
export const useFilterContext = () => useContext(FilterContext);


const FilterContextprovider = ( {children}) => {
 const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filterBysearch = (value) => {
    setSearch(value);
  };

  const filterBygenres = (value) => {
    const finalGenre = value === "All" ? "" : value;
    setGenre(finalGenre);
  };
    return (
         <FilterContext.Provider value={{ search ,genre,filterBygenres,filterBysearch}}>
              {children}
            </FilterContext.Provider>
    );
}

export default FilterContextprovider;
