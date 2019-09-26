import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';

const DropdownLeveis = props => {

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
export default DropdownLeveis;