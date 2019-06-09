import React, { Component } from "react";
import { Tab, Grid, Input, TextArea, Form, Label } from "semantic-ui-react";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: "",
      idade: "",
      tendencia: "",
      deus: "",
      aparencia: "",
      personalidade: "",
      historia: ""
    };
  }
  componentDidMount(props) {
    this.setState(this.props.estado);
  }

  inputChangeHandle = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
    this.props.handlePrincipal(name, value);
  };

  render() {
    return (
      <Tab.Pane>
        <Grid className="justify-content-center">
          <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <Grid.Column width={8}>
              <Input
                fluid
                value={this.state.nome}
                label="Nome"
                placeholder="Insira o Nome do Personagem"
                name="nome"
                onChange={this.inputChangeHandle}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Input
                fluid
                label="Sexo"
                value={this.state.sexo}
                placeholder="M/F/Outro"
                name="sexo"
                onChange={this.inputChangeHandle}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Input
                fluid
                label="Idade"
                value={this.state.idade}
                placeholder="25"
                maxLength="3"
                name="idade"
                onChange={this.inputChangeHandle}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "0px"
            }}
          >
            <Grid.Column width={8}>
              <Input
                fluid
                label="Deus"
                value={this.state.deus}
                placeholder="Escolha um Deus"
                name="deus"
                onChange={this.inputChangeHandle}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                fluid
                label="Tendência"
                value={this.state.tendencia}
                name="tendencia"
                onChange={this.inputChangeHandle}
                placeholder="Caótico"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "0px"
            }}
          >
            <Grid.Column>
              <Form>
                <Label attached="top">Aparência</Label>
                <TextArea
                  name="aparencia"
                  value={this.state.aparencia}
                  onChange={this.inputChangeHandle}
                  maxLength="255"
                  rows={2}
                  placeholder="Descreva sua aparência em até 255 caracteres"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "0px"
            }}
          >
            <Grid.Column>
              <Form>
                <Label attached="top">Personalidade</Label>
                <TextArea
                  name="personalidade"
                  value={this.state.personalidade}
                  onChange={this.inputChangeHandle}
                  maxLength="255"
                  rows={2}
                  placeholder="Descreva sua personalidade em até 255 caracteres"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "0px"
            }}
          >
            <Grid.Column>
              <Form>
                <Label attached="top">História</Label>
                <TextArea
                  name="historia"
                  value={this.state.historia}
                  onChange={this.inputChangeHandle}
                  maxLength="255"
                  rows={2}
                  placeholder="Conte sua história em até 255 caracteres"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    );
  }
}

export default Principal;
