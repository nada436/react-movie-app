import React from "react";
import { FilterContext, useFilterContext } from "../context/FilterContext.jsx";

const Filter = () => {
  const genres = [
  "All",
  "Drama",
  "Crime",
  "Action",
  "History",
  "Adventure",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Animation",
  "Family",
  "Mystery",
  "Comedy",
  
]
const {filterBygenres}=useFilterContext()

  return (
    <div className="px-6 pt-32 text-white bg-black w-[400px] lg:w-[800px] ">
      
      {/* Title */}
      <h1 className="text-4xl font-bold ">
        Discover great films
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mb-6">
        Curated picks across every genre & era
      </p>

      {/* Genres */}
      <div className="flex flex-wrap gap-3">
        {genres.map((g, index) => (
          <button
            key={index}
            value={g}
            className="px-4 py-2 border border-gray-500 rounded-xl text-sm hover:bg-white hover:text-black transition duration-300 active:bg-white"
            onClick={()=>{filterBygenres(g)}}
          >
            {g}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Filter;