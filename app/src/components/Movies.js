import React, { useState } from 'react';
import { getEvents } from '../utils/eventService';
import Movie from './Movie'

const Movies = () => {
    const [data, setData] = useState([]); 
    const handleClick = async() =>{
      const events = await getEvents();
      setData(events);
    };
    const props = JSON.stringify(data).replace(/[[\]{}"]+/g, '').replace('title:', '').replace('actor:','').split(",");
    
    
    return (
        <>
        <Movie title={props[1]} actor={props[0]}/>
        
          <button type="button" onClick={handleClick}>
            Get Content
          </button>
        </>
      );
};

export default Movies;