import PageContactSectionAccueil1 from "../components/molecules/PageContactSectionAccueil1";
import Head from "next/head";

const Contact = (props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="information de l'agence digital Casablanca"
        />
        <title>Dubani Agency | Comment contacter notre agence digitale </title>
      </Head>
      <PageContactSectionAccueil1 />
    </>
  );
};

export default Contact;
