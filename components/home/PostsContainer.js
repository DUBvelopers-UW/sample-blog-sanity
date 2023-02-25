// This is a container for the posts on the home page, and also contains the search functionality
export default function PostsContainer({ posts, children }) {
  return (
    <div className="max-w-4xl py-4 mx-auto px-4 lg:px-0">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          All Posts
        </h2>
        <p className="text-sm text-gray-500 font-medium dark:text-gray-400">
          {posts.length} post{posts.length == 1 ? "" : "s"}
        </p>
      </div>
      <ul className="divide-y">{children}</ul>
    </div>
  );
}
