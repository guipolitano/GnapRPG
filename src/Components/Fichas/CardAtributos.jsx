import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';

class CardAtributos extends Component {

    render() {
        return (
            <Card className="card-atributos">
                <Card.Content>
                    <span className={`valores valor-${this.props.nomeAtributo}`}>
                        {this.props.valor}
                        <sup id={`modificador-${this.props.nomeAtributo}`} style={{fontSize:"18px", color:this.props.cor}}>{this.props.modificador}</sup>
                    </span>
                    <Divider />
                    {(this.props.nomeAtributo).toUpperCase()}
                </Card.Content>
            </Card>
        );
    }
}

export default CardAtributos;
