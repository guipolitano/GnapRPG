import React, { Component } from "react";
import { Card, Grid, Divider, Button} from "semantic-ui-react";
import "./Caracteristicas.scss";

import { Store } from '../../../Store';
import { atualizarCaracteristicas } from './Actions';

import CardAtributos from "./elementos/CardAtributos/CardAtributos";
import DropdownAtributos from "./elementos/DropdownAtributos/DropdownAtributos";
import DropdownBonus from "./elementos/Racas/DropdownBonus";
import DropdownRacas from "./elementos/Racas/DropdownRacas";
import CardMostrador from "./elementos/Mostradores/CardMostrador";
import DropdownClasses from "./elementos/Classes/DropdownClasses";
import DropdownPericias from "./elementos/Classes/DropdownPericias";
import DropdownLeveis from "./elementos/Classes/DropdownLeveis";

const Caracteristicas = props => {
    const { state, dispatch } = React.useContext(Store);
    return (
      <Grid>
        <div className="caracteristicas-container">
          <Grid.Row>
            <Card.Group>
              <CardAtributos nomeAtributo="FOR" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="DES" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="CON" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="INT" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="SAB" valor="17" cor="red" modificador="+4"/>
              <CardAtributos nomeAtributo="CAR" valor="17" cor="red" modificador="+4"/>
            </Card.Group>
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
          <Divider/>
          <Grid.Row>
            <DropdownRacas change={
                    (evt, {value}) => atualizarCaracteristicas(value, state, dispatch, "raca")
                  }/>
            <DropdownBonus name="bonus1" content="Bonus 1"/>
            <DropdownBonus name="bonus2" content="Bonus 2"/>
            <DropdownBonus name="bonus3" content="Bonus 3"/>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Grid.Column>
              <Button
              icon= "plus"
              disabled
              content = "Adicionar Classe"
              style = {{ backgroundColor: "rgb(188, 115, 8)", color: "white" }}
              />
            </Grid.Column>
            <Grid.Column>
              <CardMostrador texto="Level" valor="1"/>
            </Grid.Column>
            <Grid.Column>
              <CardMostrador texto="CA" valor="2" />
            </Grid.Column>          
            <Grid.Column>
              <CardMostrador texto="PV" valor="2" />
            </Grid.Column>
            <Grid.Column>
              <CardMostrador texto="PM" valor="2" />
            </Grid.Column>
            <Grid.Column>
              <CardMostrador texto="Pericias" valor="2"/>
            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <DropdownClasses/>
            <DropdownLeveis/>
            <DropdownPericias/>
          </Grid.Row>
        </div>
      </Grid>
    );
}

export default Caracteristicas;
