<?php

namespace App\Http\Controllers\Ficha;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ficha\Raca;

class RacasController extends Controller
{
    public function listar()
    {
        $racas = Raca::all();

        return response()->json($racas);
    }

    public function cadastrar(Request $request)
    {
        $raca = Raca::create($request->all());

        return response()->json([
            'message' => 'Nova Raça Cadastrada!',
            'task' => $raca
        ]);
    }

    public function exibir(Raca $raca)
    {
        return $raca;
    }

    public function editar(Request $request, Raca $raca)
    {
        $raca->update($request->all());

        return response()->json([
            'message' => 'Raça Atualizada',
            'raca' => $raca
        ]);
    }

    public function deletar(Raca $raca)
    {
        $raca->delete();

        return response()->json([
            'message' => 'Raça deletada!'
        ]);
    }
}
