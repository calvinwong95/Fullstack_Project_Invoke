<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\JoinTableController;

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

//Public Routes
Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

// Route::post('/logout',[AuthController::class,'logout']);

Route::get('/getApprovedBookings',[BookingController::class, 'getApprovedBookings']);






//Protected Routes
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware'=>['auth:sanctum']], function () {

    Route::post('/logout',[AuthController::class,'logout']);

    Route::get('/booking',[BookingController::class, 'booking']);


    Route::post('/addBookingRequest',[BookingController::class,'addBookingRequest']);
    Route::get('/viewBookingRequest',[BookingController::class,'viewBookingRequest']);


    Route::get('/joinedData/{id}',[JoinTableController::class, 'index']);
    Route::delete('/delete/{id}',[JoinTableController::class,'delete']);


    //admin get data
    Route::get('/adminGetUserData',[BookingController::class, 'adminGetUserData' ]);
    Route::get('/adminGetBookingData',[BookingController::class, 'adminGetBookingData' ]);

    //admin get all pending request with name
    Route::get('/getPending',[JoinTableController::class,'getPending']);

    //admin to update approve or reject list
    Route::put('/getApproved/{id}',[JoinTableController::class,'getApproved']);
    Route::put('/getRejected/{id}',[JoinTableController::class,'getRejected']);

});
