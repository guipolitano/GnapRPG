import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';
class Informacoes extends Component {
    state = {  }
    render() { 
        return (
        <div style={{padding:"1em"}}>
            <Card.Header textAlign="center">INFORMAÇÕES</Card.Header>
            <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />

        </div>);
    }
}
 
export default Informacoes;