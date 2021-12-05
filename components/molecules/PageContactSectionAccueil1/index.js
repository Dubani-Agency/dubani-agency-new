import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Bouton from "../../shared/Bouton";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import PageContactSectionAccueilStc from "./PageContactSectionAccueil1.stc";
import { AiOutlineMail} from "react-icons/ai";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DubaniOverlay from "../../shared/DubaniOverlay";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageContactSectionAccueil() {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageContactSectionAccueil1",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    lt.from(".PageContactSectionAccueil1 .img", {
      y: 100,
      duration: 1,
      opacity: 0,
    })
      .from(".PageContactSectionAccueil1 .el1", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil1 .el2", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil1 .el3", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil1 .el4", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil1 .el5", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil1 .form", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      });
  }, []);

  return (
    <PageContactSectionAccueilStc className="PageContactSectionAccueil1">
      <Row className="pl-0 pl-md-5 ml-0 ml-md-5">
        <Col lg={5} className="align-self-center ">
        <DubaniOverlay width="100%" />
          <div
            className="px-2 px-md-5 mx-0 mx-md-5 px-0 px-md-5"
            style={{ position: "relative", zIndex: 1 }}
          >
            
            <Title niveau={1} className="el1">
              Embauchez-nous.
            </Title>
            <Texte className="h5 py-2 py-md-3 el2">
              Soumettez nous votre projet
            </Texte>
            <Texte className="h5 py-2 py-md-0 mb-0 pb-0 el4"><b>VIA</b></Texte>
            <Texte className="h5 py-2 py-md-3 el3"><span><AiOutlineMail /></span>info@dubaniagency.com</Texte>
            <Texte className="h5 py-2 py-md-3 el4"><b>OU VIA CE FORMULAIRE</b></Texte>
          </div>
        </Col>
        <Col lg={7} className="right align-self-center py-md-5 py-2 form">
          <form className="pt-2 pt-md-5 mt-0 mt-md-5 px-0 px-md-4">
            <div className="form-group py-md-2 py-2">
              <input
                placeholder="Votre nom complet *"
                type="text"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
                className="form-control"
              />
            </div>

            <div className="form-group py-md-2 py-2">
              <input
                placeholder="Votre adresse E-mail *"
                type="text"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
                className="form-control input"
              />
            </div>
            <div className="form-group py-md-2 py-2">
              <input
                placeholder="Votre telephone *"
                type="text"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
                className="form-control"
              />
            </div>

            <div className="form-group py-md-2 py-2">
              <input
                placeholder="Votre site internet *"
                type="text"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
                className="form-control"
              />
            </div>

            <div className="form-group py-md-2 py-2">
              <Bouton className="btn">
                VALIDER
              </Bouton>
            </div>
          </form>
        </Col>
      </Row>
    </PageContactSectionAccueilStc>
  );
}

export default PageContactSectionAccueil;
