<?php

namespace App\Http\Controllers;

use App\Models\TipoUsuario;
use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        // Obtener todos los registros de la tabla tipo_usuario.
        $tipoUsuarios = TipoUsuario::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de tipos de usuario',
            'data' => $tipoUsuarios
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id)
    {
        // Si tipo de usuario no existe, se lanza una excepción.
        try {
            $tipoUsuario = TipoUsuario::findOrFail($id);

            return response()->json([
                'success' => true,
                'message' => 'Tipo de usuario obtenido',
                'data' => $tipoUsuario
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => true,
                'message' => 'No se encontro el tipo de usuario',
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
        $tipoUsuario = TipoUsuario::find($id);
        $tipoUsuario->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Tipo de usuario actualizado',
            'data' => $tipoUsuario
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $tipoUsuario = TipoUsuario::find($id);
        $tipoUsuario->delete();

        return response()->json([
            'success' => true,
            'message' => 'Tipo de usuario eliminado',
            'data' => $tipoUsuario
        ]);
    }

}
