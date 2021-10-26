import contentfulAPI from "../config/contentfulAPI";
import contentfulCDN from "../config/contentfulCDN";

export const getEmail = async (email) => {
  const data = await contentfulCDN().getEntries({
    content_type: "author",
    "fields.email": email,
  });

  return data;
};

export const createForm = async (params) => {
  const data = await contentfulAPI()
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment("master"))
    .then((environment) =>
      environment.createEntry("form", {
        fields: {
          fullName: {
            "en-US": params.fullName,
          },
          candidate: {
            "en-US": params.candidate,
          },
          email: {
            "en-US": params.email,
          },
          author: {
            "en-US": params.author,
          },
        },
      })
    )
    .then((entry) => entry.publish())
    .catch(console.error);
  return data;
};
