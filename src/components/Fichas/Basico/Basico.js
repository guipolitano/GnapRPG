import React, { Component } from "react";
import { Input, Select, TextArea, Form, Grid } from "semantic-ui-react";
import "./Basico.scss";
import * as data from "../../../util/jsons/divindades.json";

const { divindades } = data;
class Basico extends Component {
  state = {};
  render() {
    return (
      <div className="basico-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width="7">
              <div id="input-nome">
                <label>Nome</label>
                <Input fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="3">
              <div id="input-sexo">
                <label>Sexo</label>
                <Input fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="2">
              <div id="input-idade">
                <label>Idade</label>
                <Input fluid />
              </div>
            </Grid.Column>
            <Grid.Column width="4">
              <div id="input-divindade">
                <label>Divindade</label>
                <Select fluid options={divindades} />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              <div id="input-aparencia">
                <label>Aparência</label>
                <Form>
                  <TextArea />
                </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              <div id="input-historia">
                <label>História</label>
                <Form>
                  <TextArea />
                </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Basico;
