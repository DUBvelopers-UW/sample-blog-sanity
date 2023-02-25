import client from "./client";
import imageUrlBuilder from "@sanity/image-url";

// This is a helper function to generate image URLs using Sanity's image CDN and the image builder
const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
