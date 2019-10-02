import React from 'react';
import { Grid } from 'semantic-ui-react';
import atributos from "../../../util/jsons/atributos.json";

const AtributosBasicos = props => {
    const { detalhes } = atributos;
    return (<Grid
              className="justify-content-center"
              columns="equal"
              divided="vertically"
            >
              <Grid.Row className="justify-content-between">
                {Object.keys(detalhes).map(key =>{
                    return (<Grid.Column key={key} className="text-center" width={8}><span className="header">{detalhes[key].nome}: </span>{detalhes[key].descricao}</Grid.Column>)
                })}
              </Grid.Row>
            </Grid>)
}

export default AtributosBasicos;