// sanity.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default client;
