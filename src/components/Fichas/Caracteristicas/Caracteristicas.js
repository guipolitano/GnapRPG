import React, { Component } from "react";
import { CardGroup } from "semantic-ui-react";
import CardAtributos from "./elementos/CardAtributos";

class Caracteristicas extends Component {
  state = {};
  render() {
    return (
      <div className="caracteristicas-container">
        <CardGroup>
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
          <CardAtributos
            nomeAtributo="FOR"
            valor="17"
            cor="red"
            modificador="+4"
          />
        </CardGroup>
      </div>
    );
  }
}

export default Caracteristicas;
