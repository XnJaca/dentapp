<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicamentoTratameinto extends Model
{
    use HasFactory;

    protected $table = 'medicamento_tratamiento';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'medicamento_id',
        'tratamiento_id'
    ];

    //relation with medicamento
    public function medicamento()
    {
        return $this->belongsTo(Medicamento::class);
    }

    //relation with tratamiento
    public function tratamiento()
    {
        return $this->belongsTo(Tratamiento::class);
    }
}
