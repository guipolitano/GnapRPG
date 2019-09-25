import React, { Component } from "react";
import { CardGroup, Grid, Dropdown, Popup } from "semantic-ui-react";
import CardAtributos from "./elementos/CardAtributos/CardAtributos";
import DropdownAtributos from "./elementos/DropdownAtributos/DropdownAtributos";

class Caracteristicas extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <div className="caracteristicas-container">
          <Grid.Row>
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
          </Grid.Row>
          <Grid.Row>
            <Popup
              content="Força"
              trigger={
                <DropdownAtributos/>
              }
            />
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}

export default Caracteristicas;
