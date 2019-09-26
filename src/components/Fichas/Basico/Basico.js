import React from "react";
import { Input, Select, TextArea, Grid } from "semantic-ui-react";
import "./Basico.scss";
import data from "../../../util/jsons/divindades.json";
import { Store } from '../../../Store';
import { atualizarBasico } from './Actions';

const { divindades } = data;
const Basico = props => {
  const { state, dispatch } = React.useContext(Store);
    return (
      <div className="basico-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width="10">
              <div id="input-nome">
                <Input name="nome" label="Nome" onChange={(evt)=>atualizarBasico(evt.target.value, state, dispatch, evt.target.name)} fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="3">
              <div id="input-sexo">
                <Input label="Sexo" name = "sexo"
                onChange = {
                  (evt) => atualizarBasico(evt.target.value, state, dispatch, evt.target.name)
                }
                fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="3">
              <div id="input-idade">
                <Input label="Idade" name = "idade"
                onChange = {
                  (evt) => atualizarBasico(evt.target.value, state, dispatch, evt.target.name)
                }
                fluid />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="8">
              <div id="input-divindade">
                <div className="ui fluid labeled input">
                  <div className="ui label label">Divindade</div>
                  <Select name="divindade"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, "divindade")
                  }
                  fluid options = {
                    divindades
                  }
                  />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width="8">
              <div id="input-origem">
                <div className="ui fluid labeled input">
                  <div className="ui label label">Origem</div>
                  <Select name="origem"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, "origem")
                  }
                  fluid options = {
                    divindades
                  }
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          {/* Caso a opção seja # trocar para display true */}
          <Grid.Row style={{display:"none"}}>
            <Grid.Column width="16">
              <div id="input-origem-personalizada">
                <label>Origem Personalizada</label>
                <div className="ui form">
                  <TextArea name="origem-personalizada"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, evt.target.name)
                  } 
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          {/* ----------- */}
          <Grid.Row>
            <Grid.Column width="16">
              <div id="input-personalidade">
                <label>Personalidade</label>
                <div className="ui form">
                  <TextArea name="personalidade"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, evt.target.name)
                  } 
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              <div id="input-aparencia">
                <label>Aparência</label>
                <div className="ui form">
                  <TextArea name="aparencia"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, evt.target.name)
                  } 
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              <div id="input-historia">
                <label>História</label>
                <div className="ui form">
                  <TextArea name="historia"
                  onChange = {
                    (evt, {value}) => atualizarBasico(value, state, dispatch, evt.target.name)
                  } 
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}

export default Basico;
