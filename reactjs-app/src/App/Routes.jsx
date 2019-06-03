import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from  '../Components/Login/Login';
import NovaFicha from  '../Components/Fichas/NovaFicha';
import Cadastro from '../Components/Cadastro/Cadastro';

class Routes extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/login/" component={Login} />
                    <Route path="/cadastro/" component={Cadastro} />
                    <Route
                        path="/fichas/nova-ficha"
                        component={NovaFicha}
                    />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        );
    }
}

export default Routes;
