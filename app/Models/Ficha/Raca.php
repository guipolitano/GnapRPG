<?php

namespace App\Models\Ficha;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Raca extends Model
{
    protected $table = 'dnd.racas';
    protected $fillable = [
        'Nome', 'forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma', 'Deslocamento', 'TratosRaciais', 'Tamanho'
    ];
    protected $primaryKey = 'IdRaca';
    public $timestamps = false;

    public function get($idRaca)
    {
        $query = DB::table($this->table);
        return $query->where('IdRaca', $idRaca)->get();
    }

    public function ficha(){
        return $this->belongsTo(Ficha::class);
    }

}
