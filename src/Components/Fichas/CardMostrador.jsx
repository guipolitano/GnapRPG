import React, { Component } from "react";
import { Card, Divider } from 'semantic-ui-react';
class CardMostrador extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-2" style={{ paddingRight: "0px" }}>
        <Card className="card-atributos" style={{ border: "none" }}>
          <Card.Content>
            <span style={{fontSize:"22px"}}>{this.props.valor}</span>
            <Divider />
            {this.props.texto}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default CardMostrador;
