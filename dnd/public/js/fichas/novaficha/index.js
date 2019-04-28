expandTextarea("textarea-historia");
expandTextarea("textarea-aparencia");
expandTextarea("textarea-personalidade");

pegarAtributos();

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});

function isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if ((charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
};

$(".atributo").prop("disabled", true);

$("#metodo").on("change", function() {
    limparCamposAtributos();
    metodo = $("#metodo").val();
    if (metodo === "Selecione" || metodo === "6") {
        $("#rolar-dados").prop("disabled", true);
        if(metodo === "6"){
            $(".atributo").prop("disabled", false);
        }else{
            $(".atributo").prop("disabled", true);
        }
        $(".atributo").empty().append('<option value="0">--</option>');
        $(".atributo").append('<option value="1">8</option>');
        $(".atributo").append('<option value="2">10</option>');
        $(".atributo").append('<option value="3">12</option>');
        $(".atributo").append('<option value="4">13</option>');
        $(".atributo").append('<option value="5">15</option>');
        $(".atributo").append('<option value="6">17</option>');
    } else {
        $("#rolar-dados").prop("disabled", false);
    }
});

$("#rolar-dados").on("click", function() {
    metodo = $("#metodo").val();
    switch (metodo) {
        case "1":
            rolarDados(4, 6, true, false);
            break;
        case "2":
            rolarDados(3, 6, false, false);
            break;
        case "3":
            rolarDados(2, 6, false, true);
            break;
        case "4":
            rolarDados(1, 20, false, false);
            break;
        case "5":
            rolarDados(1, 20);
            break;
        case "6":
            break;

        default:
            break;
    }
});

$('.atributo').on('change', function (e) {
    e.preventDefault();
    var valueSelected = this.value;
    var valorAnterior = 0;
    var clicado = $(this);
    for (let i = 0; i < 6; i++) {
        if(clicado.hasClass(i)){
            valorAnterior = i;
        }
    }
    if(clicado.hasClass('selecionado')){
        clicado.removeClass().addClass('custom-select atributo selecionado '+valueSelected);
    }else{
        clicado.addClass('selecionado '+valueSelected);
    }

    for (let i = 0; i < 6; i++) {
        for(let j = 0; j <= 6; j++){
            $('#atr'+i+' option[value='+valorAnterior+']').prop('disabled',false);
            $('#atr'+i+' option[value='+j+']').val() === valueSelected ? $('#atr'+i+' option[value='+j+']').prop('disabled',true) : '';
        }
    }
});

$('#racas').on('change', function(){
    let opcao = $(this).val();

    if(opcao == ''){
        let modificadorBase = $('#exibe-forca').attr('modificador-base');
        $('#modificador-forca').text(modificadorBase);
    }
    if(opcao == 1){
        let modificador = $('#modificador-forca').text();
        atualizarModificador('forca', modificador, 1);
    }

})

function limparCamposAtributos(){
    $('#exibe-forca').html('--');
    $('#exibe-destreza').html('--');
    $('#exibe-constituicao').html('--');
    $('#exibe-sabedoria').html('--');
    $('#exibe-inteligencia').html('--');
    $('#exibe-carisma').html('--');
}

function rolarDados(numDados, numLados, descartar, heroica) {
    limparCamposAtributos();
    var text = [];
    var aux = 0;
    var boolRemovido = false;
    var menorResultado = [
        (R1 = ""),
        (R2 = ""),
        (R3 = ""),
        (R4 = ""),
        (R5 = ""),
        (R6 = "")
    ];
    var menorPosicao = [
        (R1 = ""),
        (R2 = ""),
        (R3 = ""),
        (R4 = ""),
        (R5 = ""),
        (R6 = "")
    ];
    var soma = [
        (R1 = ""),
        (R2 = ""),
        (R3 = ""),
        (R4 = ""),
        (R5 = ""),
        (R6 = "")
    ];
    var rolagens = {
        R1: [],
        R2: [],
        R3: [],
        R4: [],
        R5: [],
        R6: []
    };

    for (objeto in rolagens) {

        rolagens[objeto].length = numDados;
        for (let i = 0; i < numDados; i++) {
            rolagens[objeto][i] = Math.floor(Math.random() * numLados) + 1;
        }
    }

    for (let i = 0; i < menorResultado.length; i++) {
        menorResultado[i] = Math.min(...rolagens["R" + (i + 1)]);
        menorPosicao[i] = rolagens["R" + (i + 1)].indexOf(
            menorResultado[i]
        );
    }

    for (const rolagem in rolagens) {
        boolRemovido = false;
        for (var i = 0; i < rolagens[rolagem].length; i++) {
            if(descartar){
                if (
                    rolagens[rolagem][i] === menorResultado[aux] &&
                    boolRemovido === false
                ) {
                    rolagens[rolagem].splice(menorPosicao[aux], 1);
                    text[aux] =
                        '<span style="text-decoration:line-through; color:#9c3e3e">' +
                        menorResultado[aux] +
                        "</span>";
                    boolRemovido = true;
                }
            }else{
                text[aux] =
                    '<span style="text-decoration:line-through; color:#9c3e3e">' +
                    menorResultado[aux] +
                    "</span>";
            }
        }
        aux++;
    }
    aux = 0;
    exibirRolagens(soma, descartar, rolagens, heroica, text);

    $(".atributo").empty().append('<option value="0">--</option>');

    soma.sort(function(a, b){return a-b});

    for (let i = 0; i < soma.length; i++) {
        $(".atributo").append('<option value="'+(i+1)+'">'+soma[i]+'</option>');
    }

    $(".atributo").prop("disabled", false);
};


function pegarAtributos(){
    let str, dex, con, int, sab, car;

    $('#atr0').on('change', function (){
        str = $('#atr0').children("option:selected").text();
        exibirAtributos('forca', str);
    });

    $('#atr1').on('change', function (){
        dex = $('#atr1').children("option:selected").text();
        exibirAtributos('destreza', dex);
    });

    $('#atr2').on('change', function (){
        con = $('#atr2').children("option:selected").text();
        exibirAtributos('constituicao', con);
    });

    $('#atr3').on('change', function (){
        int = $('#atr3').children("option:selected").text();
        exibirAtributos('inteligencia', int);
    });

    $('#atr4').on('change', function (){
        sab = $('#atr4').children("option:selected").text();
        exibirAtributos('sabedoria', sab);
    });

    $('#atr5').on('change', function (){
        car = $('#atr5').children("option:selected").text();
        exibirAtributos('carisma', car);
    });
}

function exibirRolagens(soma, descartar, rolagens, heroica, text){
    for (let i = 0; i < soma.length; i++) {
        if (descartar) {
            soma[i] =
                rolagens["R" + (i + 1)].reduce((a, b) => a + b, 0);
            $("#R" + (i + 1)).html(
                "R" +
                (i + 1) +
                ': <span style="color: #85d786">' +
                soma[i] +
                "</span> (" +
                rolagens["R" + (i + 1)] +
                "," +
                text[i] +
                ")"
            );
        } else if (!descartar && !heroica) {
            soma[i] =
                rolagens["R" + (i + 1)].reduce((a, b) => a + b, 0);
            $("#R" + (i + 1)).html(
                "R" +
                (i + 1) +
                ': <span style="color: #85d786">' +
                soma[i] +
                "</span> (" +
                rolagens["R" + (i + 1)] +
                ")"
            );
        } else if ((!descartar) && heroica) {
            soma[i] = rolagens["R" + (i + 1)].reduce((a, b) => a + b, 0) + (6);
            $("#R" + (i + 1)).html(
                "R" +
                (i + 1) +
                ': <span style="color: #85d786">' +
                soma[i] +
                "</span> (" +
                rolagens["R" + (i + 1)] +
                ")<span style='color: #e9df1d'>+6</span>"
            );
        }
    }
};

function exibirAtributos(atributo, valorAtributo){
    let valorModificador;

    if(valorAtributo== 1){valorModificador = -5};
    if(valorAtributo==2 || valorAtributo==3){valorModificador = -4};
    if(valorAtributo==4 || valorAtributo==5){valorModificador = -3};
    if(valorAtributo==6 || valorAtributo==7){valorModificador = -2};
    if(valorAtributo==8 || valorAtributo==9){valorModificador = -1};
    if(valorAtributo==10 || valorAtributo==11){valorModificador = 0};
    if(valorAtributo==12 || valorAtributo==13){valorModificador = 1};
    if(valorAtributo==14 || valorAtributo==15){valorModificador = 2};
    if(valorAtributo==16 || valorAtributo==17){valorModificador = 3};
    if(valorAtributo==18 || valorAtributo==19){valorModificador = 4};
    if(valorAtributo==20 || valorAtributo==21){valorModificador = 5};
    if(valorAtributo==22 || valorAtributo==23){valorModificador = 6};
    if(valorAtributo==24 || valorAtributo==25){valorModificador = 7};

    //ATRIBUIR UM ATTR com o valor base
    $('#exibe-'+atributo).attr('modificador-base', parseInt(valorModificador));

    valorModificador = valorModificador>=0 ? `+${valorModificador}` : valorModificador;
    valorModificador = parseInt(valorModificador);
    $('#exibe-'+atributo).html(`${valorAtributo}`);
    atualizarModificador(atributo, valorModificador);
};

function atualizarModificador(atributo, valorModificador, raca=0){
    let elModificador = $('#modificador-'+atributo);
    let elRaca = $('#racas');
    let valorAtual = elModificador.text();
    let modificador = parseInt(valorModificador);
    let bonusRaca;

    valorAtual = valorAtual != '' ? parseInt(valorAtual) : 0;
    if(elRaca.val()!=''){
        bonusRaca = atribuirBonusRaca(atributo, raca);
        modificador += bonusRaca;
    }else{
        modificador = parseInt(valorModificador);
    }
    elModificador.text(modificador);

}

function atribuirBonusRaca(atributo, raca){
    let bonusRaca;
    //REQUISICAO AJAX
    bonusRaca = 5;
    return bonusRaca;

}

function previewFile() {
    var preview = document.querySelector("#imgPreview");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    var type = file.type;

    if (type != "image/jpeg" && type != "image/png" && type != "image/bmp") {
        alert("Formato Inválido. Somente arquivos .jpg, .jpeg, .png ou .bmp");
    } else {
        reader.onloadend = function() {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
};

function expandTextarea(id) {
    document.getElementById(id).addEventListener(
        "keyup",
        function() {
            this.style.overflow = "hidden";
            this.style.height = 0;
            this.style.height = this.scrollHeight + "px";
        },
        false
    );
};
