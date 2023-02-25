import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Index({ children, title = "My Blog" }) {
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
