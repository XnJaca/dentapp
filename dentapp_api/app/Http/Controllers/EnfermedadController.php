<?php

namespace App\Http\Controllers;

use App\Models\Enfermedad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EnfermedadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get All Especialidades
        $enfermedades = Enfermedad::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de enfermedades',
            'data' => $enfermedades
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
        try {
            DB::transaction(function () use ($request) {
                // Save enfermedad
                Enfermedad::create($request->all());
            });
            return response()->json([
                'success' => true,
                'message' => 'Enfermedad creada correctamente',
            ]);
            
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear enfermedad',
                'data' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Enfermedad  $enfermedad
     * @return \Illuminate\Http\Response
     */
    public function show(Enfermedad $enfermedad)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Enfermedad  $enfermedad
     * @return \Illuminate\Http\Response
     */
    public function edit(Enfermedad $enfermedad)
    {
        //


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Enfermedad  $enfermedad
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // update enfermedad
        $enfermedad = Enfermedad::find($id);
        $enfermedad->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Enfermedad actualizada correctamente',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Enfermedad  $enfermedad
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // Delete enfermedad
        $enfermedad = Enfermedad::find($id);
        $enfermedad->delete();

        return response()->json([
            'success' => true,
            'message' => 'Enfermedad eliminada correctamente',
        ]);
    }
}
