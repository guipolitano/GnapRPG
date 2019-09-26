
export function atualizarContadores(name, value, state, dispatch, atualizarSelectAtributos) {
    let soma, operador, cor;
    let elSelect = (state.atributos).find(x => x.value === value);
    let valorAtual = state.ficha.atributos[name];
    if(valorAtual !== 0 && valorAtual !== "-"){
        let elAtual = (state.atributos).find(x => x.value === valorAtual);
        elAtual.disabled = !elAtual.disabled
        console.log(elAtual);
        atualizarSelectAtributos(elAtual, dispatch, elAtual.key)
    }
    // console.log(valorAtual);

    // if(valorAtual){
    //     elAtual.disabled = !elAtual.disabled;
    // }
    // if (this.state.atributes[name] !== "-") {
    //     let elAtual = atributos.find(x => x.value === this.state.atributes[name]);
    //     elAtual.disabled = !elAtual.disabled;
    // }

    // soma = copyBonus[name] + bonusBase(value);

    // if (soma > 0) {
    //     operador = "+";
    //     cor = "#4dd822";
    // } else if (soma < 0) {
    //     operador = "";
    //     cor = "#b91717";
    // } else {
    //     operador = "";
    //     cor = "#ffec5c";
    // }

    // this.setState({
    //     ...this.state,
    //     atributes: {
    //         ...this.state.atributes,
    //         [name]: value
    //     },
    //     modificador: {
    //         ...this.state.modificador,
    //         [name]: {
    //             ...this.state.modificador[name],
    //             soma,
    //             operador,
    //             cor
    //         }
    //     }
    // }, () => {
    //     this.caHandle();
    //     this.pvHandle();
    // })
}