import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

// This is the layout component that wraps around all the pages
export default function RootLayout({ children, title = "My Blog" }) {
  return (
    <>
      <Head>
        <title>{title != "My Blog" ? title + " | My Blog" : title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
