import client from './client';

const movieListFields = `
    title,
    'actor': actor->name,
`;

export const getEvents = async() => {
    const data= await client.fetch(`*[_type == "movie"]{${movieListFields}}`);
    return data;
};
export default getEvents;