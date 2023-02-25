import RootLayout from "@/components/global/RootLayout";
import PostsContainer from "@/components/home/PostsContainer";

import client from "@/sanity-utils/client";
import BlogPostItem from "@/components/home/BlogPostItem";

// Receive the posts as props for the home page
export default function Home({ posts }) {
  return (
    <RootLayout title="Home">
      <PostsContainer posts={posts}>
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
