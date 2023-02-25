import RootLayout from "@/components/global/RootLayout";
import PostsContainer from "@/components/home/PostsContainer";
import { useState } from "react";

import client from "@/sanity-utils/client";
import BlogPostItem from "@/components/home/BlogPostItem";

// Receive the posts as props for the home page
export default function Home({ posts }) {
  //  Search Functionality State
  const [search, setSearch] = useState("");

  // Filter Posts by Search
  const filteredPosts = posts.filter((post) =>
    search ? post.title.includes(search) : true
  );

  return (
    <RootLayout title="Home">
      <PostsContainer
        posts={filteredPosts}
        search={search}
        setSearch={setSearch}
      >
        {/* Here, we iterate over our array of filtered posts, rendering a BlogPostItem for each post */}
        {filteredPosts.map((post, index) => (
          <BlogPostItem key={post._id} index={index} post={post} />
        ))}
      </PostsContainer>
    </RootLayout>
  );
}

// This is a Server Side Props function, which we will use to fetch data from Sanity
export async function getServerSideProps() {
  // Create a query to fetch all posts
  // - This query looks for all documents of the type "blogPost"
  // - It fetches the title, slug, description, and creation date of the post
  // - It fetches the author's name and image
  // - It fetches the image of the post, and the lqip of the image (used for blur loading effect)
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

  // Fetch all posts from Sanity using the client
  const posts = await client.fetch(query);

  // If there are no posts, return 404
  if (!posts) return { notFound: true };

  // Return the posts as props
  return {
    props: {
      posts,
    },
  };
}
