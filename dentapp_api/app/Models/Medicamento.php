<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicamento extends Model
{
    use HasFactory;

    protected $table = 'medicamento';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'precio'
    ];

    // Relation with medicamentoTratamiento
    public function medicamentoTratamiento()
    {
        return $this->hasMany(MedicamentoTratamiento::class);
    }
}
