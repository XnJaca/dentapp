<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    use HasFactory;
    protected $table = 'horario';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'dia',
        'hora_inicio',
        'hora_final'
    ];

    // Relation with horarioXMedico
    public function horarioXMedico()
    {
        return $this->hasMany(HorarioXMedico::class);
    }
}
