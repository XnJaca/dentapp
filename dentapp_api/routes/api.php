<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\MedicoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
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
Route::post('/login', [AuthController::class, 'login']);
// Route::resource('login', AuthController::class);

// Crear ruta para usuarios, usuario middleware solo si la request es post, put
Route::resource('usuarios', UsuarioController::class)->middleware('validate_data');

// Crear ruta para medicos
// Route::resource('medicos', MedicoController::class)->middleware('validate_data');
// Ruta medicos sin middleware
Route::resource('medicos', MedicoController::class);
// Ruta especialidades
Route::resource('especialidades', EspecialidadController::class)->middleware('validate_especialidad');