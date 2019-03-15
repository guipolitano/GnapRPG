@extends('index')
<link rel="stylesheet" href="{{ asset('css/perfil.css') }}">
@section('container')
{{--
    Informações do Perfil
    1- Foto
    2- Nome
    3- Cargo no Site (Admin, User, etc);
    4- Mesas de jogo {Fazer carrosel de imagens}
        5.1- Char/Funcao na mesa
        5.2- Quem é o Mestre
        (   [IMAGEM]
            Campanha 1
            Descrição:
            Jogadores:
            -Politano (Thorn, Lv 13, Monge)
            -Largadao (Ghughul, Lv 12, Clerico)
            Mestre: Politano
            Localização Atual: Planices de ...

            [IMAGEM]
            Campanha 2:
            Descrição:
            Jogadores:
            -Pinguim (Nyrvus, Lv 13, Guerreiro)
            -Largadao (Ghughul, Lv 12, Clerico)
            Mestre: Largadao
            Localização Atual: Planices de ...
        )
    5- Fichas {Fazer carrosel de imagens}
        (
            [IMAGEM]
            Ficha 1 - Thorn(Lv 13, Monge.)
            Mestre: Politano
        )
    6- Informações pessoais {Aba lateral (esquerda)}
        (
            Cargo no Site - Retangulo (Obrigatorio)
            Data de registro (Obrigatorio)
            Última vez online (Obrigatorio)
            Principal ficha
            Principal campanha
            Interesses
            Idade
            Cidade
        )

    --}}
<div class="container emp-profile">
    <form method="post">
        <div class="row">
            <div class="col-md-4">
                <div class="profile-img">
                    <img src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="" />
                    <div class="file btn btn-lg btn-primary">
                        Trocar Avatar
                        <input type="file" name="file" />
                    </div>
                </div>
            </div>
            <div class="col-md-8" style="border-left: dotted; border-color: #d1820d;">
                <div class="profile-head">
                  {{-- NOME --}}
                    <h3>
                        {{Auth::user()->name}}
                    </h3>
                  {{-- CARGO --}}
                    <h6>
                        Game Master
                    </h6>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-6">
                        <label>Username</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{Auth::user()->username}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Name</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{Auth::user()->name}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Email</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{Auth::user()->email}}</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
          <div class="col-md-4">
                <div class="profile-work">
                    <br>
                    <span class="btn btn-warning" style="width: 100%">Game Master</span><br />
                    <hr>
                    <span>Data de Registro: 15 de março</span><br />
                    <span>Ultima vez online: 15 de março</span>
                    <p>INFORMAÇÕES PESSOAIS</p>
                    <span>Principal Ficha: Thorn Fulgor</span><br />
                    <span>Principal Campanha: Campanha 1</span></span><br />
                    <span>Interesses: RPG</span><br />
                    <span>Idade: 26</span><br />
                    <span>Localização: Vitoria-ES</span><br />
                </div>
            </div>
            <div class="col-md-8" style="border-left: dotted; border-color: #d1820d;">
                <ul class="nav nav-tabs" id="myTab" role="tablist" style="border-bottom:none">
                    <li class="nav-item">
                        <a class="nav-link active" id="fichas-tab" data-toggle="tab" href="#fichas" role="tab" aria-controls="fichas" aria-selected="true">Fichas</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="camp-tab" data-toggle="tab" href="#camp" role="tab" aria-controls="camp" aria-selected="false">Campanhas</a>
                    </li>
                </ul>
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="fichas" role="tabpanel" aria-labelledby="fichas-tab">
                        <div class="card-deck" style="padding-top: 20px;">
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Thorn Fulgor</h5>
                                    <p class="card-text">
                                        LV: 13 | HP: 46/70
                                    </p>

                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA FICHA</small>
                                    </a>
                                </div>
                            </div>
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">Char 2</h5>
                                <p class="card-text"></p>
                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA FICHA</small>
                                    </a>
                                </div>
                            </div>
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">Char 3</h5>
                                <p class="card-text"></p>
                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA FICHA</small>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="camp" role="tabpanel" aria-labelledby="camp-tab">
                       <div class="card-deck" style="padding-top: 20px;">
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Campanha 1</h5>
                                    <p class="card-text">
                                        Jogadores
                                        Mestre
                                    </p>

                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA CAMPANHA</small>
                                    </a>
                                </div>
                            </div>
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">Campanha 1</h5>
                                <p class="card-text"></p>
                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA CAMPANHA</small>
                                    </a>
                                </div>
                            </div>
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">Campanha 3</h5>
                                <p class="card-text"></p>
                                </div>
                                <div class="card-footer border-warning text-white" style="text-align: center">
                                    <a href="">
                                        <small class="text-muted">IR PARA CAMPANHA</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection
