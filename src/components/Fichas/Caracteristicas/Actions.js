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