<?php

namespace App\Http\Controllers;

use App\Models\Alergia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AlergiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        $alergias = Alergia::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de alergias',
            'data' => $alergias
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
                // Save Alergia
                Alergia::create($request->all());
            });
            return response()->json([
                'success' => true,
                'message' => 'Alergia creada correctamente',
            ]);
            
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear Alergia',
                'data' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Alergia  $alergia
     * @return \Illuminate\Http\Response
     */
    public function show(Alergia $alergia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Alergia  $alergia
     * @return \Illuminate\Http\Response
     */
    public function edit(Alergia $alergia)
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
        $alergia = Alergia::find($id);
        $alergia->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Alergia actualizada correctamente',
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Alergia  $alergia
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //
        $alergia = Alergia::find($id);
        $alergia->delete();

        return response()->json([
            'success' => true,
            'message' => 'Alergia eliminada correctamente',
        ]);
    }
}
