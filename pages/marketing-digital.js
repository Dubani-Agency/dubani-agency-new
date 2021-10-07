
import PageMarketingSectionAccueil from "../components/molecules/PageMarketingSectionAccueil";
import PageMarketingSectionPackage1 from "../components/molecules/PageMarketingSectionPackage1";
import PageMarketingSectionPackage2 from "../components/molecules/PageMarketingSectionPackage2";
import PageMarketingSectionProspecte from "../components/molecules/PageMarketingSectionProspecte";
import Head from "next/head";

const MarketingDigital = (props) => {
  return (
    <>
      <Head>
        <title>Dubani Agency | Marketing digital </title>
      </Head>
      <PageMarketingSectionAccueil />
      <PageMarketingSectionPackage1 className="my-2 my-md-5" />
      <PageMarketingSectionPackage2 className="my-2 my-md-5" />
      <PageMarketingSectionProspecte className="my-2 my-md-5" />
    </>
  );
};


export default MarketingDigital;
