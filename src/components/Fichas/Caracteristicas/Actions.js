export const atualizarCaracteristicas = (atualizacao, store, dispatch, elemento) => {
    let valor = {
        [elemento]: atualizacao
    };
    let dispatchObj = {
        type: 'UPDATE_CARACTERISTICAS',
        payload: valor
    };
    return dispatch(dispatchObj);
};

export const atualizarAtributos = (atualizacao, store, dispatch, elemento) => {
    let modificadorBase = modificadorAtrBase(atualizacao);
    atualizarSelectAtributos(atualizacao, store, dispatch, elemento);
    atualizarModificador(modificadorBase, store, dispatch, elemento);

    let valor = {
        [elemento]: atualizacao
    };
    let dispatchObj = {
        type: 'UPDATE_ATRIBUTOS',
        payload: valor
    };
    return dispatch(dispatchObj);
};

export const atualizarSelectAtributos = (atualizacao, store, dispatch, elemento) => {
    let valorAnterior = store.ficha.caracteristicas.atributos[elemento];
    let elAnterior = (store.atributos).find(x => x.value === valorAnterior);
    if (valorAnterior !== 0) {
        elAnterior.disabled = !elAnterior.disabled;
    }
    if(atualizacao !== 0){
        let elSelect = (store.atributos).find(x => x.value === atualizacao);
        let newState = (store.atributos).filter(x => x !== elSelect);
        elSelect.disabled = !elSelect.disabled;        
        newState.push(elSelect);

        let dispatchObj = {
            type: 'UPDATE_SELECT_ATRIBUTOS',
            payload: newState
        };
        return dispatch(dispatchObj);
    }
    return;
}

export const atualizarModificador = (atualizacao, store, dispatch, elemento) => {
    let valor = {
        [elemento]: atualizacao
    };
    let dispatchObj = {
        type: 'UPDATE_MODIFICADOR',
        payload: valor
    };
    return dispatch(dispatchObj);
}

export const modificadorAtrBase = base => {
    let valor=0;
    if (base === 8) {
        valor=-1;
    }
    if (base === 10) {
        valor=0;
    }
    if (base === 12 || base === 13) {
        valor=1;
    }
    if (base === 15) {
        valor=2;
    }
    if (base === 17) {
        valor=3;
    }
    return valor;
}