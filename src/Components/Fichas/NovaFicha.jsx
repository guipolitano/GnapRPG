import React, { Component } from "react";
import { Responsive, Card, Tab } from "semantic-ui-react";
import "./NovaFicha.css";
import Caracteristicas from "./Caracteristicas";
import Principal from "./Principal";
import Equipamentos from "./Equipamentos";
import Magias from "./Magias";
import Talentos from "./Talentos";
import Informacoes from "./Informacoes";

const itens = [
  { menuItem: "Principal", render: () => <Principal /> },
  { menuItem: "Caracteristicas", render: () => <Caracteristicas /> },
  { menuItem: "Magias", render: () => <Magias /> },
  { menuItem: "Equipamentos", render: () => <Equipamentos /> },
  { menuItem: "Talentos", render: () => <Talentos /> }
];
class NovaFicha extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-7">
          <Responsive className="card-ficha" as={Card} fluid>
            <Tab className="tabs-ficha" panes={itens} />
          </Responsive>
        </div>
        <div className="col-sm-5" style={{marginLeft: "-46px"}}>
          <Responsive className="card-ficha" as={Card} fluid>
            <Informacoes/>
          </Responsive>
        </div>
      </React.Fragment>
    );
  }
}

export default NovaFicha;
