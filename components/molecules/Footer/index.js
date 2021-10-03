import React from 'react'
import FooterStc from './Footer.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap';
import Title from '../../shared/Title';
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai';
import {BsMap} from 'react-icons/bs';
import {FaFacebookSquare,FaInstagram} from 'react-icons/fa';
import Texte from '../../shared/Texte';

import { useEffect} from 'react'
import {gsap} from 'gsap';

import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".Footer",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".Footer .logo",{ y:100,duration:1,opacity:0,})
            .from ('.Footer .row1',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", x: -100 })
            .from ('.Footer .trait',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", x: 100 })
            .from ('.Footer .row2',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", x: -100 })
    }, []);

    return (
        <FooterStc>
            <Container className="Footer py-2 py-md-5">
                <div className="divLogo text-center py-3 py-md-3" style={{margin:"auto",display:"block"}}>
                    <img src="/img/logo.svg" className="logo"  height="80" />
                </div>
                <Row className="row1">
                    <Col lg={4}>
                        <Row>
                            <Col sm={2} className="align-self-center">
                                <span className="icon">
                                    <AiFillPhone />
                                </span>
                            </Col>
                            <Col sm={10} className="align-self-center">
                                <Title niveau={2}>
                                    <span className="mt-2" style={{fontSize:"16px",lineHeight:"1.5em"}}>
                                        Numero tel
                                    </span>
                                    <span className="value py-2" >
                                        +241 077 48 43 26
                                    </span>
                                </Title>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col sm={2} className="align-self-center">
                                <span className="icon">
                                    <AiOutlineMail />
                                </span>
                            </Col>
                            <Col sm={10} className="align-self-center">
                                <Title niveau={2}>
                                    <span className="mt-2" style={{fontSize:"16px",lineHeight:"1.5em"}}>
                                        Adresse E-mail
                                    </span>
                                    <span className="value py-2">
                                        info@dubaniagency.com
                                    </span>
                                </Title>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col sm={2} className="align-self-center">
                                <span className="icon">
                                    <BsMap />
                                </span>
                            </Col>
                            <Col sm={10} className="align-self-center">
                                <Title niveau={2}>
                                    <span className="mt-2" style={{fontSize:"16px",lineHeight:"1.5em"}}>
                                        Adresse du bureau
                                    </span>
                                    <span className="value py-2">
                                       31 Allee des pruniers,Casablanca
                                    </span>
                                </Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="trait py-2 py-md-4"></div>
                <Row className="py-md-5 py-2 row2">
                    <Col lg={6} className="px-md-5pl-md-0">
                        <Title niveau={2}>
                            DUBANI AGENCY
                        </Title>
                        <Texte className="">
                            Nous sommes une agence digitale basée à CASABLANCA (Maroc) spécialisée dans la création
                            de contenus digitaux pour les entreprises, les institutions.
                            C’est une agence de communication capable de créer des sites internet et de proposer 
                            toutes les prestations liées au webmarketing.
                        </Texte>
                    </Col>
                    <Col md={2}>
                        <Title niveau={3}>
                            Nos services
                        </Title>
                        <ul>
                            <li>
                               <a>Marketing digital</a>
                               <a>Web & Mobile Dev</a>
                               <a>Referencement</a>
                            </li> 
                        </ul>
                    </Col>
                    
                    <Col md={2}>
                        <Title niveau={3}>
                            Support 
                        </Title>
                        <ul>
                            <li>
                               <a>A propos de nous</a>
                               <a>Nos Projets</a>
                               <a>Contacts</a>
                            </li> 
                        </ul>
                    </Col>
                    <Col md={2}>
                        <Title niveau={3}>
                           Reseaux sociaux
                        </Title>
                        <ul>
                            <li>
                               <a><span style={{fontSize: "25px",marginRight: "10px"}}><FaFacebookSquare /></span>Dubani Agency</a>
                               <a><span style={{fontSize: "25px",marginRight: "10px"}}><FaInstagram /></span>dubaniagency</a>
                            </li> 
                        </ul>
                    </Col>
                </Row>
            </Container>
        </FooterStc>
    )
}

export default Footer
