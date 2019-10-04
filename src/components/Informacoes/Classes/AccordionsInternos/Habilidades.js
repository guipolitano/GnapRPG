import React from 'react';
import { List } from 'semantic-ui-react';

const Habilidades = (props) => {
    const { data } = props;

    return (
        <List divided>
            {Object.entries(data).map(([key, val]) => {
                return (
                    <List.Item key={key}>
                    <span className="cor-laranja">{val.nome}: </span>
                    {Object.entries(val.descricao).map(([keyDesc, valor]) => {
                        if(keyDesc === "0") return (<span key={keyDesc}> {valor}<br/><br/></span>)
                        else return (<p key={keyDesc}>⚬ {valor}</p>)
                    })}
                </List.Item>)
                
            })}
        </List>

    );
}
 
export default Habilidades;