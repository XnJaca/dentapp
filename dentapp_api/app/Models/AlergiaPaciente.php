<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlergiaPaciente extends Model
{
    use HasFactory;

    protected $table = 'alergia_paciente';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'alergia_id',
        'paciente_id'
    ];

    // Relation with alergia
    public function alergia()
    {
        return $this->belongsTo(Alergia::class);
    }

    // Relation with paciente
    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }
}
