import React from "react";
import { Popup,
    Dropdown
} from "semantic-ui-react"
import data from "../../../../../util/jsons/atributos.json";

const { atributos } = data;

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
                    options = {atributos}
                />
            }
        />        
    );
};

export default DropdownAtributos;