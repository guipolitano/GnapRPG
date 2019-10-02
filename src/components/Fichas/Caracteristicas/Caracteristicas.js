import React from "react";
import { Card, Grid, Divider, Button} from "semantic-ui-react";
import "./Caracteristicas.scss";
import { Store } from '../../../Store';
import { atualizarCaracteristicas, atualizarAtributos } from './Actions';

import CardAtributos from "./elementos/CardAtributos/CardAtributos";
import DropdownAtributos from "./elementos/DropdownAtributos/DropdownAtributos";
import CardMostrador from "./elementos/Mostradores/CardMostrador";
import Pericias from "./elementos/Pericias/Pericias";
import { DropdownRacas, DropdownBonus } from "./elementos/Racas/DropdownRacas";
import { DropdownPericias, DropdownClasses, DropdownLeveis } from "./elementos/Classes/DropdownClasses";

const Caracteristicas = props => {
    const { state, dispatch } = React.useContext(Store);
    const { atributos, modificador } = state.ficha.caracteristicas;
    return (
      <Grid>
        <div className="caracteristicas-container">
          <Grid.Row>
            <Card.Group>
              <CardAtributos nomeAtributo="FOR" valor={atributos.for} modificador={modificador.for}/>
              <CardAtributos nomeAtributo="DES" valor={atributos.des} modificador={modificador.des}/>
              <CardAtributos nomeAtributo="CON" valor={atributos.con} modificador={modificador.con}/>
              <CardAtributos nomeAtributo="INT" valor={atributos.int} modificador={modificador.int}/>
              <CardAtributos nomeAtributo="SAB" valor={atributos.sab} modificador={modificador.sab}/>
              <CardAtributos nomeAtributo="CAR" valor={atributos.car} modificador={modificador.car}/>
            </Card.Group>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Força" icon="hand rock" placeholder="FOR" name="for"/>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Destreza" icon="crosshairs" placeholder="DES" name="des"/>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Constituição" icon="heartbeat" placeholder="CON" name="con"/>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Inteligência" icon="graduation cap" placeholder="INT" name="int"/>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Sabedoria" icon="lightbulb" placeholder="SAB" name="sab"/>
             <DropdownAtributos atributos={state.atributos} change={(e, { name, value })=>atualizarAtributos(value, state, dispatch, name)} textPopUp="Carisma" icon="smile" placeholder="CAR" name="car"/>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <DropdownRacas change={(evt, {value}) => atualizarCaracteristicas(value, state, dispatch, "raca")}/>
            <DropdownBonus name="bonus1" content="Bonus 1"/>
            <DropdownBonus name="bonus2" content="Bonus 2"/>
            <DropdownBonus name="bonus3" content="Bonus 3"/>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Grid.Column>
              <Button icon="plus" disabled content="Adicionar Classe" style={{ backgroundColor: "rgb(188, 115, 8)", color: "white" }}/>
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
          <Divider/>
          <Grid.Row style={{alignItems: "baseline"}}>
            <Pericias/>
          </Grid.Row>
        </div>
      </Grid>
    );
}

export default Caracteristicas;
