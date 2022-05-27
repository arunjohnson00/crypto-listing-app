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
//http://localhost/coinxhigh/api/api/b/v1/check

Route::prefix('b')->group(function() {
    
    Route::group([ 'middleware' => 'api', 'prefix' => config('constants.version') ], function ($router) 
    {
        //Route::any('cron-coincap', 'CronJob\CronJobController@coincapJob');  // https://docs.coincap.io/ data collection   
        Route::post('auth/login', 'Auth\LoginController@login');  // login 
        Route::any('check', 'BackendController@create');  // test api
            
        Route::group(['middleware' =>  'assign_guard:backend_api'], function()
        {
            
            /*
            |--------------------------------------------------------------------------
            | Dashboard Routes  
            |--------------------------------------------------------------------------
            */
                Route::get('dashboard/top-bar-count', 'Dashboard\DashboardController@topBarCount');                      /*  Top Bar Count    */
           
            
            /*
            |--------------------------------------------------------------------------
            | Events Routes  
            |--------------------------------------------------------------------------
            */
                Route::get('events', 'Events\EventsController@index');                      /*  List    */      
                Route::post('events', 'Events\EventsController@store');                     /*  Create  */  
                Route::get('events/{event_id}/edit', 'Events\EventsController@edit');       /*  Edit    */ 
                Route::get('events/{event_id}/show', 'Events\EventsController@show');       /*  Show    */ 
                Route::post('events/{event_id}', 'Events\EventsController@update');         /*  Update  */   
                Route::delete('events/{event_id}', 'Events\EventsController@destroy');      /*  Destroy */
                    /*
                    |--------------------------------------------------------------------------
                    | Events Category Routes  
                    |--------------------------------------------------------------------------
                    */
                        Route::get('events-category-all', 'Events\EventsCategoryController@All');                               /*  All    */  
                        Route::get('events-category', 'Events\EventsCategoryController@index');                                 /*  List    */      
                        Route::post('events-category', 'Events\EventsCategoryController@store');                                /*  Create  */  
                        Route::get('events-category/{event_category_id}/edit', 'Events\EventsCategoryController@edit');         /*  Edit    */ 
                        Route::get('events-category/{event_category_id}/show', 'Events\EventsCategoryController@show');         /*  Show    */ 
                        Route::post('events-category/{event_category_id}', 'Events\EventsCategoryController@update');           /*  Update  */   
                        Route::delete('events-category/{event_category_id}', 'Events\EventsCategoryController@destroy');        /*  Destroy */
                    /*
                    |--------------------------------------------------------------------------
                    | Reward Address Routes  
                    |--------------------------------------------------------------------------
                    */
                        Route::get('reward-address-all', 'Events\RewardAddressController@All');                               /*  All    */  
                        Route::get('reward-address', 'Events\RewardAddressController@index');                                 /*  List    */      
                        Route::post('reward-address', 'Events\RewardAddressController@store');                                /*  Create  */  
                        Route::get('reward-address/{reward_address_id}/edit', 'Events\RewardAddressController@edit');         /*  Edit    */ 
                        Route::get('reward-address/{reward_address_id}/show', 'Events\RewardAddressController@show');         /*  Show    */ 
                        Route::post('reward-address/{reward_address_id}', 'Events\RewardAddressController@update');           /*  Update  */   
                        Route::delete('reward-address/{reward_address_id}', 'Events\RewardAddressController@destroy');        /*  Destroy */
            
                
            
            /*
            |--------------------------------------------------------------------------
            | Badges Routes  
            |--------------------------------------------------------------------------
            */
                Route::get('badges', 'Badges\BadgesController@index');                      /*  List    */      
                Route::post('badges', 'Badges\BadgesController@store');                     /*  Create  */  
                Route::get('badges/{badge_id}/edit', 'Badges\BadgesController@edit');       /*  Edit    */ 
                Route::get('badges/{badge_id}/show', 'Badges\BadgesController@show');       /*  Show    */ 
                Route::post('badges/{badge_id}', 'Badges\BadgesController@update');         /*  Update  */   
                Route::delete('badges/{badge_id}', 'Badges\BadgesController@destroy');      /*  Destroy */
            
                
            /*
            |--------------------------------------------------------------------------
            | Airdrops Routes  
            |--------------------------------------------------------------------------
            */
                Route::get('airdrops', 'Airdrops\AirdropsController@index');                    /*  List    */      
                Route::post('airdrops', 'Airdrops\AirdropsController@store');                   /*  Create  */  
                Route::get('airdrops/{airdrop_id}/edit', 'Airdrops\AirdropsController@edit');   /*  Edit    */ 
                Route::get('airdrops/{airdrop_id}/show', 'Airdrops\AirdropsController@show');   /*  Show    */ 
                Route::post('airdrops/{airdrop_id}', 'Airdrops\AirdropsController@update');     /*  Update  */   
                Route::delete('airdrops/{airdrop_id}', 'Airdrops\AirdropsController@destroy');  /*  Destroy */
            
            
            
            /*
            |--------------------------------------------------------------------------
            | show user notifications Routes  
            |--------------------------------------------------------------------------
            */
            
            Route::get('user-notifications-all', 'UserNotifications\UserNotificationsController@All');
             
            
            /*
            |--------------------------------------------------------------------------
            | Nft Listing Routes   
            |--------------------------------------------------------------------------
            */  
            Route::get('nft-listing', 'NftListing\NftListingController@index');                         /*  List    */     
            Route::post('nft-listing', 'NftListing\NftListingController@store');                        /*  Create  */   
            Route::get('nft-listing/{nft_listing_id}/edit', 'NftListing\NftListingController@edit');    /*  Edit    */ 
            Route::get('nft-listing/{nft_listing_id}/show', 'NftListing\NftListingController@show');    /*  Show    */  
            Route::post('nft-listing/{nft_listing_id}', 'NftListing\NftListingController@update');      /*  Update  */  
            Route::delete('nft-listing/{nft_listing_id}', 'NftListing\NftListingController@destroy');   /*  Destroy */
                /*
                |--------------------------------------------------------------------------
                | Nft Listing Category Routes   
                |--------------------------------------------------------------------------
                */
                Route::get('nft-listing-category-all', 'NftListing\NftListingCategoryController@All');                                  /*  All    */  
                Route::get('nft-listing-category', 'NftListing\NftListingCategoryController@index');                                    /*  List    */     
                Route::post('nft-listing-category', 'NftListing\NftListingCategoryController@store');                                   /*  Create  */   
                Route::get('nft-listing-category/{nft_listing_category_id}/edit', 'NftListing\NftListingCategoryController@edit');      /*  Edit    */ 
                Route::get('nft-listing-category/{nft_listing_category_id}/show', 'NftListing\NftListingCategoryController@show');      /*  Show    */  
                Route::post('nft-listing-category/{nft_listing_category_id}', 'NftListing\NftListingCategoryController@update');        /*  Update  */  
                Route::delete('nft-listing-category/{nft_listing_category_id}', 'NftListing\NftListingCategoryController@destroy');     /*  Destroy */
            
                /*
                |--------------------------------------------------------------------------
                | Nft Listing Currency Routes   
                |--------------------------------------------------------------------------
                */
                Route::get('nft-listing-currency-all', 'NftListing\NftListingCurrencyController@All');   
                Route::get('nft-listing-currency', 'NftListing\NftListingCurrencyController@index');                                    /*  List    */     
                Route::post('nft-listing-currency', 'NftListing\NftListingCurrencyController@store');                                   /*  Create  */   
                Route::get('nft-listing-currency/{nft_listing_currency_id}/edit', 'NftListing\NftListingCurrencyController@edit');      /*  Edit    */ 
                Route::get('nft-listing-currency/{nft_listing_currency_id}/show', 'NftListing\NftListingCurrencyController@show');      /*  Show    */  
                Route::post('nft-listing-currency/{nft_listing_currency_id}', 'NftListing\NftListingCurrencyController@update');        /*  Update  */  
                Route::delete('nft-listing-currency/{nft_listing_currency_id}', 'NftListing\NftListingCurrencyController@destroy');     /*  Destroy */
            
            
            /*
            |--------------------------------------------------------------------------
            | NftMarketplaces Routes  
            |--------------------------------------------------------------------------
            */ 
            Route::get('nft-marketplaces-all', 'NftMarketplaces\NftMarketplacesController@All');                            /*  All     */ 
            Route::get('nft-marketplaces', 'NftMarketplaces\NftMarketplacesController@index');                              /*  List    */   
            Route::post('nft-marketplaces', 'NftMarketplaces\NftMarketplacesController@store');                             /*  Create  */   
            Route::get('nft-marketplaces/{nft_marketplace_id}/edit', 'NftMarketplaces\NftMarketplacesController@edit');     /*  Edit    */ 
            Route::get('nft-marketplaces/{nft_marketplace_id}/show', 'NftMarketplaces\NftMarketplacesController@show');     /*  Show    */ 
            Route::post('nft-marketplaces/{nft_marketplace_id}', 'NftMarketplaces\NftMarketplacesController@update');       /*  Update  */ 
            Route::delete('nft-marketplaces/{nft_marketplace_id}', 'NftMarketplaces\NftMarketplacesController@destroy');    /*  Destroy */
            
            
            /*
            |--------------------------------------------------------------------------
            | Menu Cards Routes   
            |--------------------------------------------------------------------------
            */  
            Route::get('menu-cards', 'MenuCards\MenuCardsController@index');                     /*  List    */     
            Route::post('menu-cards', 'MenuCards\MenuCardsController@store');                    /*  Create  */   
            Route::get('menu-cards/{menu_card_id}/edit', 'MenuCards\MenuCardsController@edit');  /*  Edit    */ 
            Route::get('menu-cards/{menu_card_id}/show', 'MenuCards\MenuCardsController@show');  /*  Show    */  
            Route::post('menu-cards/{menu_card_id}', 'MenuCards\MenuCardsController@update');    /*  Update  */  
            Route::delete('menu-cards/{menu_card_id}', 'MenuCards\MenuCardsController@destroy'); /*  Destroy */
            
            /*
            |--------------------------------------------------------------------------
            | Coins Routes  
            |--------------------------------------------------------------------------
            */
                Route::get('coins-all', 'Coins\CoinsController@All');                /*  All    */ 
                Route::get('coins', 'Coins\CoinsController@index');                /*  List    */ 
                Route::post('coins', 'Coins\CoinsController@store');               /*  Create  */  
                Route::get('coins/{coin_id}/edit', 'Coins\CoinsController@edit');  /*  Edit    */ 
                Route::get('coins/{coin_id}/show', 'Coins\CoinsController@show');  /*  Show    */ 
                Route::post('coins/{coin_id}', 'Coins\CoinsController@update');    /*  Update  */   
                Route::delete('coins/{coin_id}', 'Coins\CoinsController@destroy'); /*  Destroy */
            
                
                /*
                |--------------------------------------------------------------------------
                | Coins Audit Routes  
                |--------------------------------------------------------------------------
                */
                Route::get('coins-audit-all', 'Coins\CoinsAuditController@All');                    /*  All     */ 
                Route::get('coins-audit', 'Coins\CoinsAuditController@index');                      /*  List    */      
                Route::post('coins-audit', 'Coins\CoinsAuditController@store');                     /*  Create  */  
                Route::get('coins-audit/{coin_audit_id}/edit', 'Coins\CoinsAuditController@edit');  /*  Edit    */ 
                Route::get('coins-audit/{coin_audit_id}/show', 'Coins\CoinsAuditController@show');  /*  Show    */ 
                Route::post('coins-audit/{coin_audit_id}', 'Coins\CoinsAuditController@update');    /*  Update  */   
                Route::delete('coins-audit/{coin_audit_id}', 'Coins\CoinsAuditController@destroy'); /*  Destroy */
            
                /*
                |--------------------------------------------------------------------------
                | Coins Chart Provider Routes  
                |--------------------------------------------------------------------------
                */
                Route::get('coins-chart-provider-all', 'Coins\CoinsChartProviderController@All');                    /*  All     */ 
                Route::get('coins-chart-provider', 'Coins\CoinsChartProviderController@index');                      /*  List    */      
                Route::post('coins-chart-provider', 'Coins\CoinsChartProviderController@store');                     /*  Create  */  
                Route::get('coins-chart-provider/{coin_chart_id}/edit', 'Coins\CoinsChartProviderController@edit');  /*  Edit    */ 
                Route::get('coins-chart-provider/{coin_chart_id}/show', 'Coins\CoinsChartProviderController@show');  /*  Show    */ 
                Route::post('coins-chart-provider/{coin_chart_id}', 'Coins\CoinsChartProviderController@update');    /*  Update  */   
                Route::delete('coins-chart-provider/{coin_chart_id}', 'Coins\CoinsChartProviderController@destroy'); /*  Destroy */
            
                /*
                |--------------------------------------------------------------------------
                | Coins Community Routes  
                |--------------------------------------------------------------------------
                */
//                Route::get('coins-community-all', 'Coins\CoinsCommunityController@All');                        /*  All     */ 
//                Route::get('coins-community', 'Coins\CoinsCommunityController@index');                          /*  List    */      
//                Route::post('coins-community', 'Coins\CoinsCommunityController@store');                         /*  Create  */  
//                Route::get('coins-community/{coin_community_id}/edit', 'Coins\CoinsCommunityController@edit');  /*  Edit    */ 
//                Route::get('coins-community/{coin_community_id}/show', 'Coins\CoinsCommunityController@show');  /*  Show    */ 
//                Route::post('coins-community/{coin_community_id}', 'Coins\CoinsCommunityController@update');    /*  Update  */   
//                Route::delete('coins-community/{coin_community_id}', 'Coins\CoinsCommunityController@destroy'); /*  Destroy */
//            
                /*
                |--------------------------------------------------------------------------
                | Coins Chat Routes  
                |--------------------------------------------------------------------------
                */
                Route::get('coins-chat-all', 'Coins\CoinsChatController@All');                   /*  All     */ 
                Route::get('coins-chat', 'Coins\CoinsChatController@index');                     /*  List    */      
                Route::post('coins-chat', 'Coins\CoinsChatController@store');                    /*  Create  */  
                Route::get('coins-chat/{coin_chat_id}/edit', 'Coins\CoinsChatController@edit');  /*  Edit    */ 
                Route::get('coins-chat/{coin_chat_id}/show', 'Coins\CoinsChatController@show');  /*  Show    */ 
                Route::post('coins-chat/{coin_chat_id}', 'Coins\CoinsChatController@update');    /*  Update  */   
                Route::delete('coins-chat/{coin_chat_id}', 'Coins\CoinsChatController@destroy'); /*  Destroy */
            
                /*
                |--------------------------------------------------------------------------
                | Coins Socials Routes  
                |--------------------------------------------------------------------------
                */
                Route::get('coins-socials-all', 'Coins\CoinsSocialsController@All');                        /*  All     */ 
                Route::get('coins-socials', 'Coins\CoinsSocialsController@index');                          /*  List    */      
                Route::post('coins-socials', 'Coins\CoinsSocialsController@store');                         /*  Create  */  
                Route::get('coins-socials/{coin_socials_id}/edit', 'Coins\CoinsSocialsController@edit');    /*  Edit    */ 
                Route::get('coins-socials/{coin_socials_id}/show', 'Coins\CoinsSocialsController@show');    /*  Show    */ 
                Route::post('coins-socials/{coin_socials_id}', 'Coins\CoinsSocialsController@update');      /*  Update  */   
                Route::delete('coins-socials/{coin_socials_id}', 'Coins\CoinsSocialsController@destroy');   /*  Destroy */
            
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
            Route::get('networks-all', 'Networks\NetworksController@All');                  /*  All     */ 
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
            Route::get('exchange-all', 'Exchange\ExchangeController@All');                  /*  All     */ 
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