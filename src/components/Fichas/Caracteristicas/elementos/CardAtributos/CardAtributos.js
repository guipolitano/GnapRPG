import React from "react";
import { Card, Divider } from "semantic-ui-react";
import "./CardAtributos.scss";

const CardAtributos = props => {
  let operador, cor;
  if (props.modificador > 0) {
    operador = "+";
    cor = "#4dd822";
  } else if (props.modificador < 0) {
    operador = "";
    cor = "#b91717";
  } else {
    operador = "";
    cor = "#ffec5c";
  }
  return (
    <Card className="card-atributos">
      <Card.Content>
        <span className={`valores valor-${props.nomeAtributo}`}>
          {props.valor}
          <sup
            id={`mod-${props.nomeAtributo}`}
            style={{ fontSize: "18px", color: cor }}
          >
            {operador+""+props.modificador}
          </sup>
        </span>
        <Divider />
        {props.nomeAtributo.toUpperCase()}
      </Card.Content>
    </Card>
  );
};

export default CardAtributos;
