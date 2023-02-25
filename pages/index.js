import Index from "@/components/global/Index";
import client from "@/sanity-utils/client";

import BlogPostItem from "@/components/home/BlogPostItem";

import PostsContainer from "@/components/home/PostsContainer";

import { useState } from "react";

export default function Home({ posts }) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    search ? post.title.includes(search) : true
  );

  return (
    <Index title="Home">
      <PostsContainer
        posts={filteredPosts}
        search={search}
        setSearch={setSearch}
      >
        {filteredPosts.map((post, index) => (
          <BlogPostItem key={post._id} index={index} post={post} />
        ))}
      </PostsContainer>
    </Index>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "blogPost"] {
    title,
    "slug": slug.current,
    description,
    "author": author->{name, image},
    _createdAt,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    },
  }`;
  const posts = await client.fetch(query);

  if (!posts) return { notFound: true };

  return {
    props: {
      posts,
    },
  };
}
