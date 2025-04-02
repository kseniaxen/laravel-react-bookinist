<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\GenreContoller;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/user', UserController::class);
    Route::get('books/auth', [BookController::class, 'auth']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('/cities', CityController::class);
Route::apiResource('/genres', GenreContoller::class);
Route::apiResource('/books', BookController::class);

Route::post('/cart', [BookController::class, 'cart']);
