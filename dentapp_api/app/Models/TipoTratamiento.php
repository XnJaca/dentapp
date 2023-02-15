<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoTratamiento extends Model
{
    use HasFactory;

    protected $table = 'tipo_tratamiento';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'precio'
    ];

    // Relation with tratamiento
    public function tratamiento()
    {
        return $this->hasOne(Tratamiento::class);
    }
}
