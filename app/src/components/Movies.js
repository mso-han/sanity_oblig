import React, { useState } from 'react';
import { getEvents } from '../utils/eventService';
import Movie from './Movie'

const Movies = () => {
    const [data, setData] = useState([]); 

    const handleClick = async() =>{
      const events = await getEvents();
      setData(events);
    };
    
    
    return (
        <>
        {data?.length > 0 ? data.map(movie=> <Movie title={movie.title} actor={movie.actor} />) : null}
        
          <button type="button" onClick={handleClick}>
            Get Content
          </button>
        </>
      );
};

export default Movies;