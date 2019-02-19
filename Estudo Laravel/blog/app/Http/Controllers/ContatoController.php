<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contato;

class ContatoController extends Controller
{
  public function index(){
    $contatos = [
      (object)["nome"=>"Maria","tel"=>"6567455"],
      (object)["nome"=>"Pedro","tel"=>"7854577"]

    ];
    $contato = new Contato();
    $con = $contato->lista();
    dd($con->nome);

    return view('contato.index', compact('contatos'));
  }

  public function criar(Request $reg){

    dd($reg->all());
    return "Esse é o Criar do ContatoController";
  }

  public function editar(){
    return "Esse é o Editar do ContatoController";
  }
}
