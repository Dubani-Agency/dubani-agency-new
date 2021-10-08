import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import DubaniOverlay from '../../shared/DubaniOverlay';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import CardBlog from '../CardBlog';
import PageBlogSectionAccueilStc from "./PageBlogSectionAccueil.stc"

function PageBlogSectionAccueil() {
    return (
        <PageBlogSectionAccueilStc>
           <Container className="pt-2 pt-md-2 mt-0 mt-md-5">
            <Row className="pt-md-5 mt-md-5 pt-0 mt-0">
                    <Col lg={7} className="align-self-center ">
                        <DubaniOverlay width="100%" />
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="py-2 py-md-3">
                                Blog
                            </Title>
                            <Title niveau={1} className="">
                                Decouvrez tout nos secrets pour vous classer n°1 sur Google 
                            </Title>
                        </div>
                    </Col>
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                </Row>
                
           </Container>
        </PageBlogSectionAccueilStc>
    )
}

export default PageBlogSectionAccueil
