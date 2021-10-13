import React, { useEffect } from 'react'
import PageWebSectionPackageStc from './PageWebSectionPackage.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap'
import Title from '../../shared/Title'
import Texte from '../../shared/Texte'
import MyCaroussel from '../caroussel'

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay';
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageWebSectionPackage() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageWebSectionPackage",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageWebSectionPackage .pageTitle",{ y:100,duration:0.2,opacity:0,})
            .from ('.PageWebSectionPackage .MyTitle',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionPackage .PageText',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionPackage .row-caroussel',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageWebSectionPackageStc className="PageWebSectionPackage">
            <Container>
            <Row className="py-0 py-md-5">
                <Col lg={6} className="right">
                </Col>
               <Col lg={6}>
                    <Title className="pageTitle py-2 py-md-3">
                        Package
                    </Title>
                    <Title niveau={1} className="MyTitle">
                        Donnez vie à vos rêves avec votre site sur mesure, Simple Rapide & Fiable.
                    </Title>
                    <Texte className="PageText h5 py-2 py-md-3">
                        Nos concepteur et developpeur Web professionnels internes ont perfectionné leurs competence et utilisé les technologies les 
                        plus récentes et les performantes pour aider nos clients à atteindre leurs objectifs de vente en ligne, année après année.

                    </Texte>
               </Col>
            </Row>
           
            </Container>
            <Row className="my-2 my-md-5 row-caroussel">
                <Col lg={12} className="px-md-4 py-2 py-md-0 " >
                    <MyCaroussel/>
                </Col>
            </Row>
        </PageWebSectionPackageStc>
    )
}

export default PageWebSectionPackage
