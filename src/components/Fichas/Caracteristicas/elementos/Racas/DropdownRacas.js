import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';
import data from "../../../../../util/jsons/racas.json";

const DropdownRacas = props => {
    const { opcoes, racas } = data;
    return (
        <Popup
            content="Raças"
            trigger={
            <Dropdown
                button
                scrolling
                className="icon icon-extras"
                floating
                labeled
                onChange={props.change}
                options={opcoes}
                icon="user circle"
                placeholder="Raças"
                name="raca"
            />
            }
        />)
}
export default DropdownRacas;