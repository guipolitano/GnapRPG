import React, { Component } from "react";
import { Responsive, Card, Tab } from "semantic-ui-react";
import "./NovaFicha.css";
import Caracteristicas from "./Caracteristicas";
import Principal from "./Principal";
import Equipamentos from "./Equipamentos";
import Magias from "./Magias";
import Talentos from "./Talentos";
import Informacoes from "./Informacoes";

class NovaFicha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principal:{
        nome: "",
        sexo: "",
        idade: "",
        tendencia: "",
        deus:"",
        aparencia: "",
        personalidade: "",
        historia: ""
      },
      atributes:{
        for: "",
        des: "",
        con: "",
        int: "",
        sab: "",
        car: ""
      },
      bonus:{
        for: "",
        des: "",
        con: "",
        int: "",
        sab: "",
        car: ""
      },
      raca: {
        nome: "Selecione a Raça",
        info: {}
      }
    };

    this.handleInformacoes = this.handleInformacoes.bind(this);
    this.handlePrincipal = this.handlePrincipal.bind(this);
  }

  handleInformacoes(nome, info) {
    this.setState({
      raca: {
        nome,
        info
      }
    });
  }
  
  handlePrincipal(atributo, valor){
    this.setState({
      principal:{
        ...this.state.principal,
        [atributo]: valor
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-7">
          <Responsive className="card-ficha" as={Card} fluid>
            <Tab
              className="tabs-ficha"
              panes={[
                { menuItem: "Principal", render: () => <Principal estado={this.state.principal} handlePrincipal={this.handlePrincipal} /> },
                {
                  menuItem: "Caracteristicas",
                  render: () => (
                    <Caracteristicas
                      handleInformacoes={this.handleInformacoes}
                    />
                  )
                },
                { menuItem: "Magias", render: () => <Magias /> },
                { menuItem: "Equipamentos", render: () => <Equipamentos /> },
                { menuItem: "Talentos", render: () => <Talentos /> }
              ]}
            />
          </Responsive>
        </div>
        <div className="col-sm-6" style={{ marginLeft: "-46px" }}>
          <Responsive className="card-ficha" as={Card} fluid>
            <Informacoes nomeRaca={this.state.raca.nome} infoRaca={this.state.raca.info} />
          </Responsive>
        </div>
      </React.Fragment>
    );
  }
}

export default NovaFicha;
