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

// Auth Endpoints config('constants.version')

 
Route::prefix('b')->group(function() {
    
    Route::group([ 'middleware' => 'api', 'prefix' => config('constants.version') ], function ($router) 
    {
       
        Route::post('auth/login', 'Auth\LoginController@login');  // login 
        Route::any('check', 'BackendController@create');  // test api
        
        Route::group(['middleware' =>  'assign_guard:backend_api'], function()
        {
            Route::post('auth/logout', 'Auth\LoginController@logout'); // logout 
            Route::post('me', 'Auth\LoginController@me'); 
           
            /*
            |--------------------------------------------------------------------------
            | Exchange Routes  
            |--------------------------------------------------------------------------
            */
            
            /* List */
            Route::get('exchange', 'Exchange\ExchangeController@index');                    
            /* Create */
            Route::post('exchange', 'Exchange\ExchangeController@store');                  
            /* Edit */
            Route::get('exchange/{exchange_id}/edit', 'Exchange\ExchangeController@edit');  
            /* Show */
            Route::get('exchange/{exchange_id}/show', 'Exchange\ExchangeController@show');  
            /* Update */
            Route::post('exchange/{exchange_id}', 'Exchange\ExchangeController@update');    
            /* Destroy */
            Route::delete('exchange/{exchange_id}', 'Exchange\ExchangeController@destroy'); 
            
            
            /*
            |--------------------------------------------------------------------------
            | Networks Routes  
            |--------------------------------------------------------------------------
            */
            
            /* List */
            Route::get('networks', 'Networks\NetworksController@index');                    
            /* Create */
            Route::post('networks', 'Networks\NetworksController@store');                  
            /* Edit */
            Route::get('networks/{networks_id}/edit', 'Networks\NetworksController@edit');  
            /* Show */
            Route::get('networks/{networks_id}/show', 'Networks\NetworksController@show');  
            /* Update */
            Route::post('networks/{networks_id}', 'Networks\NetworksController@update');    
            /* Destroy */
            Route::delete('networks/{networks_id}', 'Networks\NetworksController@destroy'); 
            
            
            
            
            
            
            
            
            
            
            
        });
        
    });

});