import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from 'next/link';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Bouton from "../../shared/Bouton";
import Title from "../../shared/Title";
import {BsArrowRight} from 'react-icons/bs'
const items = [
  {
    src: "/img/sectionprojet.png",
    titre:"Jours 1",
    altText: "Prise de contact",
    caption: <>
      Une interview de 30 min va être ménée pour mieux évaluer les besoins de votre entreprise et vos objectif 
      quand a votre présence en ligne
    </>,
    bouton:<BsArrowRight />
  },
  {
    src: "/img/sectionprojet.png",
    titre:"Jours 2",
    altText: "Prise de contact",
    caption: <>
      Une interview de 30 min va être ménée pour mieux évaluer les besoins de votre entreprise et vos objectif 
      quand a votre présence en ligne
    </>,
    bouton:<BsArrowRight />
  },
  {
    src: "/img/sectionprojet.png",
    titre:"Jours 3",
    altText: "Prise de contact",
    caption: <>
      Une interview de 30 min va être ménée pour mieux évaluer les besoins de votre entreprise et vos objectif 
      quand a votre présence en ligne
    </>,
    bouton:<BsArrowRight />
  },
  {
    src: "/img/sectionprojet.png",
    titre:"Jours 4",
    altText: "Prise de contact",
    caption: <>
      Une interview de 30 min va être ménée pour mieux évaluer les besoins de votre entreprise et vos objectif 
      quand a votre présence en ligne
    </>,
    bouton:<BsArrowRight />
  },
  {
    src: "/img/sectionprojet.png",
    titre:"Jours 6",
    altText: "Prise de contact",
    caption: <>
      Une interview de 30 min va être ménée pour mieux évaluer les besoins de votre entreprise et vos objectif 
      quand a votre présence en ligne
    </>,
    bouton:<BsArrowRight />
  },
];


const MyCaroussel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index+""+item.src}
        
      >
        <img src={item.src} alt={item.altText} className="d-none d-lg-block " />

        <Container className="containerHome ">
          <Row>
            <Col sm={6}>

            </Col>
            <Col sm={6} className="colAccueilLeft" style={{background:"#fff"}}>
              <Title niveau={1}>
                {item.titre}
              </Title>
              <p>
               {item.altText}
              </p>
              <p>
               {item.caption}
              </p>
                <a className="btn">
                    {item.bouton}
                </a>
              
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

const style={
  
}

export default MyCaroussel;
