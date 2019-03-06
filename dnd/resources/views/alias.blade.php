@extends('index')
<link rel="stylesheet" href="{{ asset('css/alias.css') }}">
@section('container')

<div class="card-login">
    <div class="card" style="background-color: rgb(206, 138, 72)">
        <div class="card-header" style="background-color: #3a3f48;">CRIAR ALIAS</div>
        <div class="card-body">
            <div class="form-group">
                <div class="form-group">
                    <label class="col-md-4 control-label" for="selectCreature"><b>Criatura</b></label>
                    <div class="col-md-15">
                        <select id="selectCreature" name="criatura" class="form-control">
                            <option value="">-Selecione a Criatura-</option>
                        </select>

                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-4 control-label" for="selectAttack"><b>Ataque</b></label>
                    <div class="col-md-15">
                        <select id="selectAttack" name="ataque" class="form-control">
                            <option value="">-Selecione o Ataque-</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-4 control-label" for="radios"><b>Tipo</b></label>
                    <div class="col-md-15">
                        <label class="radio-inline" for="radios-0">
                            <input class="tipoGolpe" type="radio" name="radios" id="radios-0" value="attack" checked>Attack</label>
                        <label class="radio-inline" for="radios-1">
                            <input class="tipoGolpe" type="radio" name="radios" id="radios-1" value="cast">
                            Cast
                        </label>

                    </div>
                </div>

                <div class="form-group" style="margin-bottom:5px">

                    <label class="col-md-4 control-label" for="checkboxes"><b>Alvo(s)</b></label>

                    <div id="listaAlvos" class="col-md-15">

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-0" id="deleteLabel-0">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-0" value="Nyrvus">
                            Nyrvus

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar" value="0"> <sup><i class="fas fa-times fa-sm" id="0"></i></sup> </a>

                        </label>

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-1" id="deleteLabel-1">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-1" value="Guughul">
                            Guughul

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar" value="1"> <sup><i class="fas fa-times fa-sm" id="1"></i></sup> </a>

                        </label>

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-2" id="deleteLabel-2">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-2" value="Pica">
                            Pica

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar"> <sup><i class="fas fa-times fa-sm" id="2"></i></sup> </a>

                        </label>

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-3" id="deleteLabel-3">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-3" value="Cox">
                            Cox

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar"> <sup><i class="fas fa-times fa-sm" id="3"></i></sup> </a>

                        </label>

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-4" id="deleteLabel-4">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-4" value="Galo">
                            Galo

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar"> <sup><i class="fas fa-times fa-sm" id="4"></i></sup></a>

                        </label>

                        <label class="checkbox-inline btn btn-secondary btn-sm" style="border:0px; margin:2px" for="checkboxes-5" id="deleteLabel-5">
                            <input class="checkbox" type="checkbox" style="display:none" name="alvo[]" id="checkboxes-5" value="Salva Burros">
                            Salva Burros

                            <a href="javascript:void(0);" style="color:rgb(150, 1, 1)" class="deletar"> <sup><i class="fas fa-times fa-sm" id="5"></i></sup> </a>

                        </label>

                    </div>

                    <div class="input-group" style="margin-top:3px; margin-bottom:0px">
                        <input id="textAlvo" type="text" class="form-control" placeholder="Adicionar Alvo" aria-label="Adicionar Alvo" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button id="addAlvos" class="btn btn-success" type="button">Add</button>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-15">
                        <textarea class="form-control" id="textarea" name="textarea" placeholder="!i a"></textarea>
                    </div>
                </div>
            </div>
            <button class="btn btn-warning" data-container="body" data-toggle="popover" data-placement="right" data-content="Copiado!" onclick="copyPaste()">Copiar</button>
        </div>
    </div>


    @endsection
