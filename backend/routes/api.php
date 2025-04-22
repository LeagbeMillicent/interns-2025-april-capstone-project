<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderItemController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::group([], function () {
    Route::get('/menus', [MenuController::class, 'index']);
    Route::post('create/menu', [MenuController::class, 'store']);
    Route::get('/menus/{id}', [MenuController::class, 'show']);
    Route::post('update/menu/{id}', [MenuController::class, 'update']);
    Route::delete('delete/menu/{id}', [MenuController::class, 'destroy']);
});

Route::group(['prefix' => 'categories'], function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('create', [CategoryController::class, 'store']);
    Route::get('/{id}', [CategoryController::class, 'show']);
    Route::post('update/{id}', [CategoryController::class, 'update']);
    Route::delete('delete/{id}', [CategoryController::class, 'destroy']);
});

Route::group(['prefix' => 'order-items'], function () {
    Route::get('/', [OrderItemController::class, 'index']);
    Route::post('/create', [OrderItemController::class, 'store']);
    Route::get('/{id}', [OrderItemController::class, 'show']);
    Route::post('/update/{id}', [OrderItemController::class, 'update']);
    Route::delete('/delete/{id}', [OrderItemController::class, 'destroy']);
});

Route::group(['prefix' => 'order'], function () {
    Route::get('/', [OrderController::class, 'index']);
    Route::post('/create', [OrderController::class, 'store']);
    Route::get('/{id}', [OrderController::class, 'show']);
    Route::post('/update/{id}', [OrderController::class, 'update']);
    Route::delete('/delete/{id}', [OrderController::class, 'destroy']);
});
