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
            /*
            |--------------------------------------------------------------------------
            | Coins Routes  
            |--------------------------------------------------------------------------
            */
            Route::get('coins', 'Coins\CoinsController@index');                /*  List    */      
            Route::post('coins', 'Coins\CoinsController@store');               /*  Create  */  
            Route::get('coins/{coin_id}/edit', 'Coins\CoinsController@edit');  /*  Edit    */ 
            Route::get('coins/{coin_id}/show', 'Coins\CoinsController@show');  /*  Show    */ 
            Route::post('coins/{coin_id}', 'Coins\CoinsController@update');    /*  Update  */   
            Route::delete('coins/{coin_id}', 'Coins\CoinsController@destroy'); /*  Destroy */
            
            /*
            |--------------------------------------------------------------------------
            | Videos Routes  
            |--------------------------------------------------------------------------
            */
            Route::get('videos', 'Videos\VideosController@index');                  /*  List    */      
            Route::post('videos', 'Videos\VideosController@store');                 /*  Create  */  
            Route::get('videos/{video_id}/edit', 'Videos\VideosController@edit');   /*  Edit    */ 
            Route::get('videos/{video_id}/show', 'Videos\VideosController@show');   /*  Show    */ 
            Route::post('videos/{video_id}', 'Videos\VideosController@update');     /*  Update  */   
            Route::delete('videos/{video_id}', 'Videos\VideosController@destroy');  /*  Destroy */
            
            /*
            |--------------------------------------------------------------------------
            | Users Routes  
            |--------------------------------------------------------------------------
            */ 
            Route::get('users', 'Users\UsersController@index');                 /*  List    */   
            Route::post('users', 'Users\UsersController@store');                /*  Create  */     
            Route::get('users/{user_id}/edit', 'Users\UsersController@edit');   /*  Edit    */ 
            Route::get('users/{user_id}/show', 'Users\UsersController@show');   /*  Show    */ 
            Route::post('users/{user_id}', 'Users\UsersController@update');     /*  Update  */  
            Route::delete('users/{user_id}', 'Users\UsersController@destroy');  /*  Destroy */ 
            
            
            /*
            |--------------------------------------------------------------------------
            | Networks Routes  
            |--------------------------------------------------------------------------
            */  
            Route::get('networks', 'Networks\NetworksController@index');                    /*  List    */     
            Route::post('networks', 'Networks\NetworksController@store');                   /*  Create  */   
            Route::get('networks/{networks_id}/edit', 'Networks\NetworksController@edit');  /*  Edit    */ 
            Route::get('networks/{networks_id}/show', 'Networks\NetworksController@show');  /*  Show    */  
            Route::post('networks/{networks_id}', 'Networks\NetworksController@update');    /*  Update  */  
            Route::delete('networks/{networks_id}', 'Networks\NetworksController@destroy'); /*  Destroy */
             
            /*
            |--------------------------------------------------------------------------
            | Exchange Routes  
            |--------------------------------------------------------------------------
            */ 
            Route::get('exchange', 'Exchange\ExchangeController@index');                    /*  List     */   
            Route::post('exchange', 'Exchange\ExchangeController@store');                   /*  Create   */   
            Route::get('exchange/{exchange_id}/edit', 'Exchange\ExchangeController@edit');  /*  Edit     */ 
            Route::get('exchange/{exchange_id}/show', 'Exchange\ExchangeController@show');  /*  Show     */ 
            Route::post('exchange/{exchange_id}', 'Exchange\ExchangeController@update');    /*  Update   */ 
            Route::delete('exchange/{exchange_id}', 'Exchange\ExchangeController@destroy'); /*  Destroy  */
            
            /*
            |--------------------------------------------------------------------------
            | Auth Routes  
            |--------------------------------------------------------------------------
            */
            
            Route::post('auth/logout', 'Auth\LoginController@logout'); // logout 
//            Route::post('me', 'Auth\LoginController@me');    
        });
        
    });

});