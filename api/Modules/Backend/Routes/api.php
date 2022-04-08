<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/backend', function (Request $request) {
//    return $request->user();
//});

// Auth Endpoints

Route::prefix('b')->group(function() {
    
    Route::group([ 'middleware' => 'api', 'prefix' => 'v1/auth' ], function ($router) 
    {
        Route::post('login', 'Auth\LoginController@login'); 
        
        Route::group(['middleware' =>  'assign_guard:backend_api'], function()
        {
            Route::post('logout', 'Auth\LoginController@logout');
            Route::post('me', 'Auth\LoginController@me'); 
            
        });
        
    });

});