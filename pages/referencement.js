import PageReferencementSectionAccueil from "../components/molecules/PageReferencementSectionAccueil";
import PageReferencementSectionEtape from "../components/molecules/PageReferencementSectionEtape";
import PageReferencementSectionSeo from "../components/molecules/PageReferencementSectionSeo";
import PageReferencementSectionSeo1 from "../components/molecules/PageReferencementSectionSeo1";
import PageReferencementSectionTarif from "../components/molecules/PageReferencementSectionTarif";
import Head from "next/head";

const Referencement = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content="le SEO dans note agence digitale" />
        <title>Dubani Agency | Notre secret sur le referencement </title>
      </Head>
      <PageReferencementSectionAccueil />
      <PageReferencementSectionSeo className="my-2 my-md-5" />
      <PageReferencementSectionSeo1 className="my-2 my-md-5" />
      <PageReferencementSectionEtape className="my-2 my-md-5" />
      <PageReferencementSectionTarif className="my-2 my-md-5" />
    </>
  );
};

export default Referencement;
