import React, { useEffect } from 'react'
import Banniere1Stc from './Banniere1.stc'
import {Container,Row,Col} from 'reactstrap'
import Texte from '../../shared/Texte'
import {AiOutlineCheckCircle} from 'react-icons/ai'

import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
import Image from "next/image"
gsap.registerPlugin(ScrollTrigger);

function Banniere1(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".Banniere1",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".Banniere1 .container-image",{ y:100,duration:0.2,opacity:0,})
            .from ('.Banniere1 .img',{duration:0.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.Banniere1 .container-but',{duration:0.2,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <Banniere1Stc className={"Banniere1 "+props.className}>
            <div className="sectionApres">
                <div className="container container-image my-2 my-md-0">
                    <Row className="mx-0" >
                        <Col lg={7} >
                            <div style={{height:"385px"}} className="d-none d-lg-block">
                                <Image src="/img/img6.png" layout="fill" alt="Image d'un site Web dans un ordinateur" className="img "  />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="container-but my-2 my-4 mx-2 mx-md-4 py-2 py-md-4 px-2 px-md-4 align-self-center" style={{background:"#fff"}}>
                                <ul>
                                    <li >
                                        <Texte>
                                        <span className="icon"><AiOutlineCheckCircle/></span> <span>Developper une presence en ligne</span>
                                        </Texte>
                                    </li>
                                    <li>
                                        <Texte>
                                        <span className="icon"><AiOutlineCheckCircle/></span><span>Ameliorer votre positionnement sur les moteurs de recherche</span>
                                        </Texte>
                                    </li>
                                    <li>
                                        <Texte>
                                        <span className="icon"><AiOutlineCheckCircle/></span><span>Atteigner les clients potentieks directement</span>
                                        </Texte>
                                    </li>
                                    <li>
                                        <Texte>
                                        <span className="icon"><AiOutlineCheckCircle/></span> <span>Mettez en place le payement en ligne depuis votre site web</span>
                                        </Texte>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Banniere1Stc>
    )
}

export default Banniere1
