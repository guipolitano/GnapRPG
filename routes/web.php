<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

//DASHBOARD

Route::get('/dashboard', 'DashboardController@dashboard');

//MAIN

Route::group(['prefix' => 'ficha'], function () {
    Route::get('/', function () {
        return view('fichas.index');
    });
    Route::group(['prefix' => 'novaficha'], function () {
        Route::get('/', 'Fichas\fichaController@index')->name('novaficha.index');
        Route::get('/bonus-raca/{IdRaca}', 'Fichas\fichaController@getBonusRaca');
    });
});

Route::get('/alias', function () {
    return view('alias/alias');
});




Route::get('/database', function () {
    return view('database/database');
});

Route::get('/tabletop', function () {
    return view('tabletop/tabletop');
});

Route::get('/perfil/{username}', 'ProfileController@show')->name('perfil');

Route::post('/perfil/{username}/edit', 'ProfileController@edit')->name('perfil.edit');

Auth::routes();
