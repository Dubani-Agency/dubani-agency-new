import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Bouton from "../../shared/Bouton";
import Texte from "../../shared/Texte";
import Title from "../../shared/Title";
import PageAccueilSectionAccueilStc from "./PageAccueilSectionAccueil.stc";
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
        delay: 0,
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
    <PageAccueilSectionAccueilStc className="PageAccueilSectionAccuel">
      <DubaniOverlay width="70%" />
      {/* <div className="cover1 d-none d-lg-block"></div> */}
      <Container>
        <Row className="" style={{ position: "relative", zIndex: "2" }}>
          <Col lg={6} className="my-5 pt-md-5 pt-0">
            <div
              className="pr-0 pr-md-5 mr-0 mr-md-5"
              style={{ position: "relative", zIndex: 1 }}
            >
              <Title className="pageTitle py-2 py-md-3">Dubani Agency</Title>
              <Title niveau={1} className="MyTitle mt-5">
                  <span style={{"color":"#2d519d"}}>Nous sommes</span> votre partenaire pour votre <span style={{"color":"#64c5ea"}}>voyage digital</span>
              </Title>
              <Texte className="PageText h5 py-2 py-md-3 ">
              Nous travaillons comme un pont entre vos clients et votre entreprise.
              </Texte>
              <Bouton className="btn" href="/contact">
                Embauchez nous
              </Bouton>
            </div>
          </Col>
          <Col
            lg={6}
            className="px-md-0 right d-none d-lg-block align-self-center"
          >
            <img
              src="/img/home-guy.jpg"
              style={{"marginTop":"-250px"}}
              height="100%"
              alt="banniere accueil de dubani agency"
            />
          </Col>
        </Row>
      </Container>
    </PageAccueilSectionAccueilStc>
  );
}

export default PageAccueilSectionAccueil;
