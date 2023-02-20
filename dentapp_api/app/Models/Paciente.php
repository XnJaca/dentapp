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
        'alergia_paciente_id',
        'enfermedad_paciente_id'
    ];

    // Relation with tipoSangre
    public function tipoSangre()
    {
        return $this->belongsTo(TipoSangre::class);
    }

    // Relation with alergiaPaciente
    public function alergiaPaciente()  
    {
        return $this->belongsTo(AlergiaPaciente::class);
    }

    // Relation with enfermedadPaciente
    public function enfermedadPaciente()
    {
        return $this->belongsTo(EnfermedadPaciente::class);
    }

    // Relation with citapaciente
    public function citaPaciente()
    {
        return $this->hasMany(CitaPaciente::class);
    }

    // Relation with usuario
    public function usuario()
    {
        return $this->hasOne(Usuario::class, 'id', 'id');
    }
}
