import React, { Component } from "react";
import {
    Tab,
    CardGroup,
    Divider,
    Dropdown,
    Popup,
    Grid
} from "semantic-ui-react";
import CardAtributos from "./CardAtributos";
import axios from "axios";

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

class Caracteristicas extends Component {
    state = {
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
        racas: []
    };

    componentDidMount() {
        axios
            .get(`https://api.jsonbin.io/b/5cf94d99e36bab4cf312c179`)
            .then(res => {
                let racas = res.data;
                this.setState({ racas });
            });
    }

    atrChangeHandle = (e, { name, value }) => {
        let elSelect = atributos.find(x => x.value === value);
        elSelect.disabled = !elSelect.disabled;
        if (this.state.atributes[name] !== "-") {
            let elAtual = atributos.find(
                x => x.value === this.state.atributes[name]
            );
            elAtual.disabled = !elAtual.disabled;
        }
        this.setState({
            atributes: { ...this.state.atributes, [name]: value }
        });
    };

    racaChangeHandle = (e, { value }) => {
        let copyBonus = this.state.bonus;
        Object.keys(this.state.racas[value].bonus).forEach(key => {
            if (this.state.bonus.hasOwnProperty(key)) {
                copyBonus[key] = this.state.racas[value].bonus[key];
            }
        });
        this.setState({
            atributes: { ...this.state.atributes },
            bonus: copyBonus
        });
    };

    render() {
        return (
            <Tab.Pane>
                <CardGroup>
                    <CardAtributos
                        valor={this.state.atributes.for}
                        bonus={this.state.bonus.for}
                        nomeAtributo="for"
                    />
                    <CardAtributos
                        valor={this.state.atributes.des}
                        bonus={this.state.bonus.des}
                        nomeAtributo="des"
                    />
                    <CardAtributos
                        valor={this.state.atributes.con}
                        bonus={this.state.bonus.con}
                        nomeAtributo="con"
                    />
                    <CardAtributos
                        valor={this.state.atributes.int}
                        bonus={this.state.bonus.int}
                        nomeAtributo="int"
                    />
                    <CardAtributos
                        valor={this.state.atributes.sab}
                        bonus={this.state.bonus.sab}
                        nomeAtributo="sab"
                    />
                    <CardAtributos
                        valor={this.state.atributes.car}
                        bonus={this.state.bonus.car}
                        nomeAtributo="car"
                    />
                </CardGroup>
                <Divider style={{ paddingTop: "10px", marginBottom: "10px" }} />

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
                <Divider style={{ paddingTop: "10px", marginBottom: "10px" }} />
                <Grid
                    columns="equal"
                    className="justify-content-center"
                    divided
                >
                    <Grid.Row className="text-center">
                        <Grid.Column>
                            <Popup
                                content="Raças"
                                trigger={
                                    <Dropdown
                                        button
                                        className="icon"
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
                                        disabled
                                        className="icon"
                                        floating
                                        labeled
                                        icon="user circle"
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
                                        disabled
                                        className="icon"
                                        floating
                                        labeled
                                        icon="user circle"
                                        placeholder="Bonus 2"
                                    />
                                }
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider style={{ paddingTop: "10px", marginBottom: "10px" }} />
                <Grid
                    columns="equal"
                    className="justify-content-center"
                    divided
                >
                    <Grid.Row className="text-center">
                        <Grid.Column>
                            <Popup
                                content="Classes"
                                trigger={
                                    <Dropdown
                                        button
                                        className="icon"
                                        floating
                                        labeled
                                        icon="user circle"
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
                                        className="icon"
                                        floating
                                        labeled
                                        icon="user circle"
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
                                        className="icon"
                                        floating
                                        labeled
                                        icon="user circle"
                                        placeholder="Perícias 2"
                                    />
                                }
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>
        );
    }
}

export default Caracteristicas;
