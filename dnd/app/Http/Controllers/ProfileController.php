<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Auth;

class ProfileController extends Controller
{
    public function show($username){
      return view('perfil/perfil', ['username'=>$username]);
    }

    public function update(Request $request){
        $user_id = Auth::user()->id;
        $profile = DB::table('users')
            ->join('profiles', 'users.id', '=', 'profiles.user_id')
            ->select('users.*', 'profiles.*')
            ->where(['profiles.user_id'=>$user_id])
            ->get();
            return $profile;
            exit();
    }
}
