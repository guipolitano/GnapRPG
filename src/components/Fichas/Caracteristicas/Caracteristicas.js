import React, { Component } from "react";
import { CardGroup, Grid, Divider} from "semantic-ui-react";
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
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
            </CardGroup>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
             <DropdownAtributos textPopUp="Força" icon="hand rock" placeholder="FOR" name="for"/>
             <DropdownAtributos textPopUp="Destreza" icon="crosshairs" placeholder="DES" name="des"/>
             <DropdownAtributos textPopUp="Constituição" icon="heartbeat" placeholder="CON" name="con"/>
             <DropdownAtributos textPopUp="Inteligência" icon="graduation cap" placeholder="INT" name="int"/>
             <DropdownAtributos textPopUp="Sabedoria" icon="lightbulb" placeholder="SAB" name="sab"/>
             <DropdownAtributos textPopUp="Carisma" icon="smile" placeholder="CAR" name="car"/>
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}

export default Caracteristicas;
