import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Bouton from "../../shared/Bouton";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import PageWebSectionAccueilStc from "./PageWebSectionAccueil.stc";
import Link from "next/link";
import Image from 'next/image';
import DubaniOverlay from "../../shared/DubaniOverlay";
import {gsap} from 'gsap';

function PageWebSectionAccueil() {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageWebSectionAccueil",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    lt.from(".PageWebSectionAccueil .pageTitle", {
      y: 100,
      duration: 0.2,
      opacity: 0,
    })
      .from(".PageWebSectionAccueil .MyTitle", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageWebSectionAccueil .PageText", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageWebSectionAccueil .btn", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageWebSectionAccueil .img1", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        x: -100,
      })
      .from(".PageWebSectionAccueil .img2", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        x: 100,
      })
      .from(".PageWebSectionAccueil .img3", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        x: -100,
      });
  }, []);

  return (
    <PageWebSectionAccueilStc>
      <DubaniOverlay width="100%" />
      <Container className="PageWebSectionAccueil">
        <Row className="pt-0 pt-md-0 mt-0 mt-md-0">
          <Col lg={7} className="align-self-center py-0 py-md-5 mt-0 mt-md-5">
            
            <div className="" style={{ position: "relative", zIndex: 1 }}>
              <Title className="pageTitle py-2 py-md-3">Web design</Title>
              <Title niveau={1} className="MyTitle">
                Créer un site web personnalisée pour generer plus de traffic
              </Title>
              <Texte className="PageText h5 py-2 py-md-3 ">
                Nous sommes un groupe de passionnés intrépides qui aiment
                relever des défis! Avec la collaboration à la base, nous sommes
                prêts à travailler avec vous pour concevoir des solutions Web
                gagnantes. Nous excellons à ecouter et à repondre à vos besoins,
                Pour vous offrir une collaboration de concetion Web reussie.
                Notre équipe d'expert de Casablanca est dotée des connaissances,
                de l'experience et de la passion nécessaires pour faire le
                travail et est prête à fournir une large gamme de services de
                conception et de développement de sites Web.
              </Texte>
              <Bouton className="btn px-2 px-md-5 ">
                <Link href="/contact/" className="px-2 px-md-5 ">
                  Embauchez nous
                </Link>
              </Bouton>
            </div>
          </Col>
          <Col lg={5} className="right d-none d-lg-block pt-0 pt-md-5">
            <div style={{position:"absolute"}}>
              <Image
                src="/img/web-1.png"
                alt="Maquette Web design, exemple dubani 1"
                className="img1"
                width="400"
                height="350"
                style={{ position: "absolute", left: "0px", top: "100px" }}
              />
            </div>
            <div style={{position:"absolute"}}>
              <Image
                src="/img/web-2.png"
                alt="Maquette Web design, exemple dubani 2"
                className="img2"
                width="400"
                height="350"
                style={{ position: "absolute", left: "0px", top: "100px" }}
              />
            </div>
            <div style={{position:"absolute"}}>
              <Image
                src="/img/web-3.png"
                alt="Maquette Web design, exemple dubani 3"
                className="img3"
                width="400"
                height="350"
                style={{ position: "absolute", left: "0px", top: "100px" }}
              />
            </div>
           
            
          </Col>
        </Row>
      </Container>
    </PageWebSectionAccueilStc>
  );
}

export default PageWebSectionAccueil;
