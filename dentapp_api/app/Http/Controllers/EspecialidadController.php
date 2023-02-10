<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EspecialidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get all especialidades
        $especialidades = Especialidad::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de especialidades',
            'data' => $especialidades
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $especialidad = null;
        try {
            // Create transaction
            $especialidad = DB::transaction(function () use ($request) {
               return Especialidad::create($request->all());
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear especialidad',
                'data' => $e->getMessage()
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Especialidad creada',
            'data' => $especialidad
        ]);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Especialidad  $especialidad
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        //Get especialidad
        $especialidad = Especialidad::find($id);


        if (!$especialidad) {
            return response()->json([
                'success' => false,
                'message' => 'Especialidad no encontrada',
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Especialidad encontrada',
            'data' => $especialidad
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Especialidad  $especialidad
     * @return \Illuminate\Http\Response
     */
    public function edit(Especialidad $especialidad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Especialidad  $especialidad
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Especialidad $especialidad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //delete especialidad
        $especialidad = Especialidad::find($id);
        $especialidad->delete();

        return response()->json([
            'success' => true,
            'message' => 'Especialidad eliminada',
            'data' => $especialidad
        ]);

    }
}
