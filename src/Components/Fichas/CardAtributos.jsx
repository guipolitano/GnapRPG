import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';
class CardAtributos extends Component {
    state = {  }
    render() {
        return (
            <Card className="card-atributos">
                <Card.Content>
                    <span className={`valores valor-${(this.props.nomeAtributo).toLowerCase()}`}>
                        {this.props.valor}
                    </span>
                    <Divider />
                    {this.props.nomeAtributo}
                </Card.Content>
            </Card>
        );
    }
}

export default CardAtributos;
