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
        {console.log(state)}
        <Grid>
          <Grid.Row>
            <Grid.Column width="7">
              <div id="input-nome">
                <label>Nome</label>                
                <Input name="nome" onChange={(evt)=>atualizarBasico(evt.target.value, state, dispatch, evt.target.name)} fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="3">
              <div id="input-sexo">
                <label>Sexo</label>
                <Input name = "sexo"
                onChange = {
                  (evt) => atualizarBasico(evt.target.value, state, dispatch, evt.target.name)
                }
                fluid / >
              </div>
            </Grid.Column>
            <Grid.Column width="2">
              <div id="input-idade">
                <label>Idade</label>
                <Input name = "idade"
                onChange = {
                  (evt) => atualizarBasico(evt.target.value, state, dispatch, evt.target.name)
                }
                fluid / >
              </div>
            </Grid.Column>
            <Grid.Column width="4">
              <div id="input-divindade">
                <label>Divindade</label>
                <Select name = "divindade"
                onChange = {
                  (evt, {value}) => atualizarBasico(value, state, dispatch, "divindade")
                }
                fluid options = {
                  divindades
                }
                />
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
