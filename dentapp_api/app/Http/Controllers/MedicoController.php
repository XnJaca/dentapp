<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //Obtener todos los medicos + usuario + tipoUsuarioxUsuario + genero + tipoUsuario
        // $medicos = Medico::with('usuario', 'usuario.genero', 'usuario.tipoUsuarioXUsuario.tipo', 'especialidad')->get();
        $medicos = Medico::with('usuario.genero','usuario.tipoUsuarioXUsuario.tipo')->get()->map(function ($medico) {
            $tipo_usuario = $medico->usuario->tipoUsuarioXUsuario->first()->tipo->descripcion;
            $usuario_data = $medico->usuario->makeHidden('tipoUsuarioXUsuario')->toArray();
            $genero_usuario = $medico->usuario->genero->descripcion;
            $medico_data = $medico->makeHidden('usuario')->toArray();
            return array_merge($usuario_data, $medico_data,['genero' => $genero_usuario], ['tipo_usuario' => $tipo_usuario]);
        });
        return response()->json([
            'success' => true,
            'message' => 'Lista de medicos',
            'data' => $medicos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
    //  * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        dd($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // dd($request->medico['especialidad_id']);

        $usuario = null;
        $medico = null;
        //
        try {
            DB::transaction(function () use ($request) {
            //    dd($request->usuario());
                // Save usuari, request.usuario
                $usuario = Usuario::create($request['usuario']);

                // Save medico, request.medico
                $medico = Medico::create(
                    [
                        'id' => $usuario->id,
                        'especialidad_id' => $request->medico['especialidad_id'],
                        'precio_consulta' => $request->medico['precio_consulta'],
                        // 'horario_id' => $request->medico['horario_id']
                    ]
                );

                // Save usuario_tipo_usuario, request.usuario_tipo_usuario
                $usuario->tipoUsuarioXUsuario()->create(
                    [
                        'usuario_id' => $usuario->id,
                        'tipo_id' => $request->tipo_usuario['tipo_id']
                    ]
                );

                
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear medico',
                'data' => [$usuario,$e->getMessage()]
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Medico creado',
            'data' => [
                'medico' => $medico,
                'usuario' => $usuario
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Medico $medico)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Medico $medico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Medico $medico)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Medico $medico)
    {
        //
    }
}
