import React from 'react';
import logo from '../assets/logo.png'
import loupe from '../assets/loupe.png'
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/FilterContext.jsx';

const Header = () => {
  const {filterBysearch}=useFilterContext()
    return (
       <div className='fixed top-0 left-0 w-full z-100 bg-black text-white  '>

  <div className='flex flex-wrap items-center justify-between px-4 py-2 gap-4'>

    <img src={logo} className='w-36 lg:w-48' alt="logo" />

    <div className='flex gap-4 text-sm sm:text-lg'>
      <Link to="/" className='hover:text-yellow-400'>home</Link>
      <Link to="/wishlist" className='hover:text-yellow-400'>wishlist</Link>
      <Link to="/top_rated" className='hover:text-yellow-400'>top rated</Link>
    </div>

    <div className='relative '>
      <img src={loupe} className="w-4 absolute top-2 left-2" />
      <input
        type="text"
        className='rounded-xl bg-white outline-none pl-8 pr-3 py-1 w-40 sm:w-56 text-black' onChange={(e)=>{filterBysearch(e.target.value)}}
        placeholder='Search...'
      />
    </div>

  </div>
 

</div>
    );
}

export default Header;
