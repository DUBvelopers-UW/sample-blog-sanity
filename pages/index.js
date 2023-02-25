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
        {/* Posts should go in here */}
      </PostsContainer>
    </RootLayout>
  );
}

// This is a Server Side Props function, which we will use to fetch data from Sanity
export async function getServerSideProps() {
  // Create a query to fetch all posts

  // Fetch all posts from Sanity using the client

  // If there are no posts, return 404
  if (!posts) return { notFound: true };

  // Return the posts as props
  return {
    props: {
      posts,
    },
  };
}
