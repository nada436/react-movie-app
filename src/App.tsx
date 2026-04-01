import { useState } from 'react'
import './App.css'
import Footer from './components/footer';
import MoviesProvider from './context/MoviesProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Wishlist from './pages/WishList';
import Toprated from './pages/TopRated';
import MovieDetails from './pages/MovieDetails';
import MovieTrailer from './pages/MovieTrailer';
import Error from './pages/Error';
import Layout from './Layout';
import FilterContextprovider from './context/FilterContext';

function App() {
  return (
    <>
    
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            {/* Routes WITH Header + Filter */}
            <Route element={<Layout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/top_rated' element={<Toprated />} />
            </Route>

            {/* Routes WITHOUT Header + Filter */}
            <Route path='/MovieDetails/:id' element={<MovieDetails />} />
            <Route path='/MovieTrailer' element={<MovieTrailer />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
     
      <Footer></Footer>
    </>
  )
}

export default App