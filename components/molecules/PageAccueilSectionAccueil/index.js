import React, { useEffect, useRef } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageAccueilSectionAccueilStc from './PageAccueilSectionAccueil.stc'
import Link from 'next/link'
import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay'; 
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"

gsap.registerPlugin(ScrollTrigger);

function PageAccueilSectionAccueil() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageAccueilSectionAccuel",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageAccueilSectionAccuel .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageAccueilSectionAccuel .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionAccuel .PageText',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageAccueilSectionAccuel .btn',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageAccueilSectionAccueilStc>
           <Row className="PageAccueilSectionAccuel">
                <Col lg={7} className=" align-self-center ">
                    <DubaniOverlay width="70%" />
                    <div className="px-2 px-md-5 mx-0 mx-md-5 px-0 px-md-5" style={{position:"relative",zIndex:1}}>
                        <Title className="pageTitle py-2 py-md-3">
                            Dubani Agency
                        </Title>
                        <Title niveau={1} className="MyTitle" >
                            Créer un site web personnalisée pour générer plus de trafic 
                        </Title>
                        <Texte className="PageText h5 py-2 py-md-3 ">
                            Avec une agence experte dans la création de site web
                        </Texte>
                        <Bouton className="btn ">
                            <Link href="https://www.dubaniagency.com/contact/" className="px-2 px-md-5 ">
                                Embauchez nous
                            </Link>
                        </Bouton>
                    </div>
                </Col>
                <Col lg={5} className="px-md-0 right d-none d-lg-block align-self-center">
                    <div className="PageAccueilSectionAccueilCover"></div>
                </Col>
            </Row>
        </PageAccueilSectionAccueilStc>
    )
}

export default PageAccueilSectionAccueil
