import React from "react";
import PageAccueilSectionServiceStc from "./PageAccueilSectionService.stc";
import { Container, Row, Col } from "reactstrap";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import CardService from "../CardService";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Bouton from "../../shared/Bouton";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function PageAccueilSectionService(props) {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageAccueilSectionService",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    lt.from(".PageAccueilSectionService .pageTitle", {
      y: 100,
      duration: 0.5,
      opacity: 0,
    })
      .from(".PageAccueilSectionService .MyTitle", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionService .PageText", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionService .card1", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionService .card2", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionService .card3", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageAccueilSectionService .card4", {
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      });
  }, []);

  return (
    <PageAccueilSectionServiceStc className={props.className}>
      <Container className="PageAccueilSectionService px-0">
        <Row>
          <Col lg={5}></Col>
          <Col lg={7}>
            <Title className="pageTitle py-2 py-md-3">Nos services</Title>
            <Title niveau={1} className="MyTitle">
              Nous vous accompagnons dans tout vos projets
            </Title>
            <Texte className="PageText h5 py-2 py-md-3">
              Notre Equipe d'expert vous offres une gammes de services très
              variée.
            </Texte>
          </Col>
        </Row>
        <Row className="my-2 my-md-5">
          <Col lg={3} className=" card1 mt-0 mt-md-5 px-2 px-md-4 pt-4 pt-md-5">
            <CardService
              icon={<AiOutlineFileSearch />}
              title={<Title niveau={5}>Marketing digital</Title>}
              texte={
                <p>
                  Nous mettons en place votre Stratégie marketing en vous
                  Assurant ainsi une meilleure Rentabilité dans vos actions
                </p>
              }
              bouton={
                <Bouton className="btn my-md-3 my-2">
                  <Link href="/marketing-digital">
                    <BsArrowRight />
                  </Link>
                </Bouton>
              }
            />
          </Col>
          <Col lg={3} className="card2 px-2 px-md-4 py-4 py-md-0">
            <CardService
              className="mt-0 mt-md-5"
              icon={<AiOutlineFileSearch />}
              title={<Title niveau={5}>WEB Design</Title>}
              texte={
                <p>
                  Nous prenons très au sérieux votre investissement dans le site
                  Web et le marketing en ligne de votre entreprise.En mettant
                  l'accent sur la fourniture à nos clients des meilleures
                  solutions de conception de site Web au Maroc
                </p>
              }
              bouton={
                <Bouton className="btn my-md-3 my-2">
                  <Link href="/création-de-site-web">
                    <BsArrowRight />
                  </Link>
                </Bouton>
              }
            />
          </Col>
          <Col lg={3} className="card3 px-2 px-md-4 py-0 py-md-0">
            <CardService
              className="mt-0 mt-md-5"
              icon={<AiOutlineFileSearch />}
              title={<Title niveau={5}>E-COMMERCE</Title>}
              texte={
                <p>
                  Nos concepteur de site Web professionnels utilisent les
                  technologies de commerce électronique les plus recentes et les
                  plus performantes pour aider nos clients à atteindre leurs
                  objectifs de vente en ligne,année après année.
                </p>
              }
              bouton={
                <Bouton className="btn my-md-3 my-2">
                  <BsArrowRight />
                </Bouton>
              }
            />
          </Col>
          <Col lg={3} className="card4 mt-0 mt-md-5 py-4 py-md-0 px-2 px-md-4">
            <CardService
              className="mt-0 mt-md-5"
              icon={<AiOutlineFileSearch />}
              title={<Title niveau={5}>Referencement</Title>}
              texte={
                <p>
                  Notre principale mission consiste à ameliorer le
                  positionnement de votre site web sur les moteurs et annuaires.
                </p>
              }
              bouton={
                <Bouton className="btn my-md-3 my-2">
                  <Link href="/referencement">
                    <BsArrowRight />
                  </Link>
                </Bouton>
              }
            />
          </Col>
        </Row>
      </Container>
    </PageAccueilSectionServiceStc>
  );
}

export default PageAccueilSectionService;
