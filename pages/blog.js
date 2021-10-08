import PageBlogSectionAccueil from "../components/molecules/PageBlogSectionAccueil";
import PageBlogSectionBlog from "../components/molecules/PageBlogSectionBlog";
import Head from "next/head";

const Blog = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content="blog sur le marketing digital" />
        <title>Dubani Agency | Le Blog de notre agence digitale </title>
      </Head>
      <PageBlogSectionAccueil />
      <PageBlogSectionBlog />
    </>
  );
};

export default Blog;
