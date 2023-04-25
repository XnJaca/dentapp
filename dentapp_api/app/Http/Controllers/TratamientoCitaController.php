<?php

namespace App\Http\Controllers;

use App\Models\TratamientoCita;
use Illuminate\Http\Request;

class TratamientoCitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JSONResponse
     */
    public function index()
    {
        $tratamientos = TratamientoCita::with('tipoTratamiento')->get();
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TratamientoCita  $tratamientoCita
     * @return \Illuminate\Http\Response
     */
    public function show(TratamientoCita $tratamientoCita)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TratamientoCita  $tratamientoCita
     * @return \Illuminate\Http\Response
     */
    public function edit(TratamientoCita $tratamientoCita)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TratamientoCita  $tratamientoCita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TratamientoCita $tratamientoCita)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TratamientoCita  $tratamientoCita
     * @return \Illuminate\Http\Response
     */
    public function destroy(TratamientoCita $tratamientoCita)
    {
        //
    }
}
