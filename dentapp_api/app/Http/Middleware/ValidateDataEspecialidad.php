<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidateDataEspecialidad
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->isMethod('post') || $request->isMethod('put')) {
            $validator = Validator::make($request->all(), [
                'descripcion' => 'required|string|max:40'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error de validación',
                    'error' => $validator->errors()
                ], 400);
                // return response()->json($validator->errors(), 400);
            }
        }
        return $next($request);
    }
}
