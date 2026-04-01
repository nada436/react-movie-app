import React from 'react';
import logo from '../assets/logo.png'
import loupe from '../assets/loupe.png'

const Header = ({filterBysearch}) => {
    return (
       <div className='fixed top-0 left-0 w-full z-100 bg-black text-white'>

  <div className='flex flex-wrap items-center justify-between px-4 py-2 gap-4'>

    <img src={logo} className='w-36 sm:w-48' alt="logo" />

    <div className='flex gap-4 text-sm sm:text-lg'>
      <a href="#" className='hover:text-yellow-400'>home</a>
      <a href="#" className='hover:text-yellow-400'>wishlist</a>
      <a href="#" className='hover:text-yellow-400'>top rated</a>
    </div>

    <div className='relative'>
      <img src={loupe} className="w-4 absolute top-2 left-2" />
      <input
        type="text"
        className='rounded-xl bg-white outline-none pl-8 pr-3 py-1 w-40 sm:w-56 text-black' onChange={(e)=>{filterBysearch(e.target.value)}}
        placeholder='Search...'
      />
    </div>

  </div>
  <hr className='border-white/20'/>

</div>
    );
}

export default Header;
