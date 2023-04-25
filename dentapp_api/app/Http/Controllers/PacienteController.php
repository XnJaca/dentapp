<?php

namespace App\Http\Controllers;

use App\Models\AlergiaPaciente;
use App\Models\EnfermedadPaciente;
use App\Models\Paciente;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        
        $pacientes = Paciente::with(['usuario.tipoUsuarioXUsuario.tipo', 'alergias', 'enfermedades', 'citas'])->get()->map(function ($paciente) {
            $usuario_data = $paciente->usuario->makeHidden('tipoUsuarioXUsuario')->toArray();
            $paciente_data = $paciente->makeHidden('usuario', 'tipo_sangre_id', 'alergia_paciente_id', 'enfermedad_paciente_id')->toArray();
            $tipo_usuario = $paciente->usuario->tipoUsuarioXUsuario->first()->tipo;
            $genero_usuario = $paciente->usuario->genero;
            $tipo_sangre = $paciente->tipoSangre;
            $alergias = $paciente->alergias->toArray();
            return array_merge(
                $paciente_data,
                $usuario_data,
                ['genero' => $genero_usuario],
                ['tipo_usuario' => $tipo_usuario],
                ['tipo_sangre' => $tipo_sangre],
                ['alergias' => $alergias],
            );
        });

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
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $usuario = null;
        $paciente = null;
        //
        try {
            DB::transaction(function () use ($request) {
                // Validate request

                $request->merge([
                    'pass' => bcrypt($request->password)
                ]);
                $usuario = Usuario::create($request['usuario']);

                // 
                $paciente = Paciente::create(
                    [
                        'id' => $usuario->id,
                        'tipo_sangre_id' => $request->paciente['tipo_sangre_id'],
                    ]
                );

                // Save usuario_tipo_usuario, request.usuario_tipo_usuario
                $usuario->tipoUsuarioXUsuario()->create(
                    [
                        'usuario_id' => $usuario->id,
                        'tipo_id' => $request->tipo_usuario['tipo_id']
                    ]
                );
                // Create alergias
                if (is_array($request->alergias)) {
                    foreach ($request->alergias as $alergia) {
                        $alergia_paciente = new AlergiaPaciente();
                        $alergia_paciente->alergia_id = $alergia['alergia_id'];
                        $alergia_paciente->paciente_id = $usuario->id;
                        $alergia_paciente->save();
                    }
                }

                // Create enfermedades
                if (is_array($request->enfermedades)) {
                    foreach ($request->enfermedades as $enfermedad) {
                        $enfermedad_paciente = new EnfermedadPaciente();
                        $enfermedad_paciente->enfermedad_id = $enfermedad['enfermedad_id'];
                        $enfermedad_paciente->paciente_id = $usuario->id;
                        $enfermedad_paciente->save();
                    }
                }
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear el paciente',
                'data' => [$e]
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Paciente creado con éxito',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\JSONResponse
     */
    public function show($id)
    {
        $paciente = Paciente::with(['usuario.tipoUsuarioXUsuario.tipo', 'alergias', 'enfermedades', 'citas'])
                    ->where('id', $id)
                    ->firstOrFail();
    
        $usuario_data = $paciente->usuario->makeHidden('tipoUsuarioXUsuario')->toArray();
        $paciente_data = $paciente->makeHidden('usuario', 'tipo_sangre_id', 'alergia_paciente_id', 'enfermedad_paciente_id')->toArray();
        $tipo_usuario = $paciente->usuario->tipoUsuarioXUsuario->first()->tipo;
        $genero_usuario = $paciente->usuario->genero;
        $tipo_sangre = $paciente->tipoSangre;
        $alergias = $paciente->alergias->toArray();
    
        $data = array_merge(
                $paciente_data,
                $usuario_data,
                ['genero' => $genero_usuario],
                ['tipo_usuario' => $tipo_usuario],
                ['tipo_sangre' => $tipo_sangre],
                ['alergias' => $alergias]
        );
    
        return response()->json([
            'success' => true,
            'message' => 'Datos del paciente con información de tipo de usuario',
            'data' => $data
        ]);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        //

        //
        try {
            DB::transaction(function () use ($request, $id) {
                $paciente = Paciente::find($id);
                $usuario = Usuario::find($id);

                // Validate request

                // $request->merge([
                //     'pass' => bcrypt($request->password)
                // ]);
                // $usuario = Usuario::update($request['usuario']);

                $usuario->update($request['usuario']);

                // 
                $paciente->update($request['paciente']);

                // Save usuario_tipo_usuario, request.usuario_tipo_usuario
                $usuario->tipoUsuarioXUsuario()->update(
                    [
                        'usuario_id' => $usuario->id,
                        'tipo_id' => $request->tipo_usuario['tipo_id']
                    ]
                );

                // Update alergias
                if (is_array($request->alergias)) {
                    AlergiaPaciente::where('paciente_id', $usuario->id)->delete();

                    // Agregar la nueva enfermedad proporcionada en el Request
                    $alergia_paciente = new AlergiaPaciente();
                    $alergia_paciente->alergia_id = $request->alergias[0]['alergia_id'];
                    $alergia_paciente->paciente_id = $usuario->id;
                    $alergia_paciente->save();

                    foreach ($request->alergias as $key =>  $alergia) {
                        if ($key != 0) {
                            $alergia_paciente = new AlergiaPaciente();
                            $alergia_paciente->alergia_id = $alergia['alergia_id'];
                            $alergia_paciente->paciente_id = $usuario->id;
                            $alergia_paciente->save();
                        }
                    }
                }
                // Update enfermedades
                if (is_array($request->enfermedades)) {
                    // Eliminar todas las enfermedades relacionadas con el paciente
                    EnfermedadPaciente::where('paciente_id', $usuario->id)->delete();

                    // Agregar la nueva enfermedad proporcionada en el Request
                    $enfermedad_paciente = new EnfermedadPaciente();
                    $enfermedad_paciente->enfermedad_id = $request->enfermedades[0]['enfermedad_id'];
                    $enfermedad_paciente->paciente_id = $usuario->id;
                    $enfermedad_paciente->save();

                    // Agregar cualquier otra enfermedad adicional proporcionada en el Request
                    foreach ($request->enfermedades as $key => $enfermedad) {
                        if ($key != 0) {
                            $enfermedad_paciente = new EnfermedadPaciente();
                            $enfermedad_paciente->enfermedad_id = $enfermedad['enfermedad_id'];
                            $enfermedad_paciente->paciente_id = $usuario->id;
                            $enfermedad_paciente->save();
                        }
                    }
                }
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar el paciente',
                'data' => [$e]
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Paciente actualizado con éxito',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\JSONResponse
     */
    public function destroy($id)
    {
        //
        $paciente = Paciente::find($id);
        $usuario = Usuario::find($id);



        if ($paciente && $usuario) {
            $alergia = AlergiaPaciente::where('paciente_id', $id)->delete();
            $enfermedad = EnfermedadPaciente::where('paciente_id', $id)->delete();
            $paciente->delete();
            $usuario->delete();
            return response()->json([
                'success' => true,
                'message' => 'Paciente eliminado con éxito',
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar el paciente',
            ]);
        }
    }
}
