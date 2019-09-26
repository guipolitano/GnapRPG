import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';

const DropdownClasses = props => {

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
            icon="book"
            placeholder="Classes"
            name="classe"
        />
        }
    />)
}
export default DropdownClasses;