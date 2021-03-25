import React  from 'react';

const Movie = ({title, actor}) => {
    return (
        <>
        <h1>{title}</h1>
        <h2>{actor}</h2>
        </>
    )

}
export default Movie;