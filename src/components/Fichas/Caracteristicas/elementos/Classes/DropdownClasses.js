import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';
import data from "../../../../../util/jsons/classes.json";

const DropdownClasses = props => {
    const { opcoes, classes } = data;
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
export default DropdownClasses;