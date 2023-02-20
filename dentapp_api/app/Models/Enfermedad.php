<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfermedad extends Model
{
    use HasFactory;

    protected $table = 'enfermedades';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'nombre',
        'descripcion'
    ];

    // Relation with enfermedadPaciente
    public function enfermedadPaciente()
    {
        return $this->hasMany(EnfermedadPaciente::class);
    }
}
