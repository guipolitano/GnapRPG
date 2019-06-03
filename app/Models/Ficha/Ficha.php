<?php

namespace App\Models\Ficha;

use Illuminate\Database\Eloquent\Model;

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
