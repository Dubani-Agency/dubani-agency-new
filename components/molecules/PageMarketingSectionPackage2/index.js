import React, { useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionPackage2Stc from './PageMarketingSectionPackage2.stc'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import CardPackage from '../CardPackage2';

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"

gsap.registerPlugin(ScrollTrigger);

function PageMarketingSectionPackage2(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageMarketingSectionPackage2",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageMarketingSectionPackage2 .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageMarketingSectionPackage2 .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .PageText',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .btn',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .card1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .card2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .card3',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage2 .card4',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageMarketingSectionPackage2Stc className={props.className}>
           <Container className="PageMarketingSectionPackage2 px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                <Col lg={7} className="right d-none d-lg-block align-self-center">
                        
                </Col>
                <Col lg={5} className="align-self-center ">
                    <div className="" style={{position:"relative",zIndex:1}}>
                        <Title className="pageTitle py-2 py-md-3">
                        Packgages
                        </Title>
                        <Title niveau={1} className="MyTitle">
                            Que faisons nous ?
                        </Title>
                        <Texte className="PageText h5 py-2 py-md-3">
                            Nous nous basons sur une approche directe et honnête
                        </Texte>
                    </div>
                </Col>
                   
                </Row>
                <Row className="package-img py-2 py-md-5 px-2 px-md-5" >
                    <Col lg={3} className="card1">
                        <CardPackage title="Gestion des reseaux sociaux" texte={<Texte>
                            La gestion des réseaux sociaux signifie gérer tous vos reseaux sociaux comme Facebook, Twitter,Instagram etc...
                                    de manière intégrale. Y compris des mises à jours continues sur votre marque.
                        </Texte>} />
                    </Col>
                    <Col lg={3} className="card2">
                        <CardPackage title="Gestion des publicités sur vos reseaux sociaux" texte={<>
                            Nous abritons de grands experts en publicité payante qui mettront en place de nouvelles 
                            strategies et de maximiser le ROI de vos campagnes Google Ads,Youtube, display, Google Shopping ou Amazon Ads ?.
                        </>} />
                    </Col>
                    <Col lg={3} className="card3">
                        <CardPackage title="Marketing par moteur de recherche" texte={<>
                            Outre la gestion specialisée des réseaux sociaux, nous proposons des campagnes intégrées qui incluent des outils de  réseaux numériques pour 
                            maximiser l'impact et générer plus de retour sur investissement pour les clients.
                        </>} />
                    </Col>
                    <Col lg={3} className="card4">
                        <CardPackage title="Marketing de contenu" texte={<>
                            Grâce au marketing de contenu, nous visons à créer, publier et distribuer le contenu pour un 
                            public ciblé spécifique. Ce service vise à attirer et a generer des prospects pour une entreprise et à 
                            créer une notoriété de marque.
                        </>} />
                    </Col>
                </Row>
           </Container>
        </PageMarketingSectionPackage2Stc>
    )
}

export default PageMarketingSectionPackage2
