<?php

namespace App\Http\Controllers\Fichas;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ficha;
use App\Models\Racas;

class fichaController extends Controller
{
    public function index(){
        $racas = Racas::all();
        $dados = ['racas'];
        return view('fichas.novaficha.novaficha', compact($dados));
    }

}
