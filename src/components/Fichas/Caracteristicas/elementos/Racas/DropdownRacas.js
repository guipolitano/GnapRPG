import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';
import data from "../../../../../util/jsons/racas.json";

export const DropdownRacas = props => {
    const { opcoes } = data;
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

export const DropdownBonus = props => {

return (
    <Popup
        content={props.content}
        trigger={
        <Dropdown
            button
            disabled={true}
            className="icon icon-extras"
            floating
            labeled
            name={props.name}
            icon="plus circle"
            placeholder={props.content}
        />
        }
    />)
}