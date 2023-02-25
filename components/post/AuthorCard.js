import Image from "next/image";
import urlFor from "@/sanity-utils/urlFor";

// This is the component that displays the author's image and bio
export default function AuthorCard({ author }) {
  return (
    <div className="space-y-2 pt-8 text-center">
      <p className="text-xs dark:text-gray-400 text-gray-500 uppercase tracking-widest">
        Author
      </p>
      <Image
        src={urlFor(author.image).auto("format").url()}
        alt={author.name}
        width={1024}
        height={1024}
        className="rounded-full border dark:border-gray-700  w-14 mx-auto"
      />
      <div>
        <h4 className="dark:text-gray-200 text-gray-700 font-semibold">
          {author.name}
        </h4>
        <p className="text-sm dark:text-gray-400 text-gray-500">{author.bio}</p>
      </div>
    </div>
  );
}
