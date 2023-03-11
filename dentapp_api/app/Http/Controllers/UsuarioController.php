<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        // Obtener todos los registros de la tabla usuario + genero + tipo_usuario_x_usuario.
        // $usuarios = Usuario::with('genero', 'tipoUsuarioXUsuario')->get();
        
        // Search in TipoUsuario where id = tipoUsuarioxUsuario.tipo_id
        $usuarios = Usuario::with('genero', 'tipoUsuarioXUsuario.tipo')->get();

        return response()->json([
            'success' => true,
            'message' => 'Lista de usuarios',
            'data' => $usuarios
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    public static function getUsuarioByEmail($email)
    {
        // Geg usuario by email, with genero and tipoUsuarioXUsuario
        $usuario = Usuario::where('email', $email)->with('genero', 'tipoUsuarioXUsuario.tipo')->first();
        return $usuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id)
    {
        // Si usuario no existe, se lanza una excepción.
        try {
            $usuario = Usuario::findOrFail($id);

            return response()->json([
                'success' => true,
                'message' => 'Usuario obtenido',
                'data' => $usuario
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => true,
                'message' => 'No se encontro el usuario',
                'data' => $th
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function edit(Request $request, $id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(Request $request, $id)
    {
        //
        $user = Usuario::find($id);
        $user->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Usuario actualizado',
            'data' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
