import React, { useState } from 'react';
import { getEvents } from '../utils/eventService';

const Movies = () => {
    const [data, setData] = useState([]); 
    const handleClick = async() =>{
      const events = await getEvents();
      setData(events);
    };
    return (
        <>
        {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
          <button type="button" onClick={handleClick}>
            Get Content
          </button>
        </>
      );
};

export default Movies;