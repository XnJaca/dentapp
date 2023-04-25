<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CitaPaciente extends Model
{
    use HasFactory;
    protected $table = 'cita_paciente';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'cita_id',
        'paciente_id',
        'tratamiento_id',
        'medico_id',
    ];

    // Relation with cita
    // public function cita()
    // {
    //     return $this->hasManyThrough(
    //         Cita::class,
    //         CitaPaciente::class,
    //         'paciente_id',
    //         'id',
    //         'id',
    //         'cita_id'
    //     )->with('tratamiento', 'paciente', 'medico');
    // }
    public function cita()
    {
        return $this->belongsTo(Cita::class);
    }

    // Relation with paciente
    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    // Relacion con medico
    // public function medico()
    // {
    //     return $this->belongsTo(Medico::class);
    // }


    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }

    //relation with medicamentotratamiento
    // public function medicamentoTratamiento()
    // {
    //     return $this->belongsTo(MedicamentoTratameinto::class);
    // }
}
