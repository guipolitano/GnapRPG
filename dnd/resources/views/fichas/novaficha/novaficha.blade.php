@extends('index')
<link rel="stylesheet" href="{{ asset('css/novaficha.css') }}">
@section('container')
<div class="container emp-sheet" style="max-width: 40%;">
    <form role="form" method="POST" enctype="multipart/form-data" action="">
        @csrf
        <div class="row" style="padding-left:3px; height:45px">
            <div class="col col-sm-10">
                {{-- NAV TABS --}}
                <ul class="nav nav-tabs" id="myTab" role="tablist" style="border-bottom:none; margin-bottom: 0;">
                    <li class="nav-item">
                        <a class="nav-link active" id="principal-tab" data-toggle="tab" href="#principal" role="tab" aria-controls="principal" aria-selected="true">PRINCIPAL</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="caracteristicas-tab" data-toggle="tab" href="#caracteristicas" role="tab" aria-controls="raca" aria-selected="false">CARACTERÍSTICAS</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="camp-tab" data-toggle="tab" href="#magias" role="tab" aria-controls="camp" aria-selected="false">MAGIAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="camp-tab" data-toggle="tab" href="#equipamentos" role="tab" aria-controls="camp" aria-selected="false">EQUIPAMENTOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="camp-tab" data-toggle="tab" href="#talentos" role="tab" aria-controls="camp" aria-selected="false">TALENTOS</a>
                    </li>
                </ul>
            </div>
            <div class="col col-sm-2 preview-ficha">
                <a href="#" data-toggle="modal" data-target="#mostrar-info"><i class="far fa-file-alt" style="font-size:25px; margin-left:16%"></i></a>
                <p>Preview</p>
            </div>
            {{-- FIM NAV TABS --}}
        </div>

        <div class="row" style="padding-top:5px; padding-left:15px; padding-right:5px">
            <div class="tab-content sheet-tab" id="myTabContent" style="width:98%">
                {{-- TAB PRINCIPAL --}}
    @include('fichas.novaficha.principal') {{--FIM TAB PRINCIPAL--}} {{-- TAB CARACTERISTICAS --}}
    @include('fichas.novaficha.caracteristicas')
    @include('fichas.novaficha.magias')
    @include('fichas.novaficha.equipamentos')
    @include('fichas.novaficha.talentos')
            </div>
        </div>
    </form>
</div>
    @include('fichas.novaficha.modalInfo')

<script src="{{asset('/js/fichas/novaficha/index.js')}}"></script>
@endsection
