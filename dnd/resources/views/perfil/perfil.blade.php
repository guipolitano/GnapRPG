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
( [IMAGEM]
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
    <div class="row">
        <div class="col-md-4" style="height: 100%">
            <div class="profile-img">
                <img src="{{$profile->avatar}}" alt="" />
            </div>

            <div class="profile-work">
                <br>
                <span class="btn btn-warning" style="width: 100%">Game Master</span><br />
                <hr>
                <span>Data de Registro: {{date('d/m/Y', strtotime($profile->created_at))}}</span><br />
                <span>Ultima vez online: 15 de março</span>
                <p>INFORMAÇÕES PESSOAIS</p>
                <span>Principal Ficha: {{$profile->main_sheet}}</span><br />
                <span>Principal Campanha: {{$profile->main_camp}}</span></span><br />
                <span>Interesses: RPG</span><br />
                <span>Idade: {{$profile->age}}</span><br />
                <span>Localização: {{$profile->location}}</span><br />
            </div>
        </div>

    <div class="col-md-8" style="border-left: dotted; border-color: #d1820d; height: 100%">
        <div class="profile-head">
            <div class="row">
                <div class="col col-sm-8">
                    <h3>
                        {{$profile->name}}
                    </h3>
                    <h6>
                        Game Master
                    </h6>
                </div>
                @guest
                @else
                @if(Auth::user()->username == $profile->username)
                <div class="col col-sm-4" style="align-self: center">
                    <button type="button" class="profile-edit-btn" data-toggle="modal" data-target="#editarPerfil">Editar
                        Perfil</button>
                </div>
                {{-- MODAL --}}
                <div class="modal fade" id="editarPerfil" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content" style="background-color: #31353d; border: ridge; border-color: #e9910f; color: #818896;">
                            <script type="text/javascript">
                                function isNumber(evt) {
                                    evt = (evt) ? evt : window.event;
                                    var charCode = (evt.which) ? evt.which : evt.keyCode;
                                    if ((charCode > 31 && charCode < 48) || charCode > 57) {
                                        return false;
                                    }
                                    return true;
                                }

                            </script>

                            <div class="modal-header" style="color: #e9910f">
                                <h4><span class="fas fa-user-edit"></span> Editar Perfil</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form role="form" method="POST" action="{{route('perfil.edit', ['username' => Auth::user()->username])}}">

                                    <div class="form-group">
                                        <label for="main_sheet"><span class="fa fa-address-card"></span>
                                            Principal Ficha</label>
                                        <select class="form-control">
                                            <option value="1">Thorn</option>
                                            <option value="2">Ann</option>
                                            <option value="3">Luna</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="main_camp"><span class="fas fa-book-reader"></span>
                                            Principal Campanha</label>
                                        <select class="form-control">
                                            <option value="1">Campanha 1</option>
                                            <option value="2">Campanha 2</option>
                                        </select>
                                    </div>
                                    <div class="row">
                                        <div class="col">

                                            <div class="form-group">
                                                <label for="gender"><span class="fas fa-male"></i></span><span
                                                        class="fas fa-female"></i></span> Gênero </label>
                                                <select class="form-control">
                                                    <option value="1">Masculino</option>
                                                    <option value="2">Feminino</option>
                                                    <option value="3">Outro</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div class="col">

                                            <div class="form-group">
                                                <label for="age"><span class="far fa-calendar-alt"></span>
                                                    Idade </label>
                                                <input type="text" class="textfield form-control" value="" id="extra7"
                                                    name="extra7" onkeypress="return isNumber(event)" maxlength="3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="interesses"><span class="fas fa-feather-alt"></span>
                                            Interesses </label>
                                        <input class="form-control" type="text" maxlength="70">
                                    </div>

                                    <div class="form-group">
                                        <label for="location"><span class="fas fa-location-arrow"></span>
                                            Localização </label>
                                        <input class="form-control" type="text" maxlength="70">
                                    </div>

                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-success" style="width: 50%">Editar</button>
                                        <button type="submit" class="btn btn-secondary" data-dismiss="modal"
                                            style="width: 50%">Cancelar</button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                @endif
                @endguest

                {{-- --}}
        </div>
        <hr>
        <ul class="nav nav-tabs" id="myTab" role="tablist" style="border-bottom:none; margin-bottom: 0;">
                    <li class="nav-item">
                        <a class="nav-link active" id="fichas-tab" data-toggle="tab" href="#fichas" role="tab"
                            aria-controls="fichas" aria-selected="true">Fichas</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="camp-tab" data-toggle="tab" href="#camp" role="tab" aria-controls="camp"
                            aria-selected="false">Campanhas</a>
                    </li>
                </ul>
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="fichas" role="tabpanel" aria-labelledby="fichas-tab">
                        <div class="card-deck" style="padding-top: 20px;">
                            <div class="card text-white bg-transparent border-warning">
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="Card image cap">
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
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="Card image cap">
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
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="Card image cap">
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
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="Card image cap">
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
                                <img class="card-img-top" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="Card image cap">
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
                        </div>
                    </div>
                </div>
    </div>
</div>
@endsection
