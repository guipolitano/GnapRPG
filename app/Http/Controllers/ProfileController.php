<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use App\Profile;
use App\User;
use Auth;

class ProfileController extends Controller
{
    public function show($username){

        $user_id = User::select('id')->where('username', $username)->first();
        $user = User::find($user_id->id);

        return view('perfil/perfil', compact('user'));
    }


    public function edit(Request $request){
        $user_id = Auth::user()->id;
        $username = Auth::user()->username;
        $user = User::find($user_id)->profile;

        $this->validate($request,[
        'main_sheet'=>'nullable|max:4|integer',
        'main_camp'=>'nullable|max:4|integer',
        'age' => 'nullable|max:150|integer',
        'gender'=> 'nullable|max:3|integer',
        'hobbies'=>'nullable|max:255',
        'location'=>'nullable|max:255',
        'description'=>'nullable|max:255',
        'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            $nameFile = null;
            $extension = $request->avatar->extension();
            $nameFile = "{$username}-{$user_id}.{$extension}";

            $upload = $request->avatar->storeAs('images/avatar', $nameFile);
            if(!$upload){

                return redirect()
                    ->back()
                    ->with('error', 'Falha ao fazer upload')
                    ->withInput();
            }
        };

        $user->update([
            'main_sheet'=>$request->main_sheet,
            'main_camp'=>$request->main_camp,
            'age' => $request->age,
            'gender'=> $request->gender,
            'hobbies'=>$request->hobbies,
            'location'=>$request->location,
            'description'=>$request->description,
            'avatar'=>$upload
            ]);

        return redirect('/perfil/'.Auth::user()->username)->with('success', 'Perfil atualizado!');
    }
}
