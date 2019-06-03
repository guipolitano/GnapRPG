import "./HorizontalMenu.css";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button, ButtonGroup } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";

class HorizontalMenu extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleLoginClick = (e) => this.setState({activeItem: 'none'})

    render() {
        const { activeItem } = this.state;
        return (
            <Menu className="base-menu" size="mini" stackable pointing>
                <Menu.Item className="logo" as={Link} to="/">
                    <img alt="logo" src={logo} />
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/"
                    className="menu-item"
                    name="inicio"
                    active={activeItem === "inicio"}
                    onClick={this.handleItemClick}
                >
                    <Icon name="home" />
                    Início
                </Menu.Item>
                <Menu.Item
                    className="menu-item"
                    name="fichas"
                    active={activeItem === "fichas"}
                >
                    <Icon name="file text" />
                    <Dropdown text="Fichas">
                        <Dropdown.Menu className="menu-dropdown">
                            <Dropdown.Item
                                as={Link}
                                to="/fichas/nova-ficha"
                                className="item-dropdown"
                                icon="plus"
                                text="Nova Ficha"
                                name="fichas"
                                onClick={this.handleItemClick}
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <ButtonGroup size="mini">
                            <Button
                                as={Link}
                                to="/login"
                                onClick={this.handleLoginClick}
                                className="menu-btn-login"
                            >
                                Logar
                            </Button>
                            <Button
                                as={Link}
                                to="/cadastro"
                                onClick={this.handleLoginClick}
                                className="menu-btn-cadastro"
                            >
                                Cadastrar
                            </Button>
                        </ButtonGroup>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default HorizontalMenu;
