import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Bouton from "../../shared/Bouton";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import PageAccueilSectionAccueilStc from "./PageAccueilSectionAccueil.stc";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DubaniOverlay from "../../shared/DubaniOverlay";

gsap.registerPlugin(ScrollTrigger);

function PageAccueilSectionAccueil() {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageAccueilSectionAccuel",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.1,
    });

    lt.from(".PageAccueilSectionAccuel .cover1", {
      duration: 1,
      opacity: 1,
      ease: "slow(0.7, 0.7, false)",
      x: 100,
    })
    .from(".PageAccueilSectionAccuel .right", {
      delay:0,
      x: 100,
      duration: 1,
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
    })
    .from(".PageAccueilSectionAccuel .pageTitle", {
      y: 100,
      duration: 0.2,
      opacity: 0,
    })

      .from(".PageAccueilSectionAccuel .MyTitle", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionAccuel .PageText", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionAccuel .btn", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      });
  }, []);

  return (
<<<<<<< HEAD
    <PageAccueilSectionAccueilStc>
      <DubaniOverlay width="70%" />
      <Container>
        <Row
          className="PageAccueilSectionAccuel"
          style={{ position: "relative", zIndex: "2" }}
        >
=======
    <PageAccueilSectionAccueilStc className="PageAccueilSectionAccuel">
       <DubaniOverlay width="70%" />
      <Container>
        <Row className="" style={{position:"relative",zIndex:"2"}}>
>>>>>>> aefdcbbee9a3ab7694d9ab63422af1f532eb6349
          <Col lg={7} className=" align-self-center ">
            <div
              className="pr-0 pr-md-5 mr-0 mr-md-5"
              style={{ position: "relative", zIndex: 1 }}
            >
              <Title className="pageTitle py-2 py-md-3">Dubani Agency</Title>
              <Title niveau={1} className="MyTitle">
                Créer un site web personnalisée pour générer plus de trafic
              </Title>
              <Texte className="PageText h5 py-2 py-md-3 ">
                Avec une agence experte dans la création de site web
              </Texte>
              <Bouton className="btn" href="/contact">
                Embauchez nous
              </Bouton>
            </div>
          </Col>
<<<<<<< HEAD
          <Col className="px-md-0 right d-none d-lg-block align-self-center">
            <Image src="/img/home-guy.jpg" layout="fill" />
=======
          <Col
            lg={5}
            className="px-md-0 right d-none d-lg-block align-self-center"
          >
            <Image src="/img/g457.jpg" layout="fill" />
>>>>>>> aefdcbbee9a3ab7694d9ab63422af1f532eb6349
          </Col>
        </Row>
      </Container>
      <div className="cover1 d-none d-lg-block">

      </div>
    </PageAccueilSectionAccueilStc>
  );
}

export default PageAccueilSectionAccueil;
