<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show($username){
      return view('perfil/perfil', ['username'=>$username]);
    }

    public function update(Request $request){

    $this->validate($request, [
      'avatar' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
    ]);

    $filename = Auth::id().'_'.time().'.'.$request->avatar->getClientOriginalExtension();
    $request->avatar->move(public_path('uploads/avatars'), $filename);

    $user = Auth::user();
    $user->avatar = $filename;
    $user->save();

    return redirect()->route('perfil');
    }
}
