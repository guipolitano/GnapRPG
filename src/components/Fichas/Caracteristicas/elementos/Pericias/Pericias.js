import React from "react";
import { Grid, Checkbox } from "semantic-ui-react";
import data from "../../../../../util/jsons/pericias.json";
import "./Pericias.scss";

const Pericias = props  => {
    const { pericias } = data;
    return (
        <React.Fragment>        
            <Grid.Column>          
                {Object.keys(pericias).map(key =>{
                    while(key<8){
                        return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
                    }
                })}
            </Grid.Column>
            <Grid.Column>
                {Object.keys(pericias).map(key =>{
                    while(key>=8 && key<16){
                        return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
                    }
                })}
            </Grid.Column>
            <Grid.Column>
                {Object.keys(pericias).map(key =>{
                    while (key >= 16 && key < 24) {
                        return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
                    }
                })}
            </Grid.Column>
            <Grid.Column>
                {Object.keys(pericias).map(key =>{
                    while(key>=24){
                        return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
                    }
                })}
            </Grid.Column>
        </React.Fragment>
    );
};

export default Pericias;