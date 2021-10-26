import { createClient } from "contentful";

const contentfulCDN = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_CDN,
    environment: 'master'
  });

  return client;
};

export default contentfulCDN;
