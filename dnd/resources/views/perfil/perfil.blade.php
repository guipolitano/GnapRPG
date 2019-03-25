@extends('index')
<link rel="stylesheet" href="{{ asset('css/perfil.css') }}">
@section('container')
<div class="container emp-profile">
    <div class="row">
        <div class="col-md-3" style="height: 100%">
            <div class="profile-img">
                <img src="{{url($user->profile->avatar)}}" alt=""/><br><br>
                <span class="btn btn-{{$user->admin == 1 ? "danger": "info"}}" style="width: 220px">{{$user->admin == 1 ? "ADMIN": "USUÁRIO"}}</span><br />
            </div>

            <div class="profile-work">
                <hr>
                <span>Data de Registro: {{date('d/m/Y', strtotime($user->created_at))}}</span><br />
                <span>Ultima vez online: 15 de março</span>
                <p>INFORMAÇÕES PESSOAIS</p>
                <span>Principal Ficha: {{$user->profile->main_sheet}}</span><br />
                <span>Principal Campanha: {{$user->profile->main_camp}}</span></span><br />
                <span>Gênero:
                    @if($user->profile->gender==1)
                    Masculino
                    @elseif($user->profile->gender==2)
                    Feminino
                    @elseif($user->profile->gender==3)
                    Outro
                    @else
                    Não informado
                    @endif
                </span><br />
                <span>Interesses: {{$user->profile->hobbies}} </span><br />
                <span>Idade: {{$user->profile->age}}</span><br />
                <span>Localização: {{$user->profile->location}}</span><br />
            </div>
        </div>

    <div class="col-md-9" style="border-left: dotted; border-color: #d1820d; height: 100%">
        <div class="profile-head" style="padding-left:15px">
            <div class="row">
                <div class="row" style="width:100%">
                    <div class="col">
                        <h3>
                            {{$user->name}}
                        </h3>
                    </div>
                @guest
                @else
                @if(Auth::user()->username == $user->username)
                <div class="col col-sm-3" style="align-self: center; text-align:center">
                    <button type="button" class="profile-edit-btn" data-toggle="modal" data-target="#editarPerfil">Editar
                        Perfil</button>
                </div>
                {{-- MODAL --}}
                <div class="modal fade" id="editarPerfil" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content" style="background-color: #31353d; border: ridge; border-color: #e9910f; color: #818896;">

                            <div class="modal-header" style="color: #e9910f">
                                <h4><span class="fas fa-user-edit"></span> Editar Perfil</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form role="form" method="POST" enctype="multipart/form-data" action="{{route('perfil.edit', ['username' => Auth::user()->username])}}">
                                    @csrf
                                    <div class="row" style="padding-bottom:3px">
                                        <div class="col"></div>
                                        <div class="col">
                                            <div class="profile-img" style="height: 94%;">
                                                <img id="imgPreview" src="{{url($user->profile->avatar)}}" alt=""/><br><br>
                                            </div>
                                        </div>
                                        <div class="col"></div>

                                    </div>
                                    <div class="row" style="padding-bottom:3px; width:103%; padding-left:15px">
                                        <div class="custom-file form-group">
                                            <input type="file" class="custom-file-input form-control" id="customFile" name="avatar" onchange="previewFile()">
                                            <label class="custom-file-label" id="text-preview" for="customFile">Formatos: jpg, png ou bmp</label>
                                        </div>
                                   </div>

                                    <div class="row">

                                        <div class="col">
                                            <div class="form-group">
                                                <label for="main_sheet"><span class="fa fa-address-card"></span>
                                                    Principal Ficha</label>
                                                <select class="form-control" name="main_sheet">
                                                    <option value="0">--Selecione--</option>
                                                    <option value="1">Thorn Fulgor (Lv: 14/Bárbaro)</option>
                                                    <option value="2">Ann</option>
                                                    <option value="3">Luna</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="form-group">
                                                <label for="main_camp"><span class="fas fa-book-reader"></span>
                                                    Principal Campanha</label>
                                                <select class="form-control" name="main_camp">
                                                    <option value="0">--Selecione--</option>
                                                    <option value="1">Campanha 1</option>
                                                    <option value="2">Campanha 2</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col">
                                            <div class="form-group">
                                                <label for="gender"><span class="fas fa-male"></i></span><span
                                                        class="fas fa-female"></i></span> Gênero </label>
                                                <select class="form-control" name="gender">
                                                    <option value="0">--Selecione--</option>
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
                                                <input type="text" class="textfield form-control" value="{{$user->profile->age!=null ? $user->profile->age : ''}}" id="age"
                                                    name="age" onkeypress="return isNumber(event)" maxlength="3" placeholder="{{$user->profile->age!=null ? $user->profile->age : ''}}"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="interesses"><span class="fas fa-feather-alt"></span>
                                            Interesses </label>
                                        <input class="form-control" name="hobbies" type="text" maxlength="70" value="{{$user->profile->hobbies!=null ? $user->profile->hobbies : ''}}" placeholder="{{$user->profile->hobbies!=null ? $user->profile->hobbies : ''}}">
                                    </div>

                                    <div class="form-group">
                                        <label for="location"><span class="fas fa-location-arrow"></span>
                                            Localização </label>
                                        <input class="form-control" name="location" type="text" maxlength="70" value="{{$user->profile->location!=null ? $user->profile->location : ''}}" placeholder="{{$user->profile->location!=null ? $user->profile->location : ''}}">
                                    </div>

                                    <div class="form-group">
                                        <label for="interesses"><span class="fas fa-feather-alt"></span>
                                            Descrição </label>
                                        <textarea class="form-control" name="description" rows="4" maxlength="212">{{$user->profile->description!=null ? $user->profile->description : ''}}</textarea>
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
                </div>
                <div class="row" style="width:100%">
                </div>
                <div class="row" style="width:100%">
                    <div class="col">

                        <h6 style="color:white">
                            <i class="fas fa-quote-left" style="opacity: 0.2; font-size:20px; font-style:italic"></i> {{$user->profile->description!=null ? $user->profile->description : "..."}} <i class="fas fa-quote-right" style="opacity: 0.2; font-size:20px; font-style:italic"></i>
                        </h6>

                    </div>
                </div>
          </div>
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
                                        Jogadores:<br>
                                        -Politano (Thorn Fulgor [Bárbaro|Lv 13|HP:30/40])<br>
                                        Mestre: Largadao<br>
                                        Localização Atual: Planícies de Eidolon
                                    </p>
                                    <footer class="blockquote-footer"><cite title="localizacao">Localização Atual: Planícies de Eidolon</cite></footer>

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
                                    <h5 class="card-title">Campanha 2</h5>
                                    <p class="card-text">
                                        Jogadores:<br>
                                        -Politano (Thorn Fulgor [Bárbaro|Lv 13|HP:30/40])<br>
                                        Mestre: Largadao<br>
                                        Localização Atual: Planícies de Eidolon
                                    </p>
                                    <footer class="blockquote-footer"><cite title="localizacao">Localização Atual: Planícies de Eidolon</cite></footer>
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

<script src="{{asset("js/profile.js")}}"></script>

@endsection
