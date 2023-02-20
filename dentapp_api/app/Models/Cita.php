<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;
    protected $table = 'citas';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'fecha',
        'confirmado',
        'finalizado',
        'consultorio_id',
        'medico_id'
    ];

    // Relation with consultorio
    public function consultorio()
    {
        return $this->belongsTo(Consultorio::class);
    }

    // Relation with medico
    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }

    // Relation with citaPaciente
    public function citaPaciente()
    {
        return $this->hasMany(CitaPaciente::class);
    }

    //relation with tratamientoCita
    public function tratamientoCita()
    {
        return $this->hasMany(TratamientoCita::class);
    }
}
