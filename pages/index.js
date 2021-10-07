import PageAccueilSectionAccueil from "../components/molecules/PageAccueilSectionAccueil";
import PageAccueilSectionClient from "../components/molecules/PageAccueilSectionClient";
import PageAccueilSectionEquipe from "../components/molecules/PageAccueilSectionEquipe";
import PageAccueilSectionProjet from "../components/molecules/PageAccueilSectionProjet";
import PageAccueilSectionService from "../components/molecules/PageAccueilSectionService";
import SectionContact from "../components/molecules/SectionContact";
import Styled from 'styled-components';

const SectionStc=Styled.section`
  background:transparent;
  height:100vh;
  position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 86vh;
    border-bottom: 100vh solid #fbf9f8;
    border-right: 100vw solid transparent;
`;

const Index = (props) => {

  return (
    <>
    
      <PageAccueilSectionAccueil />
      <PageAccueilSectionService className="py-2 py-md-5"/>
      <PageAccueilSectionProjet className="py-2 py-md-5"/>
      <PageAccueilSectionClient className="py-2 py-md-5"/>
      
      <PageAccueilSectionEquipe className="py-2 py-md-5"/>
      <SectionContact className="py-2 py-md-5"/>

    </>
  );
};


export default Index;
