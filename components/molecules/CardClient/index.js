import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import Image from 'next/image';

import CardClientStc from './CardClient.stc'

function CardClient(props) {
    return (
        <CardClientStc>
            <Card className={props.className}>
               <div style={{height:"235px",position:"relative",width:"100%"}}>
                <Image src={props.image} alt={props.alt} layout="fill"/>
               </div>
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
