import Image from "next/image";
import urlFor from "@/sanity-utils/urlFor";

// This is the component that displays the post's image
// - The colors shown are extracted from the image using the Sanity image CDN
export default function ImageWrapper({ image }) {
  return (
    <div>
      <Image
        src={urlFor(image).width(1920).height(1080).auto("format").url()}
        width={1920}
        height={1080}
        alt={"Image"}
        placeholder="blur"
        blurDataURL={image.lqip}
      />
      <Colors colors={image.colors} />
    </div>
  );
}

function Colors({ colors }) {
  const colorsArray = [
    colors.darkMuted.background,
    colors.darkVibrant.background,
    colors.dominant.background,
    colors.lightMuted.background,
    colors.lightVibrant.background,
    colors.muted.background,
    colors.vibrant.background,
  ];

  return (
    <div className="grid grid-cols-7">
      {colorsArray.map((color, index) => (
        <div key={index} className="h-3" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
