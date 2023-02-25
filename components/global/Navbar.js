import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-4xl mx-auto px-4 lg:px-0">
      <div className="border-b dark:border-gray-700 pb-4 pt-12">
        <Link href="/">
          <span className="font-semibold text-4xl hover:underline">
            My Blog
          </span>
        </Link>
      </div>
    </nav>
  );
}
