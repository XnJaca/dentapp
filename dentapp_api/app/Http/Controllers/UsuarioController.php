<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        // Obtener todos los registros de la tabla usuario + genero.
        $users = Usuario::with('genero')->get();

        return response()->json([
            'success' => true,
            'message' => 'Lista de usuarios',
            'data' => $users
        ]);
    }


    // Get Usuario by genero
    public function getUsuarioByGenero($genero)
    {
        // 
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Usuario $usuario)
    {
        //
    }

    public function update(Request $request, Usuario $usuario)
    {
        //
    }

    public function destroy(Usuario $usuario)
    {
        //
    }
}
