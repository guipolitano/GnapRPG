import React, { Component } from "react";
import {
  Tab,
  CardGroup,
  Divider,
  Dropdown,
  Popup,
  Grid,
  Loader,
  Button
} from "semantic-ui-react";
import CardAtributos from "./CardAtributos";
import CardMostrador from "./CardMostrador";
import axios from "axios";

// TODO: REFATORAR PARA REMOVER STATE BONUS
// TODO: REMOVER TEXT DO JSON CARACTERISTICAS
// TODO: REFATORAR PARA MELHORAR O SET DE MODIFICADOR
// TODO: REMOVER OPÇÕES SE A SOMA PASSAR DO LV 20

// FIXME: CORRIGIR DESCRICAO DE DEFORMIDADE LEFOU E QAREEN

/*
TODO: Raças que alteram perícia: 
-Humano: 2 talentos adicionais a escolha do jogador
-Lefou: 2 talentos de tormenta
-Meio-Orc: Duro de matar

*/
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

function bonusBase(base) {
  let valor = 0;
  if (base === "8") {
    valor = -1;
  }
  if (base === "10") {
    valor = 0;
  }
  if (base === "12" || base === "13") {
    valor = 1;
  }
  if (base === "15") {
    valor = 2;
  }
  if (base === "17") {
    valor = 3;
  }
  return valor;
}

function getOperadorCor(soma){
  let operadorCor = [];
  if (soma > 0) {
    operadorCor[0] = "+";
    operadorCor[1] = "#4dd822";
  } else if (soma < 0) {
    operadorCor[0] = "";
    operadorCor[1] = "#b91717";
  } else {
    operadorCor[0] = "";
    operadorCor[1] = "#ffec5c";
  }
  return operadorCor;
}

let leveis = [
  {
    key: 1,
    text: 1,
    value: 1,
  },
  {
    key: 2,
    text: 2,
    value: 2,
  },
  {
    key: 3,
    text: 3,
    value: 3,
  },
  {
    key: 4,
    text: 4,
    value: 4,
  },
  {
    key: 5,
    text: 5,
    value: 5,
  },
  {
    key: 6,
    text: 6,
    value: 6,
  },
  {
    key: 7,
    text: 7,
    value: 7,
  },
  {
    key: 8,
    text: 8,
    value: 8,
  },
  {
    key: 9,
    text: 9,
    value: 9,
  },
  {
    key: 10,
    text: 10,
    value: 10,
  },
  {
    key: 11,
    text: 11,
    value: 11,
  },
  {
    key: 12,
    text: 12,
    value: 12,
  },
  {
    key: 13,
    text: 13,
    value: 13,
  },
  {
    key: 14,
    text: 14,
    value: 14,
  },
  {
    key: 15,
    text: 15,
    value: 15,
  },
  {
    key: 16,
    text: 16,
    value: 16,
  },
  {
    key: 17,
    text: 17,
    value: 17,
  },
  {
    key: 18,
    text: 18,
    value: 18,
  },
  {
    key: 19,
    text: 19,
    value: 19,
  },
  {
    key: 20,
    text: 20,
    value: 20,
  },
  ]

class Caracteristicas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level:1,
      pv:0,
      ca:10,
      pericias:0,
      classeSelecionada:0,
      inputsRacasCarregado: false,
      inputsClassesCarregado: false,
      atributes: {
        for: "-",
        des: "-",
        con: "-",
        int: "-",
        sab: "-",
        car: "-"
      },
      bonus: {
        for: 0,
        des: 0,
        con: 0,
        int: 0,
        sab: 0,
        car: 0
      },
      modificador: {
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
      bonusAtivo:{
        1:{
          opcaoSelecionada:0,
          atributo:''
        },
        2:{
          opcaoSelecionada:0,
          atributo:''
        }
      },
      racas: [
        {
          selecione: {
            opcoes: [{ key: "0", text: "Selecione", value: "0" }],
            escolhas: 0
          },
          caracteristicas: {
            text: "Selecione a Raça",
            descricao: "",
            deslocamento: "",
            habilidades: "",
            tratos: {}
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
      .get(`https://api.jsonbin.io/b/5cfbc9582132b7426dfd9d2b/15`)
      .then(res => {
        let racas = res.data;
        this.setState({ racas, inputsRacasCarregado: true });
      });
    axios
      .get(`https://api.jsonbin.io/b/5d1ced622c39867519def265/2`)
      .then(res => {
        let classes = res.data;
        this.setState({ classes, inputsClassesCarregado: true });
      });
  }

  atrChangeHandle = (e, { name, value }) => {
    let soma, operador, cor;
    let elSelect = atributos.find(x => x.value === value);
    let copyBonus = this.state.bonus;

    elSelect.disabled = !elSelect.disabled;
    if (this.state.atributes[name] !== "-") {
      let elAtual = atributos.find(x => x.value === this.state.atributes[name]);
      elAtual.disabled = !elAtual.disabled;
    }

    soma = copyBonus[name]+bonusBase(value);

    if (soma > 0) {
      operador = "+";
      cor = "#4dd822";
    } else if (soma < 0) {
      operador = "";
      cor = "#b91717";
    } else {
      operador = "";
      cor = "#ffec5c";
    }

    this.setState({
      ...this.state,
      atributes: { ...this.state.atributes, [name]: value },
      modificador: {
        ...this.state.modificador,
        [name]: { ...this.state.modificador[name], soma, operador, cor }
      }  
    }, () => {this.caHandle()})

  };

  racaChangeHandle = (e, { value }) => {
    let soma, operadorCor;
    let copyBonus = this.state.bonus;
    let copyModificador = this.state.modificador;
    
    Object.keys(this.state.racas[value].bonus).forEach(key => {
      if (this.state.bonus.hasOwnProperty(key)) {
        copyBonus[key] = this.state.racas[value].bonus[key];
      }
      soma = copyBonus[key] + bonusBase(this.state.atributes[key]);
      copyModificador[key].soma = soma;
      operadorCor = getOperadorCor(soma)

    copyModificador[key].operador = operadorCor[0];
    copyModificador[key].cor = operadorCor[1];
    });

    this.setState({
      atributes: { ...this.state.atributes },
      bonusAtivo:{...this.state.bonusAtivo, 1:{opcaoSelecionada:0, atributo:''}, 2:{opcaoSelecionada:0, atributo:''}},
      bonus: copyBonus,
      racaSelecionada: value,
      modificador: copyModificador
    }, () => {this.caHandle()})

    this.props.handleInformacoes(
      this.state.racas[value].caracteristicas.text,
      this.state.racas[value].caracteristicas.descricao,
      this.state.racas[value].caracteristicas.deslocamento,
      this.state.racas[value].caracteristicas.habilidades,
      this.state.racas[value].caracteristicas.tratos
    );
  };

  classeChangeHandle = (e, { name, value}) =>{
    this.setState({classeSelecionada: value}, () => {this.periciasHandle()});
  }

  caHandle(){
    let copyModificador = {...this.state.modificador};
    let copyRaca = {...this.state.racas};
    let copyRacaSelecionada = this.state.racaSelecionada;
    let CA = 10;
    CA += copyModificador.des.soma + copyRaca[copyRacaSelecionada].caracteristicas.CA;
    // TODO: Adicionar Bonus do LV
    CA = CA >=10 ? CA : 10;
    this.setState({ca: CA});
  }

  levelChangeHandle = (e, { value }) => {
    let LV = 0; //colocar this.state.classes se tiver setado, ou 0 caso classe nao escolhida
    LV += value;
    this.setState({level: LV});
  }

  pvHandle(){
    let copyModificador = {...this.state.modificador};
    let copyRaca = {...this.state.racas};
    let copyRacaSelecionada = this.state.racaSelecionada;
    let PV = 0; //colocar this.state.classes se tiver setado, ou 0 caso classe nao escolhida
    PV += copyModificador.con.soma + copyRaca[copyRacaSelecionada].caracteristicas.CA;
    this.setState({pv: PV});
  }

  periciasHandle(){
    let copyModificador = {...this.state.modificador};
    let pericias = copyModificador.int.soma;
    if(this.state.classeSelecionada !== 0){
      pericias += this.state.classes[this.state.classeSelecionada].caracteristicas.pericias_treinadas
    }
    // pericias += copyRaca[copyRacaSelecionada].caracteristicas.CA;
    this.setState({pericias});
  }

  bonusChangeHandle = (e, { name, value }) => {
    if(value !== '0'){
      let soma, operadorCor, elAtual, elSelect;
      let racas = {...this.state.racas};
      let bonusInput = name === 'bonus1' ? 1 : 2;
      let copyBonus = {...this.state.racas[this.state.racaSelecionada].bonus};
      let copyModificador = {...this.state.modificador};
      let novoValor = copyBonus[value]+2;
      elSelect = (racas[this.state.racaSelecionada].selecione.opcoes).find(x => x.value === value);
      elSelect.disabled = !elSelect.disabled;
      
      let keyOption = elSelect.key;

      if(this.state.bonusAtivo[bonusInput].atributo !== ''){
        elAtual = (racas[this.state.racaSelecionada].selecione.opcoes).find(x => x.value === this.state.bonusAtivo[bonusInput].atributo);
        elAtual.disabled = !elAtual.disabled;
      }
      
      soma = novoValor + bonusBase(this.state.atributes[value]);
      copyModificador[value].soma = soma;

      if(this.state.bonusAtivo[bonusInput].atributo){
        copyModificador[this.state.bonusAtivo[bonusInput].atributo].soma -=2;
      }
      operadorCor = getOperadorCor(soma)

      copyModificador[value].operador = operadorCor[0];
      copyModificador[value].cor = operadorCor[1];

      this.setState({
        ...this.state,
        bonusAtivo:{...this.state.bonusAtivo, [bonusInput]:{atributo: value, opcaoSelecionada: keyOption }},
        bonus:{...this.state.racas[this.state.racaSelecionada].bonus,[value]:novoValor},
        modificador: copyModificador
      }, () => {this.caHandle()});
    }
  };

  render() {
    if (this.state.inputsRacasCarregado && this.state.inputsClassesCarregado) {
      return (
        <Tab.Pane>
          <CardGroup>
            <CardAtributos
              valor={this.state.atributes.for}
              modificador={
                this.state.modificador.for.operador +
                this.state.modificador.for.soma
              }
              cor={this.state.modificador.for.cor}
              nomeAtributo="for"
            />
            <CardAtributos
              valor={this.state.atributes.des}
              modificador={
                this.state.modificador.des.operador +
                this.state.modificador.des.soma
              }
              cor={this.state.modificador.des.cor}
              nomeAtributo="des"
            />
            <CardAtributos
              valor={this.state.atributes.con}
              modificador={
                this.state.modificador.con.operador +
                this.state.modificador.con.soma
              }
              cor={this.state.modificador.con.cor}
              nomeAtributo="con"
            />
            <CardAtributos
              valor={this.state.atributes.int}
              modificador={
                this.state.modificador.int.operador +
                this.state.modificador.int.soma
              }
              cor={this.state.modificador.int.cor}
              nomeAtributo="int"
            />
            <CardAtributos
              valor={this.state.atributes.sab}
              modificador={
                this.state.modificador.sab.operador +
                this.state.modificador.sab.soma
              }
              cor={this.state.modificador.sab.cor}
              nomeAtributo="sab"
            />
            <CardAtributos
              valor={this.state.atributes.car}
              modificador={
                this.state.modificador.car.operador +
                this.state.modificador.car.soma
              }
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
          <Grid
            columns="equal"
            className="justify-content-center"
            divided
          >
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
                        this.state.racas[this.state.racaSelecionada]
                          .selecione.escolhas > 0
                          ? false
                          : true
                      }
                      className="icon icon-extras"
                      options={
                        this.state.racas[this.state.racaSelecionada]
                          .selecione.opcoes
                      }
                      floating
                      labeled
                      value={this.state.bonusAtivo[1].atributo}
                      name="bonus1"
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
                      name="bonus2"
                      disabled={
                        this.state.racas[this.state.racaSelecionada]
                          .selecione.escolhas > 1
                          ? false
                          : true
                      }
                      className="icon icon-extras"
                      options={
                        this.state.racas[this.state.racaSelecionada]
                          .selecione.opcoes
                      }
                      onChange={this.bonusChangeHandle}
                      floating
                      labeled
                      value={this.state.bonusAtivo[2].atributo}
                      icon="plus circle"
                      placeholder="Bonus 2"
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <div className="col-sm-12">
            <div className="row">
              <div
                className="col-sm-4 align-self-center"
                style={{ paddingRight: "0px", paddingLeft: "12px" }}
              >
                <Button
                  icon="plus"
                  disabled
                  content="Adicionar Classe"
                  style={{
                    backgroundColor: "rgb(188, 115, 8)",
                    color: "white"
                  }}
                />
              </div>
              <CardMostrador texto="Level" valor={this.state.level} />
              <CardMostrador
                texto="Pericias"
                valor={this.state.pericias}
              />
              <CardMostrador texto="PV" valor={this.state.pv} />
              <CardMostrador texto="CA" valor={this.state.ca} />
            </div>
          </div>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Grid
            columns="equal"
            className="justify-content-center"
            divided
          >
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
                      options={this.state.classes}
                      onChange={this.classeChangeHandle}
                      icon="book"
                      placeholder="Classes"
                      name="classe"
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Popup
                  content="Level"
                  trigger={
                    <Dropdown
                      button
                      options={leveis}
                      onChange={this.levelChangeHandle}
                      className="icon icon-extras"
                      floating
                      labeled
                      icon="sort numeric up"
                      placeholder="Level"
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
            <Loader active />
          </Grid>
        </Tab.Pane>
      );
    }
  }
}

export default Caracteristicas;
