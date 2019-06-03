import React, { Component } from "react";
import { Responsive, Card, Tab } from "semantic-ui-react";
import './NovaFicha.css';
import Caracteristicas from "./Caracteristicas";
import Principal from "./Principal";
import Equipamentos from "./Equipamentos";


const itens = [
    { menuItem: "Principal",render: () => <Principal /> },
    { menuItem: "Caracteristicas", render: () => <Caracteristicas /> },
    { menuItem: "Equipamentos", render: () => <Equipamentos/> }
];
class NovaFicha extends Component {
    state = {};

    render() {
        return (
            <Responsive
                className="card-ficha"
                as={Card}
                fluid
            >
                <Tab className="tabs-ficha" panes={itens} />
            </Responsive>
        );
    }
}

export default NovaFicha;
