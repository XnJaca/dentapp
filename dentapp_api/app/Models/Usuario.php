<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';

    protected $fillable = [
        'id',
        'cedula',
        'nombre',
        'nombre_emer',
        'apellido_1',
        'apellido_2',
        'email',
        'pass',
        'fecha_nacimiento',
        'direccion',
        'telefono',
        'telefono_emer',
        'genero_id',
    ];

    // ignore time_stamps
    public $timestamps = false;

    // Relation usuario genero
    public function genero()
    {
        return $this->belongsTo(Genero::class);
    }

    
}
