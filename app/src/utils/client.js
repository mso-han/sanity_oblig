import sanityClient from '@sanity/client';

const options = {
    projectId: 'kkmykh6us',
    dataset: 'production',
};

const client = sanityClient({
    ...options,
    useCdn: true,
});

export default client;