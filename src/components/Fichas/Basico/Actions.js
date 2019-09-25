
export const atualizarBasico = (atualizacao, store, dispatch, elemento) => {
    console.log(atualizacao);
    let valor = {[elemento]: atualizacao};  
    let dispatchObj = {
        type: 'UPDATE_BASICO',
        payload: valor
    };
    return dispatch(dispatchObj);
};