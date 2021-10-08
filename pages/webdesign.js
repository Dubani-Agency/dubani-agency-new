import Banniere1 from "../components/molecules/Banniere1";
import PageWebSectionAccueil from "../components/molecules/PageWebSectionAccueil";
import PageWebSectionPackage1 from "../components/molecules/PageWebSectionPackage1";
import Head from "next/head";

const WebDesign = (props) => {
  return (
    <>
      <Head>
        <title>Dubani Agency | Web design </title>
      </Head>
      <PageWebSectionAccueil />
      <Banniere1 />
      <PageWebSectionPackage1 className="py-2 py-md-5 px-2 px-md-0" />
    </>
  );
};

export default WebDesign;
