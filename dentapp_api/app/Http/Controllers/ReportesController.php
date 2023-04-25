<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //Obtener todos los medicos + usuario + tipoUsuarioxUsuario + genero + tipoUsuario
        // $medicos = Medico::with('usuario', 'usuario.genero', 'usuario.tipoUsuarioXUsuario.tipo', 'especialidad')->get();
        return response()->json([
            'success' => true,
            'message' => 'Reportes',
        ]);
    }

    public function show($tipo_reporte, $fecha_inicio, $fecha_fin)
    {
        $data = null;
        switch ($tipo_reporte) {
            case 1:
                # consulta de Cantidad de citas registradas por día
                $data = DB::table('citas')
                    ->select(DB::raw('DATE(inicio_cita) AS fecha'), DB::raw('COUNT(*) AS cantidad'))
                    ->whereBetween('inicio_cita', [$fecha_inicio, $fecha_fin])
                    ->groupBy(DB::raw('DATE(inicio_cita)'))
                    ->get();
                break;

            default:
                # code...
                break;
        }

        return response()->json([
            'success' => true,
            'message' => 'Datos del paciente con información de tipo de usuario',
            'data' => $data
        ]);
    }
}
