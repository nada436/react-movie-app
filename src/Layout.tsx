import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Filter from './components/filter';
import FilterContextprovider  from './context/FilterContext';

const Layout = () => {
 

  return (
    <FilterContextprovider>
      <Header />
      <Filter />
      <Outlet />
    </FilterContextprovider>
  );
};

export default Layout;