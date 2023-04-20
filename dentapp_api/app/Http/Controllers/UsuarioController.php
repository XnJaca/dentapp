<?php

namespace App\Http\Controllers;

use App\Models\TipoUsuarioxUsuario;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        // Search in TipoUsuario where id = tipoUsuarioxUsuario.tipo_id
        // $usuarios = Usuario::with('genero', 'tipoUsuarioXUsuario.tipo')->get();
        // // dd($usuarios);
        // return response()->json([
        //     'success' => true,
        //     'message' => 'Lista de usuarios',
        //     'data' => $usuarios
        // ]);

        $usuarios = Usuario::with('genero', 'tipoUsuarioXUsuario.tipo')
            ->whereHas('tipoUsuarioXUsuario.tipo', function ($query) {
                $query->where('descripcion', 'ADMINISTRADOR');
            })
            ->get();
        // dd($usuarios);
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
     * @return \Illuminate\Http\JSOnResponse
     */
    public function store(Request $request)
    {
        // dd($request->all());
        //
        try {
            DB::transaction(function () use ($request) {
                // Save Medicamento
                $request->merge([
                    'pass' => bcrypt($request->password)
                ]);
                
                $usuario = Usuario::create($request->all());
                
                TipoUsuarioxUsuario::create([
                    'tipo_id' => $request->tipo_id,
                    'usuario_id' => $usuario->id
                ]);
                // Save Usuario
            });
            return response()->json([
                'success' => true,
                'message' => 'Usuario guardado correctamente',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al guardar el Usuario',
                'data' => $th->getMessage()
            ]);
        }
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
    public function update(Request $request, $id)
    {
        // dd($request->all());
        //
        $usuario = Usuario::find($id);

        $usuario->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Usuario actualizado correctamente',
            'data' => $usuario
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //
         $usuario = Usuario::find($id);
         $usuario->delete();
 
         return response()->json([
             'success' => true,
             'message' => 'Usuario eliminado correctamente',
         ]);
    }
}
