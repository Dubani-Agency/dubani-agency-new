import Banniere1 from "../components/molecules/Banniere1";
import PageWebSectionAccueil from "../components/molecules/PageWebSectionAccueil";
import PageWebSectionPackage from "../components/molecules/PageWebSectionPackage";
import PageWebSectionPackage1 from "../components/molecules/PageWebSectionPackage1";
import PageWebSectionPackage2 from "../components/molecules/PageWebSectionPackage2";
import PageWebSectionProjet from "../components/molecules/PageWebSectionProjet";
import Head from "next/head";

const WebDesign = (props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="information surla creation de site web"
        />
        <title>
          Dubani Agency | La creation de site web dans notre agence web{" "}
        </title>
      </Head>
      <PageWebSectionAccueil />
      <Banniere1 />
      <PageWebSectionPackage1 className="py-2 py-md-5 px-2 px-md-0" />
      <PageWebSectionPackage className="py-2 py-md-5 px-2 px-md-0" />
      <PageWebSectionPackage2 className="py-2 py-md-5 px-2 px-md-0" />
      <PageWebSectionProjet className="py-2 py-md-5 px-2 px-md-0" />
    </>
  );
};

export default WebDesign;
