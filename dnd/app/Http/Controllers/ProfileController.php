<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use App\Profile;
use App\User;
use Auth;

class ProfileController extends Controller
{
    public function show($username){
        // $user_id = DB::table('users')
        //     ->select('users.id')
        //     ->where(['users.username'=>$username])
        //     ->first();

        // $profile = DB::table('users')
        //     ->join('profiles', 'users.id', '=', 'profiles.user_id')
        //     ->select('users.*', 'profiles.*')
        //     ->where(['profiles.user_id'=>$user_id->id])
        //     ->first();

        $user_id = User::select('id')->where('username', $username)->first();
        $profile = User::find($user_id)->user();
        $profile_data = $profile;

        echo '<pre>';
        var_dump($profile); exit;
        echo '</pre>';






      return view('perfil/perfil', ['profile'=>$profile]);
    }


    public function edit(){
        $user_id = Auth::user()->id;
        $profile = DB::table('users')
            ->join('profiles', 'users.id', '=', 'profiles.user_id')
            ->select('users.*', 'profiles.*')
            ->where(['profiles.user_id'=>$user_id])
            ->get();
    }
}
