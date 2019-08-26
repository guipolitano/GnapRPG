import React, { Component } from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import "./Ficha.scss";

import Basico from './Basico/Basico';
import Caracteristicas from './Caracteristicas/Caracteristicas';
import Equipamentos from './Equipamentos/Equipamentos';
import Magias from './Magias/Magias';
import Talentos from './Talentos/Talentos';

class Ficha extends Component {
  constructor() {
    super();
    this.state = {
      tabAtiva: "basico"
    };
  }

  render() {
    return (
      <div className="container-ficha">
        <Tabs large defaultSelectedTabId="basico" id="tabs-ficha" renderActiveTabPanelOnly="true">
          <Tab id="basico" title="Basico" panel={<Basico />} />          
          <Tab id="caracteristicas" title="Caracteristicas" panel={<Caracteristicas />} />
          <Tab id="talentos" title="Talentos" panel={<Talentos />} />
          <Tab id="magias" title="Magias" panel={<Magias />} />
          <Tab id="equipamentos" title="Equipamentos" panel={<Equipamentos />} />
        </Tabs>
      </div>
    );
  }
}

export default Ficha;
