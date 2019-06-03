<div class="tab-pane fade show" id="caracteristicas" role="tabpanel" aria-labelledby="caracteristicas">
    <label style="border-bottom:dotted; width:100%"></label>
    <h3 style="">O que te define?</h3>

    <div class="form-group">
        <div class="card-deck" style="padding-top: 2px;">
            <div class="card text-white bg-transparent border-warning" style="margin-right:5px;">
                <div class="card-body" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px">
                    <span class="exibir-atributos" id="exibe-forca">--</span><sup id="modificador-forca" style="font-size:26px"></sup>
                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0; margin-bottom:0"> <small style="color:#e9910f; font-size:16px">FORÇA</small>
                </div>
            </div>
            <div class="card text-white bg-transparent border-warning" style="margin-left:0px; margin-right:5px; height:10%">
                <div class="card-bodys" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px">
                    <span class="exibir-atributos" id="exibe-destreza">--</span><sup id="modificador-destreza" style="font-size:26px"></sup>

                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0"> <small style="color:#e9910f; font-size:16px">DESTREZA</small>
                </div>
            </div>
            <div class="card text-white bg-transparent border-warning" style="margin-left:0px; margin-right:5px; height:10%">
                <div class="card-body" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px;">
                    <span class="exibir-atributos" id="exibe-constituicao">--</span><sup id="modificador-constituicao" style="font-size:26px"></sup>
                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0"> <small style="color:#e9910f; font-size:16px">CONSTITUIÇÃO</small>
                </div>
            </div>
            <div class="card text-white bg-transparent border-warning" style="margin-left:0px; margin-right:5px; height:10%">
                <div class="card-body" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px">
                    <span class="exibir-atributos" id="exibe-inteligencia">--</span><sup id="modificador-inteligencia" style="font-size:26px"></sup>
                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0"> <small style="color:#e9910f; font-size:16px">INTELIGÊNCIA</small>
                </div>
            </div>
            <div class="card text-white bg-transparent border-warning" style="margin-left:0px; margin-right:5px; height:10%">
                <div class="card-body" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px">
                    <span class="exibir-atributos" id="exibe-sabedoria">--</span><sup id="modificador-sabedoria" style="font-size:26px"></sup>
                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0"> <small style="color:#e9910f; font-size:16px">SABEDORIA</small>
                </div>
            </div>
            <div class="card text-white bg-transparent border-warning" style="margin-left:0px; height:10%">
                <div class="card-body" style="padding: 0;text-align: center; margin-bottom:0; font-size:40px">
                    <span class="exibir-atributos" id="exibe-carisma">--</span><sup id="modificador-carisma" style="font-size:26px"></sup>
                </div>
                <div class="card-footer border-warning text-white" style="text-align: center; padding:0"> <small style="color:#e9910f; font-size:16px">CARISMA</small>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-7" style="padding-right:0">
            <div class="form-group" style="margin-bottom:3px">
                <div class="row" style="padding-left:15px">
                    <div class="input-group" style="width:100%; padding-right:5px">
                        <div class="input-group-prepend">
                            <label class="input-group-text" style="padding: 5px;" for="metodo"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Método</label>
                        </div>
                        <select class="custom-select" id="metodo">
                                                                <option selected>Selecione</option>
                                                                <option value="1">Padrão</option>
                                                                <option value="2">Clássico</option>
                                                                <option value="3">Heróico</option>
                                                                <option value="4">Audacioso</option>
                                                                <option value="5">Elite</option>
                                                            </select>
                    </div>
                </div>
            </div>
            <div class="form-group" style="margin-bottom:0px">
                <div class="row" style="padding-left:15px; padding-bottom:3px">
                    <div class="input-group" style="width:33%;">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr0" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="A Força mede seu poder muscular, sua força física. O modificador de Força será aplicado nas jogadas de ataque corpo-a-corpo;
                                                                dano de ataques corpo-a-corpo ou com armas de arremesso; testes de Atletismo; testes de Força para levantar peso, quebrar
                                                                objetos e atos similares."><i class="far fa-question-circle question-mark"></i></a>FOR</label>
                        </div>
                        <select class="custom-select atributo" id="atr0" disabled>
                                                                <option selected>--</option>
                                                                <option value="1">8</option>
                                                                <option value="2">10</option>
                                                                <option value="3">12</option>
                                                                <option value="4">13</option>
                                                                <option value="5">15</option>
                                                                <option value="6">17</option>
                                                        </select>
                    </div>
                    <div class="input-group" style="width:33%; padding-left:4px">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr1" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="A Destreza mede agilidade, reflexos, equilí- brio e coordenação motora. O modificador de Destreza será aplicado nas jogadas
                                                                de ataque à distância; classe de armadura; testes de Reflexos; testes de Acrobacia, Cavalgar, Iniciativa, Furtividade e Ladinagem."><i class="far fa-question-circle question-mark"></i></a>DES</label>
                        </div>
                        <select class="custom-select atributo" id="atr1" disabled>
                                                                    <option selected>--</option>
                                                                    <option value="1">8</option>
                                                                    <option value="2">10</option>
                                                                    <option value="3">12</option>
                                                                    <option value="4">13</option>
                                                                    <option value="5">15</option>
                                                                    <option value="6">17</option>
                                                            </select>
                    </div>
                    <div class="input-group" style="width:33%; padding-left:4px">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr2" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="A saúde e vigor físico do herói são representados pela Constituição. Seu modificador será aplicado a seus pontos de vida
                                                                iniciais (que dependem de sua classe), e também aos PV que você ganha quando sobe de nível (mas, mesmo com um modificador
                                                                negativo, um personagem sempre ganha pelo menos 1 PV quando sobe de nível). Se a Constituição muda o suficiente para alterar
                                                                seu modificador de habilidade, seus pontos de vida também aumentam ou diminuem de acordo. O modificador de Constituição também é aplicado a testes de Fortitude; testes de Constituição para prender o fôlego e atos
                                                                similares"><i class="far fa-question-circle question-mark"></i></a>CON</label>
                        </div>
                        <select class="custom-select atributo" id="atr2" disabled>
                                                                    <option selected>--</option>
                                                                    <option value="1">8</option>
                                                                    <option value="2">10</option>
                                                                    <option value="3">12</option>
                                                                    <option value="4">13</option>
                                                                    <option value="5">15</option>
                                                                    <option value="6">17</option>
                                                            </select>
                    </div>

                </div>
                <div class="row" style="padding-left:15px; padding-bottom:3px">
                    <div class="input-group" style="width:33%;">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr3" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="A capacidade de pensar, raciocinar e resolver problemas é medida pela Inteligência. Você usará seu modificador de Inteligência
                                                                para determinar seu número de perícias treinadas e idiomas conhecidos, e aplicará o modificador de Inteligência a testes
                                                                de Conhecimento, Identificar Magia e Ofício."><i class="far fa-question-circle question-mark"></i></a>INT</label>
                        </div>
                        <select class="custom-select atributo" id="atr3" disabled>
                                                                        <option selected>--</option>
                                                                        <option value="1">8</option>
                                                                        <option value="2">10</option>
                                                                        <option value="3">12</option>
                                                                        <option value="4">13</option>
                                                                        <option value="5">15</option>
                                                                        <option value="6">17</option>
                                                                </select>
                    </div>
                    <div class="input-group" style="width:33%; padding-left:4px">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr4" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="A Sabedoria representa a percepção e força de vontade, além de seu bom senso, intuição e sentidos. Não é a mesma coisa que
                                                                    Inteligência: enquanto a Inteligência determina sua capacidade de aprendizado e raciocínio, a Sabedoria diz como você percebe
                                                                    o mundo e a si mesmo. Um monge isolado nas Montanhas Sanguiná- rias, que não sabe ler e nunca teve contato com qualquer cultura,
                                                                    pode ter alta Sab e baixa Int — enquanto um pesquisador arcano muito distraído teria alta Int e baixa Sab. O modificador
                                                                    de Sabedoria será aplicado a testes de Vontade; testes de Cura, Intuição, Percepção e Sobrevivência."><i class="far fa-question-circle question-mark"></i></a>SAB</label>
                        </div>
                        <select class="custom-select atributo" id="atr4" disabled>
                                                                        <option selected>--</option>
                                                                        <option value="1">8</option>
                                                                        <option value="2">10</option>
                                                                        <option value="3">12</option>
                                                                        <option value="4">13</option>
                                                                        <option value="5">15</option>
                                                                        <option value="6">17</option>
                                                                </select>
                    </div>
                    <div class="input-group" style="width:33%; padding-left:4px">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="atr5" style="padding: 5px;"><a href="#" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Carisma mede sua força de personalidade, magnetismo pessoal, charme, simpatia, capacidade de persuasão e beleza física. Seu
                                                                    modificador de Carisma será aplicado em testes de Adestrar Animais, Atuação, Diplomacia, Enganação, Intimidar e Obter Informação;
                                                                    qualquer teste envolvendo influenciar outras pessoas ou criaturas."><i class="far fa-question-circle question-mark"></i></a>CAR</label>
                        </div>
                        <select class="custom-select atributo" id="atr5" disabled>
                                                                        <option selected>--</option>
                                                                        <option value="1">8</option>
                                                                        <option value="2">10</option>
                                                                        <option value="3">12</option>
                                                                        <option value="4">13</option>
                                                                        <option value="5">15</option>
                                                                        <option value="6">17</option>
                                                                </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col" style="padding-left:15px">
            <div class="row" style="margin:0px; font-size:17px;background-color: #292c33;border-radius: 6px;padding-left: 3px; height:77px">
                <div style="padding: 0px;" class="col-sm-6">
                    <div style="width:auto;" id="R1"></div>
                    <div style="width:auto;" id="R2"></div>
                    <div style="width:auto;" id="R3"></div>
                </div>
                <div class="col-sm-6" style="padding:0px">
                    <div style="" id="R4"></div>
                    <div style="" id="R5"></div>
                    <div style="" id="R6"></div>
                </div>
            </div>
            <div class="row" style="margin:0px;">
                <button type="button" class="btn btn-warning" id="rolar-dados" style="margin:0px;margin-top:5px; width:100%" disabled>ROLAR OS DADOS</button>
            </div>

        </div>
    </div>
    <hr>

    {{--RAÇAS--}}
    <div class="row" style="padding-left:15px;">
        <div class="form-group" style="padding-right:5px;">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="racas"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Raça</label>
                </div>
                <select class="custom-select" id="racas">
                    <option value="" selected>Selecione...</option>
                    @foreach ($racas as $raca)
                <option value="{{$raca->IdRaca}}">{{$raca->Nome}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group" style="padding-right:5px;">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Bonus 1</label>
                </div>
                <select class="custom-select bonus" name="bonus-1" disabled>
                    <option value="1">Força</option>
                    <option value="2">Destreza</option>
                    <option value="3">Constituição</option>
                    <option value="4">Inteligência</option>
                    <option value="5">Sabedoria</option>
                    <option value="6">Carisma</option>
                </select>
            </div>
        </div>
        <div class="form-group" style="padding-right:5px;">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Bonus 2</label>
                </div>
                <select class="custom-select bonus" name="bonus-2" disabled>
                    <option value="1">Força</option>
                    <option value="2">Destreza</option>
                    <option value="3">Constituição</option>
                    <option value="4">Inteligência</option>
                    <option value="5">Sabedoria</option>
                    <option value="6">Carisma</option>
                </select>
            </div>
        </div>
    </div>
    {{-- CLASSE --}}
    <div class="row" style="padding-left:15px;">
        <div class="form-group" style="">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Classe</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Selecione...</option>
                                        <option value="1">Bárbaro</option>
                                        <option value="2">Bardo</option>
                                        <option value="3">Clérigo</option>
                                        <option value="4">Druida</option>
                                        <option value="5">Feiticeiro</option>
                                        <option value="6">Guerreiro</option>
                                        <option value="7">Ladino</option>
                                        <option value="8">Mago</option>
                                        <option value="9">Monge</option>
                                        <option value="10">Paladino</option>
                                        <option value="11">Ranger</option>
                                        <option value="12">Samurai</option>
                                        <option value="13">Swashbuckle</option>
                                    </select>
            </div>
        </div>
    </div>

    {{-- PERÍCIAS --}}
    <div class="row" style="padding-left:15px;">
        <div class="form-group" style="padding-right:5px; width:49%">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Perícias</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Selecione...</option>
                                    <option value="1">Adestrar Animais</option>
                                    <option value="2">Identificar Magia</option>
                                    <option value="3">Obter Informações</option>
                                    <option value="4">Goblin</option>
                                    <option value="5">Halfling</option>
                                    <option value="6">Humano</option>
                                    <option value="7">Lefou</option>
                                    <option value="8">Meio-Elfo</option>
                                    <option value="9">Meio-Orc</option>
                                    <option value="10">Minotauro</option>
                                    <option value="11">Qareen</option>
                                </select>
            </div>
        </div>
        <div class="form-group" style="width:49%">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"><a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-question-circle question-mark"></i></a>Outras Perícias</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Selecione...</option>
                                        <option value="1">Bárbaro</option>
                                        <option value="2">Bardo</option>
                                        <option value="3">Clérigo</option>
                                        <option value="4">Druida</option>
                                        <option value="5">Feiticeiro</option>
                                        <option value="6">Guerreiro</option>
                                        <option value="7">Ladino</option>
                                        <option value="8">Mago</option>
                                        <option value="9">Monge</option>
                                        <option value="10">Paladino</option>
                                        <option value="11">Ranger</option>
                                        <option value="12">Samurai</option>
                                        <option value="13">Swashbuckle</option>
                                    </select>
            </div>
        </div>
    </div>
</div>
