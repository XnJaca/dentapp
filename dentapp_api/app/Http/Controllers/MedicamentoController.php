<?php

namespace App\Http\Controllers;

use App\Models\Medicamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MedicamentoController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get All Especialidades
        $Medicamentoes = Medicamento::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de Medicamentoes',
            'data' => $Medicamentoes
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
        try {
            DB::transaction(function () use ($request) {
                // Save Medicamento
                Medicamento::create($request->all());
            });
            return response()->json([
                'success' => true,
                'message' => 'Medicamento creada correctamente',
            ]);
            
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear Medicamento.'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medicamento  $Medicamento
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        //
        $medicamento = Medicamento::find($id);


        if (!$medicamento) {
            return response()->json([
                'success' => false,
                'message' => 'Medicamento no encontrada',
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Medicamento encontrada',
            'data' => $medicamento
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medicamento  $Medicamento
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // update Medicamento
        $medicamento = Medicamento::find($id);
        $medicamento->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Medicamento actualizada correctamente',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medicamento  $Medicamento
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // Delete Medicamento
        $medicamento = Medicamento::find($id);
        $medicamento->delete();

        return response()->json([
            'success' => true,
            'message' => 'Medicamento eliminada correctamente',
        ]);
    }
}