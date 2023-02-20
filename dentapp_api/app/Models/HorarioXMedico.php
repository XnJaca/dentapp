<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorarioXMedico extends Model
{
    use HasFactory;
    protected $table = 'horario_x_medico';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'medico_id',
        'horario_id'
    ];

    // Relation with medico
    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }

    // Relation with horario
    public function horario()
    {
        return $this->belongsTo(Horario::class);
    }
}
