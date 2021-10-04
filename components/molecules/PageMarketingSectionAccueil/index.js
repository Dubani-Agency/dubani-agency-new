import React, { useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import DubaniOverlay from '../../shared/DubaniOverlay';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionAccueilStc from './PageMarketingSectionAccueil.stc'
import Link from 'next/link'
import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"

gsap.registerPlugin(ScrollTrigger);

function PageMarketingSectionAccueil() {
    
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageMarketingSectionAccueil",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageMarketingSectionAccueil .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageMarketingSectionAccueil .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionAccueil .PageText',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionAccueil .btn',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageMarketingSectionAccueilStc>
           <Row className="PageMarketingSectionAccueil pt-0 pt-md-5 mt-0 mt-md-5">
                <Col lg={7} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
                    <DubaniOverlay width="100%" />
                    <div className="px-2 px-md-5 mx-0 mx-md-5 " style={{position:"relative",zIndex:1}}>
                        <Title className="pageTitle py-2 py-md-3">
                            Marketing digital
                        </Title>
                        <Title niveau={1} className="MyTitle">
                            Prenez de l'avance sur vos concurrents avec un marketing numérique qui fonctionne., 
                        </Title>
                        <Texte className="PageText h5 py-2 py-md-3 ">
                            Nous apprenons à connaitre l'entreprise de chaque client ainsi que son equipe de marketing
                            interne, afin que nous puissons comprendre vos publics.mettre en place des campagnes réussis et offrir un retour sur investissement imbattable.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 ">
                            <Link href="https://www.dubaniagency.com/contact/" className="px-2 px-md-5 ">
                                Embauchez nous
                            </Link>
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
