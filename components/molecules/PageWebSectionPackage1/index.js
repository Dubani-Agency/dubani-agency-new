
import React, { useEffect } from 'react'
import PageWebSectionPackage1Stc from './PageWebSectionPackage1.stc'
import {Container,Row,Col} from 'reactstrap';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import CardProjet from '../CardProjet';
import Bouton from '../../shared/Bouton';
import {BsArrowRight} from 'react-icons/bs'

import { useState } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"

gsap.registerPlugin(ScrollTrigger);
function PageWebSectionPackage1(props) {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".PageWebSectionPackage1",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from(".PageWebSectionPackage1 .MyTitle",{ y:100,duration:1,opacity:0,})
            .from ('.PageWebSectionPackage1 .PageText',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.PageWebSectionPackage1 .containerChiffre',{duration:1,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);


    const [actif1,setActif1]=useState("active");
    const [actif2,setActif2]=useState("");
    const [actif3,setActif3]=useState("");
    const [actif4,setActif4]=useState("");
    const [title,setTitle]=useState("Conception de site web");
    const [texte,setTexte]=useState(<>Notre equipe de developpement mets à votre disposition de connaissance évoluer dans les  
        les nouvelles technologie, offrant ainsi à vos client une experience unique et moderne</>);
    const [btn,setBtn]=useState(<Bouton className="btn">
                        <BsArrowRight />
                    </Bouton>);
    const [img,setImg]=useState("/img/img-package1.png");
    
    const openMenu1=()=>{
        setTitle("Conception de site web");
        setTexte(<>Notre equipe de developpement mets à votre disposition de connaissance évoluer dans les  
        les nouvelles technologie, offrant ainsi à vos client une experience unique et moderne</>);
        setImg('/img/img-package1.png');
        setBtn(
            <Bouton className="btn">
                <BsArrowRight />
            </Bouton>
        );
         setActif1('active');
         setActif2('');
         setActif3('');
         setActif4('');
      
    }
    const openMenu2=()=>{
        setTitle("Conception d'applications mobiles");
        setTexte(<>Conscient de la place que prend de plus en plus les smarthphone dans nos vie 
        Dubani vous propose des sites Web optimiser pour l'affichage mobile. Le tout pour offrir 
        a vos clients une experience des plus aboutit.</>);
        setImg('/img/img-package2.png');
        setBtn(
            <Bouton className="btn">
                <BsArrowRight />
            </Bouton>
        );

        setActif1('');
        setActif2('active');
        setActif3('');
        setActif4('');
    }

    const openMenu3=()=>{
        setTitle("Marketing en ligne");
        setTexte(<>Avoir un site web n'est utile que si vous mettez en place la campagne marketing qu'il faut pour 
        vendre votre marqie. De part son expertise dans le domaine du marketing Numérique, Dubani s'engage 
        a être votre partenaire Marketing Numérique</>);
        setImg('/img/img-package3.png');
         setBtn(
            <Bouton className="btn">
                <BsArrowRight />
            </Bouton>
        );

        setActif1('');
        setActif2('');
        setActif3('active');
        setActif4('');
    }
    const openMenu4=()=>{
        setTitle("Analyse du traffic Web");
        setTexte(<>L'analyse du traffic de votre site web vous permet de determiner s'il a attiré le 
        nombre de prospects escompté. Dubani vous aide a mettre en place les différents outils 
        nécessaire pour analyser votre traffic Web.</>);
        setImg('/img/img-package4.png');
        setBtn(
           <Bouton className="btn">
               <BsArrowRight />
           </Bouton>
       );

       setActif1('');
       setActif2('');
       setActif3('');
       setActif4('active');
    }


    return (
        <PageWebSectionPackage1Stc className={"PageWebSectionPackage1 "+props.className}>
            <Container className="px-0">
                <Row>
                    <Col lg={8}>
                        <Title className="MyTitle py-2 py-md-3">
                            Projets
                        </Title>
                        <Title niveau={1} className="PageText">
                            Nous nous occupons de votre site web, de la création à la génération de trafic.
                        </Title>
                       
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
           
            <Container className="containerChiffre px-0">
                <Row>
                   <Col md={7} className="pr-md-0">
                    <div className="block px-2 px-md-4 py-2 py-md-4">
                        <div className="block-image" style={{height:"250px",overflow:"hidden"}}>
                            <img src={img} alt="" width="100%" />
                        </div>
                        <div className="block-caption">
                            <Title niveau={5} className="my-2 my-md-4">
                                {
                                    title
                                }
                                
                            </Title>
                            <Texte>
                                {texte}
                            </Texte>

                            {
                                btn
                            }
                        </div>
                    </div>
                   </Col>
                   <Col md={5} className="pl-md-0">
                        <a onClick={openMenu1} >
                            <Title niveau={3}  className={"px-2 px-md-3 mb-0 py-2 py-md-4 h3 "+actif1}>
                                Conception de site web
                            </Title>
                        </a>
                       <Title niveau={3} className={"px-2 px-md-3 mb-0 py-2 py-md-4 h3 "+actif2}>
                           <a onClick={openMenu2}>Conception d'applications mobiles</a>
                       </Title>
                       <a onClick={openMenu3}>
                            <Title niveau={3} className={"px-2 px-md-3 mb-0 py-2 py-md-4 h3 "+actif3}>
                                Marketing en ligne
                            </Title>
                       </a>
                       <a onClick={openMenu4}>
                            <Title niveau={3} className={"px-2 px-md-3 mb-0 py-2 py-md-4 h3 "+actif4}>
                                Analyse du traffic Web
                            </Title>
                       </a>
                   </Col>
                </Row>
            </Container>
        </PageWebSectionPackage1Stc>
    )
}

export default PageWebSectionPackage1
