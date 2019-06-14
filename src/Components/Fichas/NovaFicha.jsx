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
      principal: {
        nome: "",
        sexo: "",
        idade: "",
        tendencia: "",
        deus: "",
        aparencia: "",
        personalidade: "",
        historia: ""
      },
      atributes: {
        for: "",
        des: "",
        con: "",
        int: "",
        sab: "",
        car: ""
      },
      bonus: {
        for: "",
        des: "",
        con: "",
        int: "",
        sab: "",
        car: ""
      },
      caracteristicas:{
        atributos:{
          base:{

          },
          bonus:{

          }
        },
        raca:{
          nome: "Selecione a Raça",
          descricao: "",
          deslocamento: "",
          habilidades: "",
          tratos: {},
        }
      }
    };

    this.handleInformacoes = this.handleInformacoes.bind(this);
    this.handlePrincipal = this.handlePrincipal.bind(this);
  }

  handleInformacoes(nome, descricao, deslocamento, habilidades, tratos) {
    this.setState({
      caracteristicas: {
        ...this.state.caracteristicas,
        raca:{nome, descricao, deslocamento, habilidades, tratos}
      }
    });
  }

  handleCaracteristicas(atributo, valor) {
    this.setState({
      caracteristicas: {
        ...this.state.caracteristicas,
        [atributo]: valor
      }
    });
  }

  handlePrincipal(atributo, valor) {
    this.setState({
      principal: {
        ...this.state.principal,
        [atributo]: valor
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-7">
          <Responsive className="card-ficha" as={Card} fluid>
            <Tab
              className="tabs-ficha"
              panes={[
                {
                  menuItem: "Principal",
                  render: () => (
                    <Principal
                      estado={this.state.principal}
                      handlePrincipal={this.handlePrincipal}
                    />
                  )
                },
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
            <Informacoes
              infoRaca={this.state.caracteristicas.raca}
            />
          </Responsive>
        </div>
      </React.Fragment>
    );
  }
}

export default NovaFicha;
