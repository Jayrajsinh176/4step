<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;


Route::get('/orders', [OrderController::class, 'index']);
Route::post('/place-order', [OrderController::class, 'store']);
Route::get('/viral-products', [ProductController::class, 'viralProducts']);

Route::post('/login', [MemberController::class, 'login']);
Route::post('/signup', [MemberController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
