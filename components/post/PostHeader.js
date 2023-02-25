import DateTimeItem from "../home/DateTimeItem";

export default function PostHeader({ post }) {
  return (
    <div className="space-y-4 pt-12 pb-8 text-center flex-col flex items-center justify-start">
      <DateTimeItem datetime={post._createdAt} />
      <h1 className="font-bold text-5xl">{post.title}</h1>
      <h2 className="dark:text-gray-400 text-gray-500 text-xl font-medium">
        {post.description}
      </h2>
    </div>
  );
}
