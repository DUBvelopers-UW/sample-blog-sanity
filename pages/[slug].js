import client from "@/sanity-utils/client";
import { PortableText } from "@portabletext/react";

import Index from "@/components/global/Index";
import PostHeader from "@/components/post/PostHeader";
import ImageWrapper from "@/components/post/ImageWrapper";
import AuthorCard from "@/components/post/AuthorCard";

export default function BlogPost({ post }) {
  return (
    <Index title={post.title}>
      <div className="pb-8 space-y-8">
        <div className="dark:divide-gray-700 divide-y px-4 lg:px-0 max-w-4xl mx-auto pt-4">
          <PostHeader post={post} />
          <AuthorCard author={post.author} />
        </div>
        <ImageWrapper image={post.image} />
        <article className="dark:prose-invert prose-zinc prose lg:prose-md px-4 lg:px-0 max-w-4xl mx-auto w-full">
          <PortableText value={post.content} />
        </article>
      </div>
    </Index>
  );
}

export async function getServerSideProps({ params }) {
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

  const post = await client.fetch(query, { slug: params.slug });

  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
  };
}
