import React from 'react';

import data from "./util/jsons/atributos.json";
const {
    atributos
} = data;


export const Store = React.createContext();

const initialState = {
    ficha: {
        caracteristicas:{
            atributos: {
                for: 0,
                des: 0,
                con: 0,
                int: 0,
                sab: 0,
                car: 0
            },
            modificador:{
                for: 0,
                des: 0,
                con: 0,
                int: 0,
                sab: 0,
                car: 0
            }
        }
    },
    informacoes: {},
    atributos
}

function reducer(state, action) {
    let nome, valor;
    nome = Object.keys(action.payload)[0];
    valor = Object.values(action.payload)[0];
    switch (action.type) {
        case 'UPDATE_BASICO':
            return {
                ...state,
                ficha: {
                    ...state.ficha,
                    basico: {
                        ...state.ficha.basico,
                        [nome]: valor
                    }
                }
            }
            case 'UPDATE_CARACTERISTICAS':                
                return {
                    ...state,
                    ficha: {
                        ...state.ficha,
                        caracteristicas: {
                            ...state.ficha.caracteristicas,
                            [nome]: valor
                        }
                    }
                }
            case 'UPDATE_SELECT_ATRIBUTOS':                    
                return {
                    ...state,
                    atributos: action.payload                    
                }

            case 'UPDATE_MODIFICADOR':                    
                return {
                    ...state,
                    ficha: {
                        ...state.ficha,
                        caracteristicas: {
                            ...state.ficha.caracteristicas,
                            modificador: {
                                ...state.ficha.caracteristicas.modificador,
                                [nome]: valor
                            }
                        }
                    }
                }

            case 'UPDATE_ATRIBUTOS':                        
                return {
                    ...state,
                    ficha: {
                        ...state.ficha,
                        caracteristicas: {
                            ...state.ficha.caracteristicas,
                            atributos: {
                                ...state.ficha.caracteristicas.atributos,
                                [nome]: valor
                            }
                        }
                    }
                }
            default:
                return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return  <Store.Provider value = {value}>
                {props.children} 
            </Store.Provider>
}