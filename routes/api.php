<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'racas'], function () {
    Route::get('/', 'Ficha\RacasController@listar')->name('racas.listar');

    Route::post('/cadastrar', 'Ficha\RacasController@cadastrar')->name('racas.cadastrar');

    Route::get('/{raca}', 'Ficha\RacasController@exibir')->name('racas.exibir');

    Route::put('/editar/{raca}', 'Ficha\RacasController@editar')->name('racas.editar');

    Route::delete('/deletar/{raca}', 'Ficha\RacasController@deletar')->name('racas.deletar');
});

