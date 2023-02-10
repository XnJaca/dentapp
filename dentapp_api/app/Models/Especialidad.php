<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especialidad extends Model
{
    use HasFactory;

    protected $table = 'especialidades';

    // Pk
    protected $primaryKey = 'id';

    // Timestamps
    public $timestamps = false;
    

    // Fillable
    protected $fillable = [
        'id',
        'descripcion',
    ];

    // Relacion uno a medico
    public function medico()
    {
        return $this->hasMany(Medico::class);
    }

}
