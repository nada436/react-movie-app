import React from 'react';
import Movies_list from '../components/movies_list.jsx';
import Filter from '../components/Filter.jsx';
const Toprated = () => {
    return (
        <div>
            <Filter></Filter>
           <Movies_list page={"top_rated"}></Movies_list> 
        </div>
    );
}

export default Toprated;
