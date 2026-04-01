import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Movies from './components/movies_slider';
import Movies_list from './components/movies_list';
import Filter from './components/filter';
import  MoviesProvider from './MoviesProvider'

function App() {
   const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
const filterBysearch = (value) => {
  setSearch(value);
}
const filterBygenres = (genre) => {
  const finalGenre = genre === "All" ? "" : genre;
  console.log(finalGenre);
  setGenre(finalGenre);
}

  return (
   <>
    <Header filterBysearch={filterBysearch}></Header>
    <MoviesProvider>
    <Movies></Movies>
    <Filter filterBygenres={filterBygenres}></Filter>
    <Movies_list search={search} genre={genre}></Movies_list>
    </MoviesProvider>
    <Footer></Footer>
    </>
  )
}

export default App
