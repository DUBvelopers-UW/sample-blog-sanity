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
          <PostHeader post={post} />
          {/* Author content should go here */}
          <AuthorCard author={post.author} />
        </div>
        {/* Image content should go here */}
        <ImageWrapper image={post.image} />
        <article className="dark:prose-invert prose-zinc prose lg:prose-md px-4 lg:px-0 max-w-4xl mx-auto w-full">
          {/* Post content should go here */}
          <PortableText value={post.content} />
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
  // - This query looks for all documents of the type "blogPost" with the slug we are looking for, and returns the first result
  // - It fetches the title, slug, description, and creation date of the post
  // - It fetches everything related to the author of the post
  // - It fetches the image of the post, extracted colors, and the lqip of the image (used for blur loading effect)
  // - It fetches the content of the post, in Portable Text format
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    _createdAt,
    slug,
    description,
    "author": author->{...},
    image {
      ...,
      "lqip": asset->metadata.lqip,
      "colors": asset->metadata.palette
    },
    content
  }`;

  // Fetch the post from Sanity using the slug
  const post = await client.fetch(query, { slug: slug });

  // If we can't find the post, return 404
  if (!post) return { notFound: true };

  // Return the post as props
  return {
    props: {
      post,
    },
  };
}
