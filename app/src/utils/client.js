import sanityClient from '@sanity/client';

const options = {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID ,
    dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
};

const client = sanityClient({
    ...options,
    useCdn: true,
});

export default client;