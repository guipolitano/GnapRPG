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
            <div class="col-md-6">
                <div class="profile-head">
                  {{-- NOME --}}
                    <h5>
                        {{Auth::user()->name}}
                    </h5>
                  {{-- CARGO --}}
                    <h6>
                        Game Master
                    </h6>

                    <ul class="nav nav-tabs" id="myTab" role="tablist">

                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Informações</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="col-md-2">
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>
        </div>
        <div class="row">
          <div class="col-md-4">
                <div class="profile-work">
                    <br>
                    <span class="btn btn-info" style="width: 100%">Game Master</span><br />
                    <a href="">Data de Registro: 15 de março</a><br />
                    <a href="">Ultima vez online: 15 de março</a>
                    <p>INFORMAÇÕES PESSOAIS</p>
                    <a href="">Principal Ficha: Thorn Fulgor</a><br />
                    <a href="">Principal Campanha: Campanha 1</a><br />
                    <a href="">Interesses: RPG</a><br />
                    <a href="">Idade: 26</a><br />
                    <a href="">Localização: Vitoria-ES</a><br />
                </div>
            </div>
            <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Experience</label>
                            </div>
                            <div class="col-md-6">
                                <p>Expert</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Hourly Rate</label>
                            </div>
                            <div class="col-md-6">
                                <p>10$/hr</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Total Projects</label>
                            </div>
                            <div class="col-md-6">
                                <p>230</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>English Level</label>
                            </div>
                            <div class="col-md-6">
                                <p>Expert</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Availability</label>
                            </div>
                            <div class="col-md-6">
                                <p>6 months</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label>Your Bio</label><br />
                                <p>Your detail description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection
