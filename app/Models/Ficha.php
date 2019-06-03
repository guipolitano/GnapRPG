<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Racas;

class Ficha extends Model
{
    protected $table = 'dnd.fichas';
    protected $primaryKey = 'IdFicha';
    public $fillable = ['IdRaca'];
    public $timestamps = false;

    public function racas() {
        return $this->hasOne('App\Models\Racas', 'IdRaca', 'IdRaca');
    }
}
