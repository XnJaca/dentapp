<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Validator;

use Closure;

class UsuarioData
{
    // Validar los datos que vienen en el request
    public function data($request, Closure $next)
    {
        $rules = [
            'cedula' => 'required|numeric',
            'nombre' => 'required|string',
            'nombre_emer' => 'required|string',
            'apellido_1' => 'required|string',
            'apellido_2' => 'required|string',
            'email' => 'required|email',
            'pass' => 'required|string',
            'fecha_nacimiento' => 'required|date',
            'direccion' => 'required|string',
            'telefono' => 'required|numeric',
            'telefono_emer' => 'required|numeric',
            'genero_id' => 'required|numeric',
        ];

        $validator = Validator::make($request->all(), $rules);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Error en los datos',
                'data' => $validator->errors()
            ], 400);
        }

        return $next($request);
    }
}