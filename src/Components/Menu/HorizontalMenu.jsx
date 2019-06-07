import "./HorizontalMenu.css";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button, ButtonGroup } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";

class HorizontalMenu extends Component {
    state = {}; //Estado do componente. Este componente não possui nenhum estado no momento.

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleLoginClick = (e) => this.setState({activeItem: 'none'})

    /*
    As funções handleItemClick e handleLoginClick atribuem os Estados activeItem ao se clicar no elemento que possua essa função.
    Por exemplo, o componente <Menu.Item> com name="inicio". Ao se clicar neste componente o estado global do componente (state={}) será alterado para state={activeItem: inicio}. É possível haver diversos stados em um componente, como se vê no arquivo Components>Fichas>Caracteristicas.jsx.
    */

    render() {
        const { activeItem } = this.state;
        return (
            //Neste projeto estou usando a Semantic Ui, ele é um framework de CSS semelhante ao bootstrap. No site da para encontrar diversos componentes com a documentação para se utilizar. No inicio desse aquivo eu importo cada componente dele.
            //Dentro de cada componente há as props (ou propriedades), por exemplo no componente <Menu> ele possui as propriedades className, size, stackable e pointing. No caso, todas essas props já vem com o componente, mas nada impede de criar novas props como por exemplo: "tema="escuro", visibilidade="mostrar", logado="nao"".
            <Menu className="base-menu" size="mini" stackable pointing>
                <Menu.Item className="logo" as={Link} to="/">
                    <img alt="logo" src={logo} />
                </Menu.Item>
                <Menu.Item
                    as={Link} //trata o item do menu como um link
                    to="/" //destino do item
                    className="menu-item" //classe do item (igual ao class do html)
                    name="inicio"
                    active={activeItem === "inicio"} // checa se o item ativo é igual ao "inicio", se for, active="true".
                    onClick={this.handleItemClick} // Função para lidar com o click. o atributo this se refere a esta classe. Ou seja, está usando a função handleItemClick da classe HorizontalMenu.
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
