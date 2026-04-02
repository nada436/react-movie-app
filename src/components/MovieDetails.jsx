import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { MoviesContext } from '../context/MoviesProvider';
import default_poster from '../assets/default_poster.jpg';
import CircularIndeterminate from './spinner.jsx';
import ModalUnstyled from './movie_trailer.jsx';




const MovieDetails = () => {
    const [trailerId, setTrailerId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { moviesList } = useContext(MoviesContext);
  const movie = moviesList.find(m => m.id === id);
const [trailerOpen, setTrailerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleError = (e) => { e.target.src = default_poster; };

  if (!movie) return (
    <CircularIndeterminate></CircularIndeterminate>
  );
//fetch vedio trailer from youtube
  useEffect(() => {
  if (!movie) return;
  const API_KEY = 'AIzaSyCNg8018bzsV4Mzs6Pax2_s5ynto1Yya0w';
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movie.title + ' official trailer')}&type=video&key=${API_KEY}`
  )
    .then(r => r.json())
    .then(data => {
      const videoId = data.items?.[0]?.id?.videoId;
      if (videoId) setTrailerId(videoId);
    });
}, [movie]);

  return (
    <div
      className="min-h-screen bg-black text-white "
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 400ms ease, transform 400ms ease',
      }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-white hover:border-yellow-400 transition-all duration-200 p-7"
      >
        ← Back
      </button>

      {/* Layout: column on mobile → row on lg */}
      <div className="flex flex-col lg:flex-row min-h-screen gap-32 justify-center ">

        {/* ── Left panel ── */}
        <div className="w-full lg:w-[500px] lg:flex-shrink-0 flex justify-center items-start pt-20 lg:pt-10 pb-6 lg:pb-0 px-6 lg:pl-20 lg:pr-0">
          <div
            className="w-full max-w-[700px] lg:w-[700px] rounded-2xl bg-[#111111] border border-yellow-400 overflow-hidden"
            style={{ boxShadow: '0 0 60px rgba(234,179,8,0.12)' }}
          >
            <div className="relative h-[340px] sm:h-[280px] lg:h-[340px] flex-shrink-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                onError={handleError}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
              <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded text-white bg-red-600">
                {movie.rated}
              </span>
            </div>

            <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
              <h2 className="font-black uppercase tracking-wide text-white text-[16px] leading-tight">
                {movie.title}
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] text-zinc-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2 py-0.5">📅 {movie.year}</span>
                <span className="text-[10px] text-zinc-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2 py-0.5">⏱ {movie.runtime}</span>
              </div>
              <span className="text-[10px] text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded px-2 py-0.5 w-fit">
                {movie.genre}
              </span>
              <p className="text-[10px] text-zinc-500">{movie.language}</p>
              <hr className="border-[#1e1e1e]" />
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-widest text-zinc-600 uppercase">IMDb</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-black text-yellow-400">{movie.imdbRating}</span>
                  <span className="text-[10px] text-zinc-600">/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 px-6 lg:pl-8 lg:pr-12 pt-4 lg:pt-24 pb-16 flex flex-col gap-8">

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
              {movie.title}
            </h1>
            <p className="text-zinc-500 mt-2 text-sm">{movie.released}</p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-yellow-400 mb-2">Plot</h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">{movie.plot}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              { label: "Director", value: movie.director },
              { label: "Writer",   value: movie.writer },
              { label: "Actors",   value: movie.actors },
              { label: "Country",  value: movie.country },
              { label: "Box Office", value: movie.boxOffice },
              { label: "Awards",   value: movie.awards },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-2 border-yellow-400/30 pl-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-1">{label}</p>
                <p className="text-sm text-zinc-300 leading-snug">{value || '—'}</p>
              </div>
            ))}
          </div>

          <div>
  <button
    className="px-6 py-3 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest rounded-xl hover:bg-yellow-300 active:scale-95 transition-all duration-200 hover:scale-105"
    onClick={() => setTrailerOpen(true)}   
  >
    ▶ Watch Trailer
  </button>

  
  <ModalUnstyled
    open={trailerOpen}
    onClose={() => setTrailerOpen(false)}
   url={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetails;