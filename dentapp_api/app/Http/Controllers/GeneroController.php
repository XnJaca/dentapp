<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class GeneroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        // Obtener todos los registros de la tabla generos.
        $generos = Genero::all();
        
        
        return response()->json([
            'success' => true,
            'message' => 'Lista de generos',
            'data' => $generos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

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
     * @param  int  $id
     */
    public function show($id)
    {
        // Si genero no existe, se lanza una excepción.
        try {
            $genero = Genero::findOrFail($id);

            return response()->json([
                'success' => true,
                'message' => 'Genero obtenido',
                'data' => $genero
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => true,
                'message' => 'No se encontro el genero',
                'data' => $th
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function edit(Request $request, $id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(Request $request, $id)
    {
        //
        $genero = Genero::find($id);
        $genero->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Genero actualizado',
            'data' => $genero
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
