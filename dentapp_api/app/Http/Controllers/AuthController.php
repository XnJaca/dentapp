<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{

    public function index()
    {
        return response()->json([
            'message' => 'Bienvenido a DentApp'
        ]);
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'pass');
        $usuario = UsuarioController::getUsuarioByEmail($credentials['email']);
        if (password_verify($credentials['pass'], $usuario->pass)) {
            return response()->json([
                'success' => true,
                'message' => 'Login correcto',
                'usuario' => $usuario
            ], 200);
        } else {

            return response()->json([
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ]);
        }
    }
}
