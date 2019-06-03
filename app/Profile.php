<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'main_sheet', 'main_camp', 'age', 'gender', 'hobbies', 'location', 'avatar', 'description'
    ];
    protected $primaryKey = 'user_id';

    public $timestamps = false;

    public function user(){
        return $this->belongsTo(User::class);
    }
}
