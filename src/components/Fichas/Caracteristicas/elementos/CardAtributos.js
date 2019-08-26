import React from "react";
import { Card, Divider } from "semantic-ui-react";
import "./CardAtributos.scss";

const CardAtributos = props => {
  return (
    <Card className="card-atributos">
      <Card.Content>
        <span className={`valores valor-${props.nomeAtributo}`}>
          {props.valor}
          <sup
            id={`mod-${props.nomeAtributo}`}
            style={{ fontSize: "18px", color: props.cor }}
          >
            {props.modificador}
          </sup>
        </span>
        <Divider />
        {props.nomeAtributo.toUpperCase()}
      </Card.Content>
    </Card>
  );
};

export default CardAtributos;
