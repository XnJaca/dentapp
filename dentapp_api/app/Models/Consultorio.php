<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultorio extends Model
{
    use HasFactory;
    protected $table = 'consultorios';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'nombre',
        'ubicacion',
        'descripcion',
        'cedula_juridica'
    ];

    // Relation with consultorioxusuario
    public function consultorioxusuario()
    {
        return $this->hasMany(ConsultorioXUsuario::class);
    }

    // Relation with cita
    public function cita()
    {
        return $this->hasMany(Cita::class);
    }
}
