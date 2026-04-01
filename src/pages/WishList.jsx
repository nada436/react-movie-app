import React from 'react';
import Movies_list from '../components/movies_list.jsx';

const Wishlist = () => {
    return (
        <div>
             <Movies_list page={'wishlist'}></Movies_list> 
        </div>
    );
}

export default Wishlist;
