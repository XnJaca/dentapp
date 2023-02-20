<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoSangre extends Model
{
    use HasFactory;
    protected $table = 'tipo_sangre';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'descripcion',
    ];

    // Relation with paciente
    public function paciente()
    {
        return $this->hasMany(Paciente::class);
    }
}
