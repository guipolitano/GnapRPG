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

Route::get('/alias', function () {
    return view('alias/alias');
});

Route::get('/ficha', function () {
    return view('fichas/ficha');
});

Route::get('/ficha/novaficha', function () {
    return view('fichas/novaficha/novaficha');
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

Route::get('/redirect', 'SocialAuthFacebookController@redirect');

Route::get('/callback', 'SocialAuthFacebookController@callback');

Route::get('/home', 'HomeController@index')->name('home');
