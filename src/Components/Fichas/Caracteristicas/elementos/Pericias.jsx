import React from "react";
import { Grid, Checkbox } from "semantic-ui-react";
import './Pericias.css';
let pericias = {
  "0": "Acrobacia",
  "1": "Adestrar Animais",
  "2": "Atletismo",
  "3": "Atuação",
  "4": "Cavalgar",
  "5": "Conhecimento",
  "6": "Cura",
  "7": "Diplomacia",
  "8": "Enganação",
  "9": "Furtividade",
  "10": "Identificar Magia",
  "11": "Iniciativa",
  "12": "Intuição",
  "13": "Intimidação",
  "14": "Ladinagem",
  "15": "Obter Informação",
  "16": "Ofício",
  "17": "Percepção",
  "18": "Sobrevivência"
};

const Pericias = ({ props }) => {
  return (
    <React.Fragment>        
      <Grid.Column>          
        {Object.keys(pericias).map(key =>{        
            while(key<5){
                return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
            }
        })}
      </Grid.Column>
      <Grid.Column>
        {Object.keys(pericias).map(key =>{        
            while(key>=5 && key<10){
                return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
            }
        })}
      </Grid.Column>
      <Grid.Column>
        {Object.keys(pericias).map(key =>{        
            while(key>=10 && key<15){
                return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
            }
        })}
      </Grid.Column>
      <Grid.Column>          
        {Object.keys(pericias).map(key =>{        
            while(key>=15){
                return <Checkbox style={{alignSelf:"center", display:"grid"}} fitted key={key} label={pericias[key]}/>
            }
        })}
      </Grid.Column>
    </React.Fragment>
  );
};

export default Pericias;
