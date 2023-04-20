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
        //
        $medicamentos = Medicamento::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de medicamentos',
            'data' => $medicamentos
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
        //
        try {
            DB::transaction(function () use ($request) {
                // Save Medicamento
                Medicamento::create($request->all());
            });
            return response()->json([
                'success' => true,
                'message' => 'Medicamento creado correctamente',
            ]);
            
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear el Medicamento',
                'data' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medicamento  $medicamento
     * @return \Illuminate\Http\Response
     */
    public function show(Medicamento $medicamento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medicamento  $medicamento
     * @return \Illuminate\Http\Response
     */
    public function edit(Medicamento $medicamento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medicamento  $medicamento
     * @return \Illuminate\Http\JSONResponse
     */
    public function update(Request $request, $id)
    {
        //
        $medicamento = Medicamento::find($id);
        $medicamento->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Medicamento actualizado correctamente',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medicamento  $medicamento
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //
        $medicamento = Medicamento::find($id);
        $medicamento->delete();

        return response()->json([
            'success' => true,
            'message' => 'Medicamento eliminado correctamente',
        ]);
    }
}
