<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoUsuario extends Model
{
    use HasFactory;
    protected $table = 'tipo_usuario';

    protected $fillable = [
        'id',
        'descripcion',
    ];

    public $timestamps = false;

    // Relation with tipoUsuarioxUsuario
    public function tipoUsuarioxUsuario()
    {
        return $this->hasMany(TipoUsuarioxUsuario::class);
    }

}
