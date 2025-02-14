import React from "react";
import PageAccueilSectionProjetStc from "./PageAccueilSectionProjet.stc";
import { Container, Row, Col } from "reactstrap";
import Title from "../../shared/Title";
import Texte from "../../shared/Texte";
import CardProjet from "../CardProjet";
import { useState } from "react";
import Chiffre from "../../shared/Chiffre";
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function PageAccueilSectionProjet(props) {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageAccueilSectionProjet",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    lt.from(".PageAccueilSectionProjet .pageTitle", {
      y: 100,
      duration: 0.2,
      opacity: 0,
    })
      .from(".PageAccueilSectionProjet .MyTitle", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .PageText", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .img", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .card1", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .card2", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .card3", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionProjet .card4", {
        duration: 0.2,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      });
  }, []);

  const [actif, setActif] = useState(1);

  const displyContent = (valeur) => {
    // console.log(valeur);
    setActif(valeur);
  };

  const wedo = () => {
    return actif;
  };

  return (
    <PageAccueilSectionProjetStc
      className={"PageAccueilSectionProjet " + props.className}
    >
      <Container className=" px-0">
        <Row>
          <Col lg={8}>
            <Title className="pageTitle py-2 py-md-3">Projets</Title>
            <Title niveau={1} className="MyTitle">
              Augmenter le chiffre d'affaires de votre société en ameliorant
              votre presence sur le web!
            </Title>
            <Texte className="PageText h5 py-2 py-md-3">
              Nous avons aidé plusieurs entreprises au Maroc et dans le monde à
              acquerir un avantage conccurentiel dans leur industrie tout en
              offrant un niveau inégalé d'attention personnelle et de soutien à
              la clientèle.
            </Texte>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>

      <section className="block-container-chiffre">
        <Container>
          <Row className="px-0 px-md-4">
            <Col lg={6} className="img d-none d-lg-block">
              {/* <Image src="/img/banner.svg" width="900" height="800" alt="Banner projet dubani" /> */}
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <CardProjet
                    className="card1"
                    texte="Experience"
                    indice="Ans"
                    chiffre={<Chiffre texte="5" />}
                  />
                  <CardProjet
                    className="card2"
                    texte="Projets realisés"
                    indice="Projets"
                    chiffre={<Chiffre texte="30" />}
                  />
                </Col>
                <Col lg={6} className="pt-0 pt-md-5">
                  <CardProjet
                    className="card3"
                    texte="Clients actifs"
                    indice="Clients"
                    chiffre={<Chiffre texte="20" />}
                  />
                  <CardProjet
                    className="card4"
                    texte="Pays couverts"
                    indice="Pays"
                    chiffre={<Chiffre texte="3" />}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </PageAccueilSectionProjetStc>
  );
}

export default PageAccueilSectionProjet;
