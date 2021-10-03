import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import DubaniOverlay from '../../shared/DubaniOverlay';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionAccueilStc from './PageMarketingSectionAccueil.stc'

function PageMarketingSectionAccueil() {
    return (
        <PageMarketingSectionAccueilStc>
           <Row className="pt-0 pt-md-5 mt-0 mt-md-5">
                <Col lg={7} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <DubaniOverlay width="100%" />
                    <div className="px-2 px-md-5 mx-0 mx-md-5 " style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Marketing digital
                        </Title>
                        <Title niveau={1} className="">
                            Prenez de l'avance sur vos concurrents avec un marketing numérique qui fonctionne., 
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            Nous apprenons à connaitre l'entreprise de chaque client ainsi que son equipe de marketing
                            interne, afin que nous puissons comprendre vos publics.mettre en place des campagnes réussis et offrir un retour sur investissement imbattable.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 ">
                            Embauchez nous
                        </Bouton>
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block align-self-center">
                    
                </Col>
            </Row>
        </PageMarketingSectionAccueilStc>
    )
}

export default PageMarketingSectionAccueil
