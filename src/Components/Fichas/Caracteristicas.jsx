import React, { Component } from "react";
import {
  Tab,
  CardGroup,
  Divider,
  Dropdown,
  Popup,
  Grid,
  Loader,
  Card
} from "semantic-ui-react";
import CardAtributos from "./CardAtributos";
import axios from "axios";

// TODO Alterar Bonus no State também
let atributos = [
  {
    key: "",
    text: "--",
    value: "-",
    disabled: false
  },
  {
    key: "8",
    text: "8",
    value: "8",
    disabled: false
  },
  {
    key: "10",
    text: "10",
    value: "10",
    disabled: false
  },
  {
    key: "12",
    text: "12",
    value: "12",
    disabled: false
  },
  {
    key: "13",
    text: "13",
    value: "13",
    disabled: false
  },
  {
    key: "15",
    text: "15",
    value: "15",
    disabled: false
  },
  {
    key: "17",
    text: "17",
    value: "17",
    disabled: false
  }
];

function bonusBase(base){
  let valor = 0;
  if(base === "8"){valor = -1};
  if(base === "10"){valor = 0};
  if(base === "12" || base === "13"){valor = 1};
  if(base === "15"){valor = 2};
  if(base === "17"){valor = 3};
  return valor;
}
class Caracteristicas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsCarregados: false,
      atributes: {
        for: "-",
        des: "-",
        con: "-",
        int: "-",
        sab: "-",
        car: "-"
      },
      bonus: {
        for: "",
        des: "",
        con: "",
        int: "",
        sab: "",
        car: ""
      },
      modificador:{
        for: {
          soma: 0,
          cor: "",
          operador: ""
        },
        des: {
          soma: 0,
          cor: "",
          operador: ""
        },
        con: {
          soma: 0,
          cor: "",
          operador: ""
        },
        int: {
          soma: 0,
          cor: "",
          operador: ""
        },
        sab: {
          soma: 0,
          cor: "",
          operador: ""
        },
        car: {
          soma: 0,
          cor: "",
          operador: ""
        }
      },
      racaSelecionada: 0,
      racas: [
        {
          selecione: {
            opcoes: [{ key: "0", text: "Selecione", value: "0" }],
            escolhas: 0
          },
          caracteristicas: {
            text: "Selecione a Raça"
          },
          key: "",
          text: "Selecione",
          value: "0",
          bonus: {
            for: 0,
            des: 0,
            con: 0,
            int: 0,
            sab: 0,
            car: 0
          }
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.jsonbin.io/b/5cfbc9582132b7426dfd9d2b/7`)
      .then(res => {
        let racas = res.data;
        this.setState({ racas, inputsCarregados: true });
      });
  }

  atrChangeHandle = (e, { name, value }) => {
    let soma, operador, cor;
    let elSelect = atributos.find(x => x.value === value);
    elSelect.disabled = !elSelect.disabled;
    if (this.state.atributes[name] !== "-") {
      let elAtual = atributos.find(x => x.value === this.state.atributes[name]);
      elAtual.disabled = !elAtual.disabled;
    }
    soma = this.state.racas[this.state.racaSelecionada].bonus[name]+bonusBase(value);
    if(soma>0){
      operador='+';
      cor = "#4dd822";
    }else if(soma<0){
      operador='';
      cor = "#b91717";
    } else{
      operador='';
      cor = "#ffec5c";
    }
    this.setState({
      atributes: { ...this.state.atributes, [name]: value },
      modificador: {...this.state.modificador, [name]:{...this.state.modificador[name], soma, operador, cor}}
    });     
    
  };

  racaChangeHandle = (e, { value }) => {
    let soma, operador, cor;
    let copyBonus = this.state.bonus;
    let copyModificador = this.state.modificador;
    Object.keys(this.state.racas[value].bonus).forEach(key => {
      if (this.state.bonus.hasOwnProperty(key)) {
        copyBonus[key] = this.state.racas[value].bonus[key];
      }
      soma = copyBonus[key]+bonusBase(this.state.atributes[key]);
      copyModificador[key].soma = soma;
        if(soma>0){
          operador='+';
          cor = "#4dd822";
        }else if(soma<0){
          operador='';
          cor = "#b91717";
        } else{
          operador='';
          cor = "#ffec5c";
        }
        copyModificador[key].operador = operador;
        copyModificador[key].cor = cor;
    });

    this.setState({
      atributes: { ...this.state.atributes },
      bonus: copyBonus,
      racaSelecionada: value,
      modificador: copyModificador
    });
    this.props.handleInformacoes(
      this.state.racas[value].caracteristicas.text,
      this.state.racas[value].caracteristicas.tratos
    );
  };

  bonusChangeHandle = (e, { value }) => {
    this.setState({
      atributes: { ...this.state.atributes },
      bonus: { ...this.state.bonus, [value]: 2 }
    });
  };

  render() {
    if (this.state.inputsCarregados) {
      return (
        <Tab.Pane>
          <CardGroup>
            <CardAtributos
              valor={this.state.atributes.for}
              modificador={this.state.modificador.for.operador+this.state.modificador.for.soma}
              cor={this.state.modificador.for.cor}
              nomeAtributo="for"
            />
            <CardAtributos
              valor={this.state.atributes.des}
              modificador={this.state.modificador.des.operador+this.state.modificador.des.soma}
              cor={this.state.modificador.des.cor}
              nomeAtributo="des"
            />
            <CardAtributos
              valor={this.state.atributes.con}
              modificador={this.state.modificador.con.operador+this.state.modificador.con.soma}
              cor={this.state.modificador.con.cor}
              nomeAtributo="con"
            />
            <CardAtributos
              valor={this.state.atributes.int}
              modificador={this.state.modificador.int.operador+this.state.modificador.int.soma}
              cor={this.state.modificador.int.cor}
              nomeAtributo="int"
            />
            <CardAtributos
              valor={this.state.atributes.sab}
              modificador={this.state.modificador.sab.operador+this.state.modificador.sab.soma}
              cor={this.state.modificador.sab.cor}
              nomeAtributo="sab"
            />
            <CardAtributos
              valor={this.state.atributes.car}
              modificador={this.state.modificador.car.operador+this.state.modificador.car.soma}
              cor={this.state.modificador.car.cor}
              nomeAtributo="car"
            />
          </CardGroup>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />

          <Popup
            content="Força"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="hand rock"
                options={atributos}
                placeholder="FOR"
                name="for"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Popup
            content="Destreza"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="crosshairs"
                options={atributos}
                placeholder="DES"
                name="des"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Popup
            content="Constituição"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="heartbeat"
                options={atributos}
                placeholder="CON"
                name="con"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Popup
            content="Inteligência"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="graduation cap"
                options={atributos}
                placeholder="INT"
                name="int"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Popup
            content="Sabedoria"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="lightbulb"
                options={atributos}
                placeholder="SAB"
                name="sab"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Popup
            content="Carisma"
            trigger={
              <Dropdown
                button
                className="icon icon-atr"
                floating
                labeled
                icon="smile"
                options={atributos}
                placeholder="CAR"
                name="car"
                onChange={this.atrChangeHandle}
              />
            }
          />
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Grid columns="equal" className="justify-content-center" divided>
            <Grid.Row className="text-center justify-content-center">
              <Grid.Column
                style={{
                  textAlign: "-webkit-auto",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
              >
                <Popup
                  content="Raças"
                  trigger={
                    <Dropdown
                      button
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="user circle"
                      options={this.state.racas}
                      placeholder="Raças"
                      onChange={this.racaChangeHandle}
                      name="raca"
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Popup
                  content="Bonus 1"
                  trigger={
                    <Dropdown
                      button
                      disabled={
                        this.state.racas[this.state.racaSelecionada].selecione
                          .escolhas > 0
                          ? false
                          : true
                      }
                      className="icon icon-extras"
                      options={
                        this.state.racas[this.state.racaSelecionada].selecione
                          .opcoes
                      }
                      floating
                      labeled
                      onChange={this.bonusChangeHandle}
                      icon="plus circle"
                      placeholder="Bonus 1"
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Popup
                  content="Bonus 2"
                  trigger={
                    <Dropdown
                      button
                      disabled={
                        this.state.racas[this.state.racaSelecionada].selecione
                          .escolhas > 1
                          ? false
                          : true
                      }
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="plus circle"
                      placeholder="Bonus 2"
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Grid columns="equal" className="justify-content-center" divided>
            <Grid.Row className="text-center justify-content-center">
              <Grid.Column
                style={{
                  textAlign: "-webkit-auto",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
              >
                <Popup
                  content="Classes"
                  trigger={
                    <Dropdown
                      button
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="book"
                      placeholder="Classes"
                      name="classe"
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Popup
                  content="Perícias"
                  trigger={
                    <Dropdown
                      button
                      disabled
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="sign language"
                      placeholder="Perícias"
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Popup
                  content="Perícias 2"
                  trigger={
                    <Dropdown
                      button
                      disabled
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="sign language"
                      placeholder="Perícias 2"
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      );
    } else {
      return (
        <Tab.Pane> 
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Grid columns="equal" className="justify-content-center" divided>
            <Loader active/>              
          </Grid>
        </Tab.Pane>
      );
    }
  }
}

export default Caracteristicas;
