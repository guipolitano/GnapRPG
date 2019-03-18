<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class profileModel extends Model
{
    protected $fillable = [
        'main_sheet', 'main_camp', 'age', 'location', 'avatar'
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
