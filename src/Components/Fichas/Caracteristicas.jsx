import React, { Component } from "react";
import { Tab, CardGroup, Divider, Dropdown } from "semantic-ui-react";
import CardAtributos from "./CardAtributos";

const atributos = [
    {
        key: "8",
        text: "8",
        value: "8",
    },
    {
        key: "10",
        text: "10",
        value: "10",
    },
];

class Caracteristicas extends Component {
    state = {};
    render() {
        return (
            <Tab.Pane>
                <CardGroup>
                    <CardAtributos valor="-" nomeAtributo="FOR" />
                    <CardAtributos valor="-" nomeAtributo="DES" />
                    <CardAtributos valor="-" nomeAtributo="CON" />
                    <CardAtributos valor="-" nomeAtributo="INT" />
                    <CardAtributos valor="-" nomeAtributo="SAB" />
                    <CardAtributos valor="-" nomeAtributo="CAR" />
                </CardGroup>
                <Divider style={{ paddingTop: "10px" }} />
                <Dropdown
                    text="FOR"
                    labeled
                    icon="world"
                    selection
                    options={atributos}
                />
            </Tab.Pane>
        );
    }
}

export default Caracteristicas;
