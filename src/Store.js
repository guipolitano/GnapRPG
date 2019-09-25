import React from 'react';

export const Store = React.createContext();

const initialState = {
    ficha: {}
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_BASICO':
            let nome = Object.keys(action.payload)[0];
            let valor = Object.values(action.payload)[0];
            return {
                ...state,
                ficha: {
                    ...state.ficha, 
                    basico: {
                        ...state.ficha.basico, 
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