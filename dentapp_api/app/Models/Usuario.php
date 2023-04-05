<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';
    protected $primaryKey = 'id';

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
        'estado'
    ];

    // ignore time_stamps
    public $timestamps = false;

    // Relation usuario genero
    public function genero()
    {
        return $this->belongsTo(Genero::class);
    }

    // Relacion a medico
    public function medico()
    {
        return $this->hasOne(Medico::class);
    }

    // Relation usuario tipoUsuarioxUsuario
    public function tipoUsuarioxUsuario()
    {
        return $this->hasMany(TipoUsuarioxUsuario::class);
    }

    
}
