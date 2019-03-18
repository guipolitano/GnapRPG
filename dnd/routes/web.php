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


Route::get('/alias', function () {
    return view('alias/alias');
});

Route::get('/ficha', function () {
    return view('fichas/ficha');
});

Route::get('/database', function () {
    return view('database/database');
});

Route::get('/tabletop', function () {
    return view('tabletop/tabletop');
});

Route::get('/perfil/{username}', 'ProfileController@show')->name('perfil');
Route::patch('/perfil/{username}', 'ProfileController@update')->name('perfil.update');

Auth::routes();

Route::get('/redirect', 'SocialAuthFacebookController@redirect');

Route::get('/callback', 'SocialAuthFacebookController@callback');

Route::get('/home', 'HomeController@index')->name('home');
