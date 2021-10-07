import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import CardClientStc from './CardClient.stc'

function CardClient(props) {
    return (
        <CardClientStc>
            <Card className={props.className}>
               <img src={props.image} alt={props.alt} style={{width:"100%"}}/>
                <CardBody>
                    <CardTitle className="" tag="h5">{props.title}</CardTitle>
                    <CardText className="my-2 my-md-3">{props.texte}</CardText>
                    {props.bouton}
                </CardBody>
            </Card>
        </CardClientStc>
    )
}

export default CardClient
