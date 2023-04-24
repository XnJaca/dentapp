<?php

namespace App\Http\Controllers;

use App\Models\Alergia;
use App\Models\AlergiaPaciente;
use Illuminate\Http\Request;

class AlergiaPacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Models\AlergiaPaciente  $alergiaPaciente
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($userId)
    {
        //  
        $alergias = AlergiaPaciente::select('alergia_id')
            ->where('paciente_id', $userId)
            ->with('alergia')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Alergias del paciente',
            'data' => $alergias
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AlergiaPaciente  $alergiaPaciente
     * @return \Illuminate\Http\Response
     */
    public function edit(AlergiaPaciente $alergiaPaciente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AlergiaPaciente  $alergiaPaciente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AlergiaPaciente $alergiaPaciente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AlergiaPaciente  $alergiaPaciente
     * @return \Illuminate\Http\Response
     */
    public function destroy(AlergiaPaciente $alergiaPaciente)
    {
        //
    }
}
