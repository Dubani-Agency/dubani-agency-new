import React from 'react'
import PageAccueilSectionClientStc from './PageAccueilSectionClient.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap'
import Title from '../../shared/Title'
import Texte from '../../shared/Texte'
import CardClient from '../CardClient'
import Bouton from '../../shared/Bouton'
import Link from 'next/link'

import { useEffect} from 'react'
import {gsap} from 'gsap';

import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function PageAccueilSectionClient() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageAccueilSectionClient",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageAccueilSectionClient .pageTitle",{ y:100,duration:0.2,opacity:0,})
            .from ('.PageAccueilSectionClient .MyTitle',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionClient .PageText',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionClient .card1',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionClient .card2',{duration:.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionClient .card3',{duration:.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageAccueilSectionClientStc>
            <Container className="PageAccueilSectionClient">
            <Row className="py-0 py-md-5">
                <Col lg={6} className="right">
                </Col>
               <Col lg={6}>
                    <Title className="pageTitle py-2 py-md-3">
                        Nos Clients
                    </Title>
                    <Title niveau={1} className="MyTitle">
                        Ils nous ont fait confiance et n'ont pas été déçus !
                    </Title>
                    <Texte className="PageText h5 py-2 py-md-3">
                        Nous avons travaillé avec des startups, des petites entreprises et de grandes
                         entreprises avec des spécialités allant de la conception et du développement de site
                         Web à l'optimisation des moteurs de recherche et à la conception de logos. Notre équipe
                         talentueuse propose des stratégies innovantes et des résultats reconnaissables.

                    </Texte>
               </Col>
            </Row>
            <Row className="my-2 my-md-5">
                    <Col lg={4} className="card1 px-md-4 py-2 py-md-0">
                        <CardClient 
                            alt="Image du site internet de GSN AUTO"
                            image="/img/PageAccueilSectionClient/image-1.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo du site internet de GSN AUTO" height="20" /> 
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
                                <a href="https://gsnauto.com/" target="_blank">
                                    Visiter le site
                                </a>
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="card2 px-md-4 py-2 py-md-0">
                        <CardClient className="mt-0 mt-md-5"
                            alt="Image du Site internet de WINTECH"
                            image="/img/PageAccueilSectionClient/image-2.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo du Site internet de WINTECH" height="20" /> 
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
                            <Bouton className="btn my-md-3 my-2" >
                                <a href="http://www.wintech.africa.com/" target="_blank">
                                    Visiter le site
                                </a>
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="card3 mt-0 mt-md-5 px-md-4 py-2 py-md-0">
                        <CardClient className="mt-0 mt-md-5"
                            alt="Image du Site internet de XPATSA"
                            image="/img/PageAccueilSectionClient/image-3.jpg" 
                            title={ <Title niveau={5}>
                            <img src="/img/logo.svg" alt="Logo de l'application Web de XPATSA" height="20" /> 
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
                                <a href="https://www.xpatsa.com/" target="_blank">
                                    Visiter le site
                                </a>
                            </Bouton>
                        }
                        />
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionClientStc>
    )
}

export default PageAccueilSectionClient
