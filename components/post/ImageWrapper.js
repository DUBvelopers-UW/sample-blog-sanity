import Image from "next/image";
import urlFor from "@/sanity-utils/urlFor";

// This is the component that displays the post's image
// - The colors shown are extracted from the image using the Sanity image CDN
export default function ImageWrapper({ image }) {
  return (
    <Image
      src={urlFor(image).width(1920).height(1080).auto("format").url()}
      width={1920}
      height={1080}
      alt={"Image"}
      placeholder="blur"
    />
  );
}
