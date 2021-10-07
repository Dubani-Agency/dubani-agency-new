import React, { useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import PageWebSectionProjetStc from './PageWebSectionProjet.stc';

import CardClient from '../CardClient';
import Bouton from '../../shared/Bouton';


import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay';
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageWebSectionProjet(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageWebSectionProjet",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageWebSectionProjet .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageWebSectionProjet .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionProjet .card1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionProjet .card2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionProjet .card3',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);


    return (
        <PageWebSectionProjetStc className={"PageWebSectionProjet "+props.className}>
           <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                
                <Col lg={7} className="align-self-center ">
                    <div className="" style={{position:"relative",zIndex:1}}>
                        <Title className="pageTitle py-2 py-md-3">
                            Projet
                        </Title>
                        <Title niveau={1} className="MyTitle">
                            Nos projets
                        </Title>
                        
                    </div>
                </Col>
                <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                </Col>
                   
                </Row>
                <Row className="package-img py-2 py-md-2 px-2 px-md-5" >
                <Col lg={4} className="card1 px-md-4 py-2 py-md-0">
                        <CardClient 
                            image="/img/PageAccueilSectionClient/image-1.jpg" 
                            alt="Image 2 du site GSN AUTO developpé par L'agence de communication digitale Dubani agency"
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo du site GSN AUTO developpé par L'agence de communication digitale Dubani agency" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                GSN AUTO
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="card2 px-md-4 py-2 py-md-0">
                        <CardClient className=""
                        alt="Image 2 du site WINTECH developpé par L'agence de communication digitale Dubani agency"
                            image="/img/PageAccueilSectionClient/image-2.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo du site WINTECH developpé par L'agence de communication digitale Dubani agency" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                WINTECH
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-2 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="card3 px-md-4 py-2 py-md-0">
                        <CardClient className=""
                        alt="Image 2 du site XPATSA developpé par L'agence de communication digitale Dubani agency"
                            image="/img/PageAccueilSectionClient/image-3.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo du site XPATSA developpé par L'agence de communication digitale Dubani agency" height="20" /> 
                            <span style={{marginLeft:"10px"}}>
                                XPATSA
                            </span>
                            </Title> }
                            texte={
                                <p>
                                    Web Design,UI/UX
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                Visiter le site
                            </Bouton>
                        }
                        />
                    </Col>
                    
                </Row>
           </Container>
        </PageWebSectionProjetStc>
    )
}

export default PageWebSectionProjet
