import React, { useState } from "react";
import default_poster from'../assets/default_poster.jpg'
const rotations  = [-22, -12, -4,  4,  12,  22];
const translateX = [-260, -156, -52, 52, 156, 260];
const scales     = [0.82, 0.88, 0.94, 0.94, 0.88, 0.82];
const zIndexes   = [1,    2,    4,    4,    2,    1];






const getRatingColor = (rated) => {
  //for rating background
  const map = {
    Approved: "bg-green-600",
    PG: "bg-blue-600",
    "PG-13": "bg-orange-500",
    R: "bg-red-600",
    "NC-17": "bg-zinc-900 border border-zinc-700",
  };
  return map[rated] || "bg-zinc-600";
};
//handel if img not exist
const handelerror=(e)=>{
e.target.src=default_poster
}

const MovieCard = ({ movie, index, hovered ,no_rotate}) => {
  //check this move from wishlist or not
  const [wished, setWished] = useState(() => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  return wishlist.includes(movie.id);
});
const toggleWish = (e) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  let updated;
  if (wished) {
    updated = wishlist.filter(id => id !== movie.id);
  } else {
    updated = [...wishlist, movie.id];
  }
  localStorage.setItem('wishlist', JSON.stringify(updated));
  setWished(!wished);
};

  const isHovered = hovered === index;
  const card_no = index % 6 ||0;

  const baseTransform = no_rotate?``:
  `
    rotate(${rotations[card_no]}deg)
    translateX(${translateX[card_no]}px)
    scale(${scales[card_no]})
  `;

  const hoveredTransform =no_rotate?`scale(1.08)`: `
    rotate(0deg)
    translateX(${translateX[card_no]}px)
    scale(1.08)
    translateY(-20px)
  `;

  return (
    <div
      className={`
        relative w-[220px] h-[380px] rounded-2xl overflow-hidden
        bg-[#111111] border
        flex flex-col
        transition-all duration-300 ease-out cursor-pointer
        ${isHovered
          ? "border-yellow-400 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          : "border-[#1f1f1f] hover:border-yellow-400/50"
        }
      `}
      style={{
        zIndex: isHovered ? 10 : zIndexes[card_no],
        transform: isHovered ? hoveredTransform : baseTransform,
      }}
    >
      {/* Poster */}
      <div className="relative h-[155px] flex-shrink-0 overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" onError={handelerror}/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
        <span className={`absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded text-white ${getRatingColor(movie.rated)}`}>
          {movie.rated}
        </span>
        <span
       onClick={toggleWish}
        className="absolute top-2 left-48 cursor-pointer transition-all duration-200"
         >
        <i
       className="fa-solid fa-star text-[14px]"
       style={{ color: wished ? '#FFD700' : 'rgba(255,255,255,0.3)' }}
        />
         </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 overflow-hidden px-3.5 pt-3 pb-3.5">
        <h2 className="font-black uppercase tracking-wide text-white text-[17px] leading-tight mb-2 line-clamp-2 h-[42px] flex-shrink-0">
          {movie.title}
        </h2>

        <div className="flex items-center gap-2 mb-2 flex-shrink-0">
          <span className="flex items-center gap-1.5 text-[11px] text-zinc-500 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2.5 py-0.5 whitespace-nowrap">
            📅 {movie.year}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-zinc-500 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2.5 py-0.5 whitespace-nowrap">
            ⏱ {movie.runtime}
          </span>
        </div>

        <span className="inline-block text-[11px] text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded px-2 py-0.5 mb-2 flex-shrink-0 truncate max-w-fit">
          {movie.genre}
        </span>

        <p className="text-[11px] text-zinc-600 flex-shrink-0 truncate">{movie.language}</p>

        <div className="flex-1" />
        <hr className="border-[#1e1e1e] mb-2" />

        <div className="flex items-center justify-between flex-shrink-0">
          <span className="text-[10px] tracking-widest text-zinc-600 uppercase">IMDb</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-black text-yellow-400 leading-none">{movie.imdbRating}</span>
            <span className="text-[11px] text-zinc-600">/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;