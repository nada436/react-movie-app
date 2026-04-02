import { useState } from 'react'
import './App.css'
import Footer from './components/footer';
import MoviesProvider from './context/MoviesProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Wishlist from './pages/WishList';
import Toprated from './pages/TopRated';
import MovieDetails_page from './pages/MovieDetails';
import Error from './pages/Error';
import Layout from './Layout';
import FilterContextprovider from './context/FilterContext';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MoviesProvider>
        <BrowserRouter>
          <div className="flex-1">
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/top_rated' element={<Toprated />} />
              </Route>
              <Route path='/MovieDetails/:id' element={<MovieDetails_page />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MoviesProvider>
      <Footer />
    </div>
  )
}

export default App