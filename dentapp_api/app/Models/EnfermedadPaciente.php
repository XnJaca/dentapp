<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnfermedadPaciente extends Model
{
    use HasFactory;

    protected $table = 'enfermedad_paciente';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'enfermedad_id',
        'paciente_id'
    ];

    // Relation with enfermedad
    public function enfermedad()
    {
        return $this->belongsTo(Enfermedad::class);
    }

    // Relation with paciente
    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }
}
