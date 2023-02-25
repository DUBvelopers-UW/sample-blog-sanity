import RootLayout from "@/components/global/RootLayout";

import client from "@/sanity-utils/client";
import { PortableText } from "@portabletext/react";
import PostHeader from "@/components/post/PostHeader";
import ImageWrapper from "@/components/post/ImageWrapper";
import AuthorCard from "@/components/post/AuthorCard";

// Receive the post as props for the post's page
export default function BlogPost({ post }) {
  return (
    <RootLayout title={post.title}>
      <div className="pb-8 space-y-8">
        <div className="dark:divide-gray-700 divide-y px-4 lg:px-0 max-w-4xl mx-auto pt-4">
          {/* Post Header content should go here */}
          {/* Author content should go here */}
        </div>
        {/* Image content should go here */}
        <article className="dark:prose-invert prose-zinc prose lg:prose-md px-4 lg:px-0 max-w-4xl mx-auto w-full">
          {/* Post content should go here */}
        </article>
      </div>
    </RootLayout>
  );
}

// This is a Server Side Props function, which we will use to fetch data from Sanity
export async function getServerSideProps({ params }) {
  // Destructure the slug from the params
  // - This is the slug of the post we want to fetch
  const { slug } = params;

  // Create a query to fetch the post with the slug

  // Fetch the post from Sanity using the slug

  // If we can't find the post, return 404
  if (!post) return { notFound: true };

  // Return the post as props
  return {
    props: {
      post,
    },
  };
}
