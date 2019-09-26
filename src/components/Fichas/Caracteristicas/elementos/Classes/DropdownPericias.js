import React from 'react';
import { Popup, Dropdown } from 'semantic-ui-react';

const DropdownPericias = props => {

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
export default DropdownPericias;