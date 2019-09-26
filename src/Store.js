import React from 'react';

export const Store = React.createContext();

const initialState = {
    ficha: {},
    informacoes: {}
}

function reducer(state, action) {
    let nome, valor;
    switch (action.type) {
        case 'UPDATE_BASICO':
            nome = Object.keys(action.payload)[0];
            valor = Object.values(action.payload)[0];
            return {
                ...state,
                ficha: {
                    ...state.ficha, 
                    basico: {
                        ...state.ficha.basico, 
                        [nome]: valor}}
            }
        case 'UPDATE_CARACTERISTICAS':
            nome = Object.keys(action.payload)[0];
            valor = Object.values(action.payload)[0];
            return {
                ...state,
                ficha: {
                    ...state.ficha, 
                    caracteristicas: {
                        ...state.ficha.caracteristicas,
                        [nome]: valor}}
            }
            default:
                return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value} > {
            props.children
        } </Store.Provider>
}