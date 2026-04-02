import React from 'react';
import Movies_slider from '../components/movies_slider.jsx';
import Movies_list from '../components/movies_list.jsx';
import Filter from '../components/Filter.jsx';

const Home = () => {
    return (
        <>
          <Movies_slider></Movies_slider>  
            <Filter/>
          <Movies_list></Movies_list>  
        </>
    );
}

export default Home;
