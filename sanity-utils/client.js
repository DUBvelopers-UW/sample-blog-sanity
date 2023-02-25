// sanity.js
import { createClient } from "@sanity/client";

// This is the client that will be used in the front-end to fetch data from Sanity

const client = createClient({
  projectId: "your-project-id", // you can find this in sanity.config.js
  dataset: "your-dataset-name", // you can find this in sanity.config.js
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default client;
