import React, { useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageReferencementSectionAccueilStc from './PageMarketingSectionAccueil.stc'
import Link from 'next/link'

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay';
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageReferencementSectionAccueil() {

    
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageReferencementSectionAccueil",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageReferencementSectionAccueil .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageReferencementSectionAccueil .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionAccueil .PageText1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionAccueil .PageText2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionAccueil .btn',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageReferencementSectionAccueilStc className="PageReferencementSectionAccueil">
           <Row className="pt-0 pt-md-5 mt-0 mt-md-5">
                <Col lg={9} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <DubaniOverlay width="100%" />
                    <div className="px-2 px-md-5 mx-0 mx-md-5 " style={{position:"relative",Zindex:"1"}}>
                        <Title className="py-2 py-md-3 pageTitle">
                            Referencement 
                        </Title>
                        <Title niveau={1} className="MyTitle">
                            Si vous avez atteri sur cette page de référencement, vous avez problablement effectué 
                            une recherche Google sur Maroc SEO.
                        </Title>
                        <Texte className="h5 py-2 py-md-3 PageText1">
                            Vous avez trouvé Dubani Agency parceque nous pratiquons 
                            ce que nous prêchons et comprenons les facteurs de classement
                            les plus importants sur Google. Ne serait-ce pas incroyable si 
                            vous pouviez vous classer n°1 sur Google ?
                            
                        </Texte>
                        <Texte className="h5 py-2 py-md-3 PageText2">
                            Prenez un moment pour imaginer tout le travail supplémentaire que vous pourriez accomplir avec une équipe fiable de référencement au 
                             Maroc à vos côtés. Vous seriez en mesure de vous concentrer sur les parties de votre entreprise 
                             qui necessitent votre attention au fur et à mesure que vous developpez votre entreprise, tandisque nous vous obtenons les classements pour augmenter vos benefices.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 btn">
                            <Link href="/contact/">
                            DEMANDEZ UNE CONSULTATION SUR L'OPTIMISATION DES MOTEUR DE RECHERCHE
                            </Link>
                        </Bouton>
                    </div>
                </Col>
                <Col lg={3} className="right d-none d-lg-block py-0 py-md-5">
                    
                </Col>
            </Row>
        </PageReferencementSectionAccueilStc>
    )
}

export default PageReferencementSectionAccueil
