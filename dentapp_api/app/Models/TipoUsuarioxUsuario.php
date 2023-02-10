<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoUsuarioxUsuario extends Model
{
    use HasFactory;

    protected $table = 'tipo_x_usuario';

    // Primary key
    public $primaryKey = 'id';

    // Timestamps
    public $timestamps = false;

    protected $fillable = [
        'usuario_id',
        'tipo_id',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function tipo()
    {
        return $this->belongsTo(TipoUsuario::class);
    }
}
