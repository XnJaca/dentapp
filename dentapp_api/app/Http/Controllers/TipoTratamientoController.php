<?php

namespace App\Http\Controllers;

use App\Models\TipoTratamiento;
use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TipoTratamientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JSONResponse
     */
    public function index()
    {
        //
        $tratamientos = TipoTratamiento::all();
        
        return response()->json([
            'success' => true,
            'message' => 'Lista de tratamientos',
            'data' => $tratamientos
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
     * @return \Illuminate\Http\JSONResponse
     */
    public function store(Request $request)
    {
        //
        // $tipoTratamiento = null;
        try {
            // Create transaction
            $tipoTratamiento = DB::transaction(function () use ($request) {
               return TipoTratamiento::create($request->all());
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear tipo tratamiento',
                'data' => $e->getMessage()
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Tipo Tramiento creado',
            'data' => $tipoTratamiento
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TipoTratamiento  $tipoTratamiento
     * @return \Illuminate\Http\Response
     */
    public function show(TipoTratamiento $tipoTratamiento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TipoTratamiento  $tipoTratamiento
     * @return \Illuminate\Http\Response
     */
    public function edit(TipoTratamiento $tipoTratamiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TipoTratamiento  $tipoTratamiento
     * @return \Illuminate\Http\JSONResponse
     */
    public function update(Request $request,$id)
    {
        //
        $tratamiento = TipoTratamiento::find($id);
        $tratamiento->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Tipo Tratamiento actualizado correctamente',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TipoTratamiento  $tipoTratamiento
     * @return \Illuminate\Http\JSONResponse
     */
    public function destroy($id)
    {
        //delete tipoTratamiento
        $tipoTratamiento = TipoTratamiento::find($id);
        $tipoTratamiento->delete();

        return response()->json([
            'success' => true,
            'message' => 'Tipo Tratamiento eliminado.'
        ]);
    }
}
