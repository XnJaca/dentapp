<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultorioXUsuario extends Model
{
    use HasFactory;
    protected $table = 'consultorio_x_usuario';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'consultorio_id',
        'usuario_id'
    ];

    // Relation with consultorio
    public function consultorio()
    {
        return $this->belongsTo(Consultorio::class);
    }

    // Relation with usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
}
