import React from "react";
import {
    Dropdown
} from "semantic-ui-react"

const DropdownAtributos = props => {
    return ( <Dropdown button scrolling className = "icon icon-atr"
        floating labeled icon = "hand rock"
        placeholder = "FOR"
        name = "for" />
    );
};

export default DropdownAtributos;