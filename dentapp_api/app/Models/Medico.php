<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;

    protected $table = 'medicos';
    // Timestamps

    public $timestamps = false;

    //pk    
    protected $primaryKey = 'id';

    // Fillable
    protected $fillable = [
        'id',
        'precio_consulta',
        'especialidad_id',
        'horario_id',
    ];

    // Relación uno a uno, donde id es mi primary key y tambien esta relacionado al id del usuario
    public function usuario()
    {
        return $this->hasOne('App\Models\Usuario', 'id', 'id');
    }

    // Relación uno a muchos inversa
    public function especialidad()
    {
        return $this->belongsTo('App\Models\Especialidad');
    }


}
