import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';

const DropdownBonus = props => {

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
export default DropdownBonus;