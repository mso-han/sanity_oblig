import client from './client';

const movieListFields = `
    title,
    'actor': actor->title,
`;

export const getEvents = async() => {
    const data= await client.fetch(`*[_type == "movie"]{${movieListFields}}`);
    return data;
};
export default getEvents;