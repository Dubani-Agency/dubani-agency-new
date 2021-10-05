import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Bouton from "../../shared/Bouton";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import PageContactSectionAccueilStc from "./PageContactSectionAccueil.stc";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DubaniOverlay from "../../shared/DubaniOverlay";
// import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
gsap.registerPlugin(ScrollTrigger);

function PageContactSectionAccueil() {
  useEffect(() => {
    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".PageContactSectionAccueil",
        markers: false,
        start: "top center",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    lt.from(".PageContactSectionAccueil .img", {
      y: 100,
      duration: 1,
      opacity: 0,
    })
      .from(".PageContactSectionAccueil .el1", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil .el2", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil .el3", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil .el4", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil .el5", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      })
      .from(".PageContactSectionAccueil .form", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        y: 100,
      });
  }, []);

  return (
    <PageContactSectionAccueilStc className="PageContactSectionAccueil">
      <Row className="pl-0 pl-md-5 ml-0 ml-md-5">
        <Col lg={7} className="align-self-center ">
          <h1 className="background-overlay">Dubani agency</h1>
          <div
            className="px-2 px-md-5 mx-0 mx-md-5 px-0 px-md-5"
            style={{ position: "relative", zIndex: 1 }}
          >
            <img
              src="/img/logo.svg"
              alt="Logo de dubani agency"
              className="img"
              height="100"
            />
            <Title niveau={1} className="el1">
              +212 7 07 18 77 36
            </Title>
            <Texte className="h5 py-2 py-md-3 el2">
              31 allee des pruniers, Casablanca
            </Texte>
            <Texte className="h5 py-2 py-md-3 el3">info@dubaniagency.com</Texte>
            <Texte className="h5 py-2 py-md-3 el4">RESEAUX SOCIAUX</Texte>
            <Texte className="h5 py-2 py-md-3 el5">
              <span className="icon">
                <FaFacebookSquare />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="icon">
                <FaLinkedin />
              </span>
            </Texte>
          </div>
        </Col>
        <Col lg={5} className="right align-self-center py-md-5 py-2 form">
          <form className="pt-2 pt-md-5 mt-0 mt-md-5 px-0 px-md-4">
            <div className="form-group py-md-2 py-2">
              <input
                placeholder="Nom *"
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
                placeholder="Adresse E-mail *"
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
                placeholder="Phone *"
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
              <select
                className="form-control"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
              >
                <option className="">Quel service soliciter *</option>
              </select>
            </div>

            <div className="form-group py-md-2 py-2">
              <textarea
                placeholder="Description du projet *"
                rows="2"
                className="form-control"
                style={{
                  background: "transparent",
                  border: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #fff",
                }}
              ></textarea>
            </div>
            <div className="form-group py-md-2 py-2">
              <Bouton className="btn">
                DEMANDEZ UNE CONSULTATION AUJOURD'HUI
              </Bouton>
            </div>
          </form>
        </Col>
      </Row>
    </PageContactSectionAccueilStc>
  );
}

export default PageContactSectionAccueil;
