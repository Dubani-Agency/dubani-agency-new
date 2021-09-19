import React from 'react'
import PageAccueilSectionEquipeStc from './PageAccueilSectionEquipe.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap'
import Title from '../../shared/Title'
import Texte from '../../shared/Texte'


function PageAccueilSectionEquipe() {
    return (
        <PageAccueilSectionEquipeStc>
             <Container>
                <Row className="py-0 py-md-5">
                    <Col lg={6} className="right">
                    </Col>
                    <Col lg={6}>
                        <Title niveau={1}>
                            Notre Equipe
                        </Title>
                    </Col>
                </Row>
                <Row className="py-0 py-md-5">
                    <Col lg={4} className="right">
                        <div style={{margin:"auto",display:"block",width:"100%",borderRadius:"100%",overflow:"hidden"}}>
                            <img src="/img/PageAccueilSectionEquipe/avatar.jpg" width="100%" />
                        </div>
                    </Col>
                    <Col lg={8} className="align-self-center">
                        <Title niveau={1}>
                            Notre Equipe
                        </Title>
                        <Title niveau={5}>
                            Developpeur fullstack
                        </Title>
                        <Texte className="h5 my-2 my-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Texte>
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionEquipeStc>

    )
}

export default PageAccueilSectionEquipe
