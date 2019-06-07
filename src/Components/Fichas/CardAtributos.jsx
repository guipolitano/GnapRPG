import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';

class CardAtributos extends Component {
    state = {  }
    setarModificador = (base, bonus) => {
        let valor = "";
        let cor = "#ffec5c";
        let operador= '';
        if(base === "8"){valor = -1};
        if(base === "10"){valor = 0};
        if(base === "12" || base === "13"){valor = 1};
        if(base === "15"){valor = 2};
        if(base === "17"){valor = 3};
        let soma = valor+bonus;

        if(soma>0){
            operador='+';
            cor = "#4dd822";
        }else if(soma<0){
            cor = "#b91717";
        }

        return <sup id={`modificador-${this.props.nomeAtributo}`} style={{fontSize:"18px", color:cor}}>{operador+soma}</sup>
    }
    render() {
        return (
            <Card className="card-atributos">
                <Card.Content>
                    <span className={`valores valor-${this.props.nomeAtributo}`}>
                        {this.props.valor}
                        {this.setarModificador(this.props.valor, this.props.bonus)}
                    </span>
                    <Divider />
                    {(this.props.nomeAtributo).toUpperCase()}
                </Card.Content>
            </Card>
        );
    }
}

export default CardAtributos;
