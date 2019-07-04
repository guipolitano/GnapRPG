import React, { Component } from "react";
import { Responsive, Card, Tab, Input, Button, Icon } from "semantic-ui-react";
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
      caracteristicas: {
        atributos: {
          base: {},
          bonus: {}
        },
        raca: {
          nome: "Selecione a Raça",
          descricao: "",
          deslocamento: "",
          habilidades: "",
          tratos: {}
        },
        classe: {
          nome: "Selecione a Classe",
          pv: {
            inicial: 0,
            bonus: 0
          },
          descricao: "",
          pericias_treinadas: 0,
          pericias_classe: {},
          talentos_adicionais: {},
          habilidades: {},
          magias:{}
        }
      }
    };

    this.handleInformacoes = this.handleInformacoes.bind(this);
    this.handlePrincipal = this.handlePrincipal.bind(this);
  }

  handleInformacoes(raca, classe) {
    this.setState({
      caracteristicas: {
        ...this.state.caracteristicas,
        raca: raca,
        classe: classe
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
        <div className="col-12">
          {/* <div className="row">
            <div className="col-sm-7">
              <Card className="card-ficha" fluid>
                <div className="row" style={{margin:"5px 1px"}}>
                  <div className="col-sm-8">
                    <Input
                      fluid
                      label="Carregar Ficha"
                      placeholder="Coloque o link de sua ficha"
                      name="sexo"
                    />
                  </div>
                  <div className="col-sm-4">
                    <Button.Group widths='2'>
                      <Button content='Upload'/>
                      <Button content='Preview'/>
                    </Button.Group>
                  </div>
                </div>
              </Card>
            </div>
          </div> */}
          <div className="row">
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
                    {
                      menuItem: "Equipamentos",
                      render: () => <Equipamentos />
                    },
                    { menuItem: "Talentos", render: () => <Talentos /> }
                  ]}
                />
              </Responsive>
            </div>
            <div className="col-sm-5" style={{ marginLeft: "-46px", minWidth:"45%" }}>
              <Responsive className="card-ficha" as={Card} fluid>
                <Informacoes infoRaca={this.state.caracteristicas.raca} infoClasse={this.state.caracteristicas.classe}/>
              </Responsive>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NovaFicha;
