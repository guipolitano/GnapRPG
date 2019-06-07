import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment
} from "semantic-ui-react";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleClick(event) {
        var apiBaseUrl = "https://enzjw83io3yep.x.pipedream.net/";
        var payload = {
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
                                Login
                                <hr />
                            </Header>
                            <Form.Input
                                required
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
                                required
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
                            <Button
                                color="green"
                                fluid
                                size="large"
                                onClick={event => this.handleClick(event)}
                            >
                                Login
                            </Button>
                            <hr />
                            Novo usuário? <a href="#root">Cadastre-se</a>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;
