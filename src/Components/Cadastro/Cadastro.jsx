import React, { Component } from "react";
import axios from "axios";
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Message
} from "semantic-ui-react";
import "./Cadastro.css";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            formError: {
                erro: false,
                mensagem: ""
            }
        };
    }

    handleClick(event) {
        const apiBaseUrl = "https://enzjw83io3yep.x.pipedream.net/";

        if (
            this.state.email.value === "" ||
            this.state.password.value === "" ||
            this.state.confirmPassword.value === "" ||
            this.state.username.value === ""
        ) {
            this.setState({
                formError: {
                    erro: true,
                    mensagem: "Todos os campos são obrigatórios"
                }
            });
        } else {
            this.setState({
                formError: {
                    erro: false,
                    mensagem: ""
                }
            });
        }

        let payload = {
            email: this.state.username.value,
            password: this.state.password.value
        };
        axios
            .post(apiBaseUrl + "login", payload)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ width: "100%" }}>
                    <Form size="large">
                        <Segment stacked>
                            <Header as="h2" color="black" textAlign="center">
                                Cadastro
                                <hr />
                            </Header>
                            {this.state.formError.erro ? (
                                <Message visible
                                    error
                                    content={this.state.formError.mensagem}
                                />
                            ) : null}
                            <Form.Input
                                icon="envelope"
                                iconPosition="left"
                                placeholder="Email"
                                onChange={(event, newValue) =>
                                    this.setState({
                                        email: newValue
                                    })
                                }
                                type="email"
                            />
                            <Form.Input
                                icon="user"
                                iconPosition="left"
                                placeholder="Usuário"
                                onChange={(event, newValue) =>
                                    this.setState({
                                        username: newValue
                                    })
                                }
                            />
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                placeholder="Senha"
                                onChange={(event, newValue) =>
                                    this.setState({
                                        password: newValue
                                    })
                                }
                                type="password"
                            />
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                placeholder="Confirmar Senha"
                                onChange={(event, newValue) =>
                                    this.setState({
                                        confirmPassword: newValue
                                    })
                                }
                                type="password"
                            />
                            <Button
                                color="green"
                                disabled={
                                    !this.state.email ||
                                    !this.state.username ||
                                    !this.state.password ||
                                    !this.state.confirmPassword
                                }
                                fluid
                                size="large"
                                onClick={event => this.handleClick(event)}
                            >
                                Cadastro
                            </Button>
                            <hr />
                            Já é usuário? <a href="#root">Logue-se</a>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Cadastro;
