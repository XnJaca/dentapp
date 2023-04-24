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
        'medico_tratamiento_id'
    ];

    // Relation with cita
    public function cita()
    {
        return $this->belongsTo(Cita::class);
    }

    // Relation with paciente
    public function paciente()
    {
        return $this->hasMany(Paciente::class);
    }

    // Relation with tratamiento
    public function tratamiento()
    {
        return $this->belongsTo(Tratamiento::class);
    }

    //relation with medicamentotratamiento
    public function medicamentoTratamiento()
    {
        return $this->belongsTo(MedicamentoTratameinto::class);
    }

    
}
