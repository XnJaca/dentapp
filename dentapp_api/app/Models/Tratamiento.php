<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tratamiento extends Model
{
    use HasFactory;

    protected $table = 'tratamiento';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'medico_id',
        'tipo_id',
        'detalle',
        'total_medicamento'
    ];

    // R
    public function cita()
    {
        return $this->hasOne(Cita::class);
    }

    // Relation with medico
    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }

    // Relation with tipoTratamiento
    public function tipoTratamiento()
    {
        return $this->belongsTo(TipoTratamiento::class);
    }
    // retalation with consultorio
    public function consultorio()
    {
        return $this->belongsTo(Consultorio::class);
    }
    // Relation with citapaciente
    public function citaPaciente()
    {
        return $this->hasMany(CitaPaciente::class);
    }
}
