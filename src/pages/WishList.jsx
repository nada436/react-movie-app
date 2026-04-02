import React from 'react';
import Movies_list from '../components/movies_list.jsx';
import Filter from '../components/filter.jsx' 
const Wishlist = () => {
    return (
        <>
            <Filter></Filter>
             <Movies_list page={'wishlist'}></Movies_list> 
        </>
    );
}

export default Wishlist;
