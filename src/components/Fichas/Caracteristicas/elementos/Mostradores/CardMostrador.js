import React from "react";
import { Card, Divider } from 'semantic-ui-react';
import "./CardMostrador.scss";
const CardMostrador = props => {
  return(
    <Card className="card-mostrador">
        <Card.Content>
        <span style={{fontSize:"22px"}}>{props.valor}</span>
        <Divider />
        {props.texto}
        </Card.Content>
    </Card>   
  )
}

export default CardMostrador;