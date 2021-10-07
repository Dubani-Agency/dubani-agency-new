
import PageBlogSectionAccueil from '../components/molecules/PageBlogSectionAccueil'
import PageBlogSectionBlog from '../components/molecules/PageBlogSectionBlog';
import Head from "next/head";

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Dubani Agency | Blog </title>
      </Head>
      <PageBlogSectionAccueil />
      <PageBlogSectionBlog />
    </>
  );
};


export default Blog;
