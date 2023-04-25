<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use App\Models\CitaPaciente;
use App\Models\TratamientoCita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        $citas = CitaPaciente::with(['cita.medico.usuario', 'tipoTratamiento', 'paciente.usuario.genero'])->get();

        return response()->json([
            'success' => true,
            'message' => 'Lista de citas',
            'data' => $citas
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
     * @return \Illuminate\Http\JSonResponse
     */
    public function store(Request $request)
    {
        //
        try {
            DB::transaction(function () use ($request) {
                $cita = new Cita();
                $cita->inicio_cita = $request->inicio_cita;
                $cita->fin_cita = $request->fin_cita;
                $cita->medico_id = $request->medico_id;
                $cita->confirmado = $request->confirmado;
                $cita->consultorio_id = 1;
                $cita->save();

                $citaPaciente = new CitaPaciente();
                $citaPaciente->cita_id = $cita->id;
                $citaPaciente->paciente_id = $request->paciente_id;
                $citaPaciente->tratamiento_id = $request->tratamiento_id;
                $citaPaciente->save();

                $tratamiento = new TratamientoCita();
                $tratamiento->cita_id = $citaPaciente->id;
                $tratamiento->tratamiento_id = $request->tratamiento_id;

                $tratamiento->save();
            });
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'success' => false,
                'message' => 'Error al crear la cita',
                'data' => $th
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Cita creada correctamente',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cita  $cita
     * @return \Illuminate\Http\JSONResponse
     */
    public function show($idPaciente)
    {
        $citas = CitaPaciente::with(['cita.medico.usuario', 'tipoTratamiento', 'paciente.usuario.genero'])
            ->where('paciente_id', $idPaciente)
            ->get();

        if ($citas->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No se encontraron citas para este paciente',
                'data' => null
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Citas encontradas',
            'data' => $citas
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cita  $cita
     * @return \Illuminate\Http\Response
     */
    public function edit($idUsuario)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cita  $cita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cita $cita)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cita  $cita
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cita $cita)
    {
        //
    }
}
