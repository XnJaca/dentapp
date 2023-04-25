<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TratamientoCita extends Model
{
    use HasFactory;

    protected $table = 'tratamiento_cita';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'cita_id',
        'tratamiento_id',
    ];

    // Relation to tipo_tratamiento
    public function tipoTratamiento()
    {
        return $this->belongsTo(TipoTratamiento::class);
    }

    //relation with tratamiento
    // public function tratamiento()
    // {
    //     return $this->belongsTo(Tratamiento::class);
    // }

    //relation with cita
    public function cita()
    {
        return $this->belongsTo(CitaPaciente::class);
    }
}
