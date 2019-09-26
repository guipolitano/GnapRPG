import React from "react";
import { Popup,
    Dropdown
} from "semantic-ui-react"

const DropdownAtributos = props => {
    return (
        <Popup
        content={props.textPopUp}
        trigger = {
                <Dropdown 
                    button scrolling floating labeled
                    className="icon icon-atr"
                    icon={props.icon}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={props.change}
                    options={props.atributos}
                />
            }
        />        
    );
};

export default DropdownAtributos;