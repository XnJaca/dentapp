<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alergia extends Model
{
    use HasFactory;

    protected $table = 'alergias';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'id',
        'nombre',
        'descripcion'
    ];

    // Relation with alergiaPaciente
    public function alergiaPaciente()
    {
        return $this->hasMany(AlergiaPaciente::class);
    }
}
