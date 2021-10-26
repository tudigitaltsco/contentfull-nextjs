import { createClient } from 'contentful-management'

const contentfulAPI = () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_API
  });

  return client;
};

export default contentfulAPI;
