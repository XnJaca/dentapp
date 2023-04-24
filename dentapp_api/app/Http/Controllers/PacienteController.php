<?php

namespace App\Http\Controllers;

use App\Models\AlergiaPaciente;
use App\Models\Paciente;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        // $pacientes = Paciente::with('usuario', 'usuario.genero', 'usuario.tipoUsuarioXUsuario.tipo')
        //     ->leftJoin('alergia_paciente', 'pacientes.id', '=', 'alergia_paciente.paciente_id')
        //     ->leftJoin('alergias', 'alergia_paciente.alergia_id', '=', 'alergias.id')
        //     ->get(['pacientes.*', 'alergias.nombre as nombre_alergia']);
        // $medicos = Medico::with('usuario.genero','usuario.tipoUsuarioXUsuario.tipo')->get()->map(function ($medico) {
        //     $tipo_usuario = $medico->usuario->tipoUsuarioXUsuario->first()->tipo->descripcion;
        //     $usuario_data = $medico->usuario->makeHidden('tipoUsuarioXUsuario')->toArray();
        //     $genero_usuario = $medico->usuario->genero->descripcion;
        //     $medico_data = $medico->makeHidden('usuario')->toArray();
        //     return array_merge($usuario_data, $medico_data,['genero' => $genero_usuario], ['tipo_usuario' => $tipo_usuario]);
        // });
        $pacientes = Paciente::with(['usuario.tipoUsuarioXUsuario.tipo', 'alergias','citas'])->get()->map(function ($paciente) {
            $tipo_usuario = $paciente->usuario->tipoUsuarioXUsuario->first()->tipo->descripcion;
            $usuario_data = $paciente->usuario->makeHidden('tipoUsuarioXUsuario')->toArray();
            $genero_usuario = $paciente->usuario->genero->descripcion;
            $paciente_data = $paciente->makeHidden('usuario', 'tipo_sangre_id', 'alergia_paciente_id', 'enfermedad_paciente_id')->toArray();
            $tipo_sangre = $paciente->tipoSangre->descripcion;
            $alergias = $paciente->alergias->pluck('descripcion')->toArray();
            return array_merge($paciente_data, $usuario_data,
                ['genero' => $genero_usuario], 
                ['tipo_usuario' => $tipo_usuario],
                ['tipo_sangre'=> $tipo_sangre],
                ['alergias' => $alergias],
        );
        });
        
        

        // $pacientes = Paciente::with('alergias')->get();




        return response()->json([
            'success' => true,
            'message' => 'Lista de pacientes con información de tipo de usuario',
            'data' => $pacientes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function show(Paciente $paciente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function edit(Paciente $paciente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Paciente $paciente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Paciente $paciente)
    {
        //
    }
}
