<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;

    protected $table = 'pacientes';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'tipo_sangre_id',
    ];

    // Relation with tipoSangre
    public function tipoSangre()
    {
        return $this->belongsTo(TipoSangre::class);
    }

    // Relation with alergiaPaciente


    // Relation with enfermedadPaciente
    public function enfermedadPaciente()
    {
        return $this->belongsTo(EnfermedadPaciente::class);
    }

    // Relation with citapaciente
    public function citas()
    {
        return $this->hasManyThrough(
            Cita::class,
            CitaPaciente::class,
            'paciente_id',
            'id',
            'id',
            'cita_id'
        )->with('tratamiento');
    }
    // Relation with usuario
    public function usuario()
    {
        return $this->hasOne(Usuario::class, 'id', 'id');
    }
    public function alergias()
    {
        return $this->hasManyThrough(Alergia::class, AlergiaPaciente::class, 'paciente_id', 'id', 'id', 'alergia_id');
    }

    public function enfermedades()
    {
        return $this->hasManyThrough(Enfermedad::class, EnfermedadPaciente::class, 'paciente_id', 'id', 'id', 'enfermedad_id');
    }
    // Relation with tratamiento
    
}
