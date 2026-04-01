import React from 'react';
import Movies_list from '../components/movies_list.jsx';

const Toprated = () => {
    return (
        <div>
           <Movies_list page={"top_rated"}></Movies_list> 
        </div>
    );
}

export default Toprated;
