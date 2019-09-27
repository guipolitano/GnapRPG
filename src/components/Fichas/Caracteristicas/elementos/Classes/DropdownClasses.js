import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';
import data from "../../../../../util/jsons/classes.json";

export const DropdownClasses = props => {
    const { opcoes } = data;
    return (
        <Popup
            content="Classes"
            trigger={
            <Dropdown
                button
                scrolling
                className="icon icon-extras"
                floating
                labeled
                options={opcoes}
                icon="book"
                placeholder="Classes"
                name="classe"
            />
            }
        />)
}

export const DropdownLeveis = props => {

return (
    <Popup
        content="Level"
        trigger={
        <Dropdown
            button
            scrolling
            className="icon icon-extras"
            floating
            labeled
            icon="sort numeric up"
            placeholder="Level"
            name="level"
        />
        }
    />)
}

export const DropdownPericias = props => {

return (
    <Popup
        content="Bonus de Classe"
        trigger={
        <Dropdown
            button
            scrolling
            className="icon icon-extras"
            floating
            labeled
            icon="sign language"
            placeholder="Bonus de Classe"
            name="bonus-classe"
        />
        }
    />)
}
