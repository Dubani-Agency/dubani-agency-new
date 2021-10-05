import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bouton from '../../shared/Bouton'
import Title from '../../shared/Title'
import ReferencementSeo from '../ReferencemetSeo'
import PageReferencementSectionEtapeStc from './PageReferencementSectionEtape.stc'
import Link from 'next/link';

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay';
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageReferencementSectionEtape(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageReferencementSectionEtape",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageReferencementSectionEtape .MyTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageReferencementSectionEtape .card1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionEtape .card2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionEtape .card3',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionEtape .btn',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageReferencementSectionEtapeStc className={"PageReferencementSectionEtape "+props.className}>
             <Container>
             <Row className="my-2 my-md-5">
                <Col lg={6} className="align-self-center mt-0 mt-md-5">
                    <div className="" style={{position:"relative",zIndex:1}}>
                       
                        <Title niveau={1} className="MyTitle">
                            3 ETAPES VERS UN RANG SUPERIEUR SUR GOOGLE
                        </Title>
                    </div>
                </Col>
                <Col lg={6} className="right d-none d-lg-block py-0 py-md-5">
                    
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="align-self-center card1">
                    <ReferencementSeo 
                    title="PLANIFIER UN APPEL" 
                        texte={
                            <>
                                Lorsque vous ne voyez pas les classements Google et 
                                le succès que vous souhaitez dans entreprise, il est temps de parler
                                 à un gourou du référencement.
                            </>
                        }
                    />
                </Col>
                <Col lg={4} className="align-self-center card2">
                    <ReferencementSeo 
                    title="STRATEGIE DE REFERENCEMENT PERSONNALISEE" 
                        texte={
                            <>
                                Pendant l'appel, parlez de vos objectifs.Avant de raccrocher, vous aurez les grandes ligne 
                                 d'une strategoe qui vous mènera aux meilleurs classements.
                            </>
                        }
                    />
                </Col>
                <Col lg={4} className="align-self-center card3">
                    <ReferencementSeo 
                    title="DES CLASSEMENTS PLUS ELEVES" 
                        texte={
                            <>
                                Commencez à générer plus de trafic et plus d'interêt pour votre 
                                entreprise. c'est 2020 et il est temps d'obtenir un retour positif 
                                sur votre investissement.
                            </>
                        }
                    />
                </Col>
                <Col lg={12} className="my-2 my-md-5 text-center">
                    <Bouton className="btn">
                       <Link href="/contact/">
                            PARLEZ A UNE ENTREPRISE DE REFERENCEMENT AU MAROC
                       </Link>
                    </Bouton>
                </Col>
            </Row>
             </Container>
        </PageReferencementSectionEtapeStc>
    )
}

export default PageReferencementSectionEtape
