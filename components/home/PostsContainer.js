import { XMarkIcon } from "@heroicons/react/20/solid";

// This is a container for the posts on the home page, and also contains the search functionality
export default function PostsContainer({ posts, children, search, setSearch }) {
  return (
    <div className="max-w-4xl py-4 mx-auto px-4 lg:px-0">
      <div className="flex items-center justify-between space-x-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {search ? `Search results for "${search}"` : "All Posts"}
          </h2>
          <p className="text-sm text-gray-500 font-medium dark:text-gray-400">
            {posts.length} post{posts.length == 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <input
            type="text"
            placeholder="Search for a post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength="25"
            className="w-64 h-11 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-100"
          />
          <button
            onClick={() => {
              setSearch("");
            }}
            className="h-11 w-11 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 justify-center p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-100"
          >
            <XMarkIcon className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
      <ul className="divide-y">{children}</ul>
    </div>
  );
}
