import React, { useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageMarketingSectionPackage1Stc from './PageMarketingSectionPackage1.stc'
import {AiOutlineCheckCircle} from 'react-icons/ai'

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function PageMarketingSectionPackage1(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageMarketingSectionPackage1",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageMarketingSectionPackage1 .pageTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageMarketingSectionPackage1 .MyTitle',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .PageText',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .btn',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .package-img',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 40 })
            .from ('.PageMarketingSectionPackage1 .img',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", x: -100 })
            .from ('.PageMarketingSectionPackage1 .li1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .li2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .li3',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .li4',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageMarketingSectionPackage1 .li5',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <PageMarketingSectionPackage1Stc className={"PageMarketingSectionPackage1 "+props.className}>
           <Container className=" px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="pageTitle py-2 py-md-3">
                            Packgage
                            </Title>
                            <Title niveau={1} className="MyTitle">
                                Pourquoi choisir dubani agency ?
                            </Title>
                            
                        </div>
                    </Col>
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                </Row>
                </Container>
                <Row className="package-img mx-0 d-none d-lg-block">
                    <Col lg={12} style={{height:"300px"}}>
                        <Image src="/img/img4.png" layout="fill" alt="Banniere sur la Reunion strategique en marketing digital" />
                    </Col>
                </Row>
                <Row className="package-img1 my-0 py-2 py-md-5 px-2 px-md-5">
                    
                    <Col lg={5}>
                        <Image src="/img/img3.png" layout="fill" alt='Reunion strategique en marketing digital' className="img d-none d-lg-block" width="100%" />
                    </Col>
                    <Col lg={7}>
                        <ul className="package-ul px-0 px-md-5">
                            <li className="li1">
                                <span >
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Nous proposons des services complets</span>
                            </li>
                            <li className="li2">
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Des stratégie de marketing numérique éprouvées qui donnent des resultats incroyables</span>
                            </li>
                            <li className="li3">
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Campagnes marketing multicanales </span>
                            </li>
                            <li className="li4">
                                <span>
                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Axé sur les resultats et focalisé sur le retour sur investissement</span>
                            </li>
                            <li className="li5">
                                <span>

                                    <AiOutlineCheckCircle />
                                </span>
                                <span>Un tarif très concurrentiel</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
           
        </PageMarketingSectionPackage1Stc>
    )
}

export default PageMarketingSectionPackage1
