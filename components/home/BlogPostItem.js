import Link from "next/link";
import Image from "next/image";
import urlFor from "@/sanity-utils/urlFor";
import { getImageDimensions } from "@sanity/asset-utils";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import DateTimeItem from "./DateTimeItem";

// This component will be used to display a single blog post in a list
// - There is also image optimization here with next/image, Sanity, and LQIP
export default function BlogPostListItem({ post, index }) {
  const { width, height } = getImageDimensions(post.image);

  return (
    <li className="group py-4 lg:first:pt-0 lg:last:pb-0 lg:px-0">
      <Link href={`/${post.slug}`}>
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
          <Image
            src={urlFor(post.image).auto("format").url()}
            alt={post.title}
            width={width}
            height={height}
            className="sm:w-64 border rounded-lg dark:border-gray-700 group-hover:opacity-75 transition-opacity"
          />
          <div className="sm:p-4 w-full divide-y dark:divide-gray-700">
            <div className="space-y-4 pb-4">
              {index == 0 ? (
                <span className="text-xs dark:bg-blue-800 bg-blue-500 rounded-full px-3 py-1 text-white font-medium">
                  Latest blog post
                </span>
              ) : null}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:underline">
                  {post.title}
                </h3>
                <p className="sm:text-base text-sm dark:text-gray-400 text-gray-500 line-clamp-1">
                  {post.description}
                </p>
              </div>
            </div>
            <div className="sm:flex items-center justify-between sm:space-x-4 space-y-4 md:space-y-0 pt-4">
              <div className="flex items-center justify-start divide-x dark:divide-gray-700">
                <div className="flex items-center justify-start space-x-2 font-medium pr-4">
                  <Image
                    src={urlFor(post.author.image).auto("format").url()}
                    alt={post.author.name}
                    width={1024}
                    height={1024}
                    className="rounded-full border w-8 dark:border-gray-700"
                  />
                  <span className="dark:text-gray-400 text-gray-500 text-sm">
                    {post.author.name}
                  </span>
                </div>
                <div className="pl-4">
                  <DateTimeItem datetime={post._createdAt} />
                </div>
              </div>
              <div className="space-x-1 items-center justify-start flex text-sm dark:text-gray-400 text-gray-500">
                <span>Read more</span>
                <ArrowRightIcon className="w-4 h-4 inline-block group-hover:translate-x-1 transform transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
