<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard(){
        if(Auth::user()->admin != 1){
            return redirect('/')->with('status', 'Acesso não autorizado');
        }else{
            return view('dashboard.dashboard');
        }
    }
}
