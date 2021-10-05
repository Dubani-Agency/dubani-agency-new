import React, { useEffect } from 'react'
import PageReferencementSectionSeoStc from './PageReferencementSectionSeo.stc'
import {Container,Row,Col} from "reactstrap"
import Texte from '../../shared/Texte'
import Title from '../../shared/Title'
import Bouton from '../../shared/Bouton'
import Link from 'next/link'

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import DubaniOverlay from '../../shared/DubaniOverlay';
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageReferencementSectionSeo() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageReferencementSectionSeo",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageReferencementSectionSeo .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageReferencementSectionSeo .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageReferencementSectionSeo .row1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageReferencementSectionSeoStc className="PageReferencementSectionSeo">
            <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="pageTitle py-2 py-md-3">
                            SEO
                            </Title>
                            <Title niveau={1} className="MyTitle">
                                SEO: TOUT EST UNE QUESTION DE RETOUR SUR INVESTISSEMENT
                            </Title>
                        </div>
                    </Col>
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                </Row>
                <Row className="row1">
                    <Col lg={6}>
                        <img src="/img/cool.PNG" alt="Faire croître votre inverstissement" width="100%" />
                    </Col>
                    <Col lg={6} className="align-self-center">
                        <Texte className="py-2 py-md-2">
                            Votre investissement dans le réferencement est ce qui déterminera votre vitesse 
                            et votre classement. Vous voulez courir plus vite ? Investissez plus! 
                            Plus de budget signifie plus de temps.
                        </Texte>
                        <Texte className="py-2 py-md-2">
                            Si vous deviez investir 2000 $ par mois, vous 
                            pourriez ouvrir de nombreuses voies de revenus et 
                            10000 à 50 000 $ supplémentaires, vous auriez un excellent sur investissement.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 text-center">
                            <Link href="/contact/">
                            DEMANDEZ UNE CONSULTATION SUR LA STRATEGIE DE SEO 
                            PERSONNALISEE
                            </Link>
                        </Bouton>
                    </Col>
                </Row>
            </Container>
        </PageReferencementSectionSeoStc>
    )
}

export default PageReferencementSectionSeo
