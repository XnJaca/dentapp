<?php

use App\Http\Controllers\AlergiaController;
use App\Http\Controllers\AlergiaPacienteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EnfermedadController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\MedicamentoController;
use App\Http\Controllers\MedicoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\TipoSangreController;
use App\Http\Controllers\TipoTratamientoController;
use App\Http\Controllers\TipoUsuarioController;
use App\Http\Controllers\TratamientoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/usuarios', function (Request $request) {
//     return $request->usuario();
// });

// Route::resource('usuarios', UsuarioController::class);

// Ruta para login 
// TODO: validar que venga la data: email y pass mediante un middleware
Route::post('/login', [AuthController::class, 'login']);

Route::resource('usuarios', UsuarioController::class);

Route::resource('medicos', MedicoController::class);

Route::resource('generos', GeneroController::class);

Route::resource('tipo_usuarios', TipoUsuarioController::class);

// Ruta especialidades
Route::resource('especialidades', EspecialidadController::class)->middleware('validate_especialidad');

// Ruta Enfermedades
Route::resource('enfermedades', EnfermedadController::class);

// Ruta Alergias
Route::resource('alergias', AlergiaController::class);

Route::resource('alergias_pacientes', AlergiaPacienteController::class);

Route::resource('medicamentos', MedicamentoController::class);

Route::resource('horarios', HorarioController::class);

Route::resource('pacientes', PacienteController::class);

Route::resource('tipo_sangre', TipoSangreController::class);

Route::resource('tipo_tratamientos', TipoTratamientoController::class);
// Route::put('/api/enfermedades/{id}', [EnfermedadController::class, 'update']);