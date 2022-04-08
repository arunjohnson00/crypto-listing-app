<?php

namespace Modules\Backend\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

//use Closure;
//use Illuminate\Support\Facades\Auth;
//use Tymon\JWTAuth\Facades\JWTAuth;
//use Tymon\JWTAuth\Exceptions\JWTException;
//use Tymon\JWTAuth\Exceptions\TokenExpiredException;
//use Tymon\JWTAuth\Exceptions\TokenInvalidException;
//use \Auth;
class RedirectIfAuthenticated extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    { 
        if($guard != null){ 
            auth()->shouldUse($guard);
            try 
            {
                $user = JWTAuth::parseToken()->authenticate();
                  
            } catch (Exception $e) {
                if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                    return response()->json(['status' => 'Token is Invalid']);
                }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                    return response()->json(['status' => 'Token is Expired']);
                }else{
                    return response()->json(['status' => 'Authorization Token not found']);
                }
            }
            return $next($request);
        }
        return $this->unauthorized();
     
    }
    
    
    
//    public function handle($request, Closure $next, $guard = null)
//    {
////        dd($request->all());
//        try {
//            //Access token from the request        
//            $token = JWTAuth::parseToken();
//             
//            //Try authenticating user       
//            $user = $token->authenticate();
////            dd($user);
//        } catch (TokenExpiredException $e) {
//            //Thrown if token has expired        
//            return $this->unauthorized('Your token has expired. Please, login again.');
//        } catch (TokenInvalidException $e) {
//            //Thrown if token invalid
//            return $this->unauthorized('Your token is invalid. Please, login again.');
//        }catch (JWTException $e) {
//            //Thrown if token was not found in the request.
//            return $this->unauthorized('Please, attach a Bearer Token to your request');
//        }
//        //If user was authenticated successfully and user is in one of the acceptable roles, send to next request.
////        if ($user && in_array($user->role, $roles)) {
//        if ($user) {
//            return $next($request);
//        }
//
//        return $this->unauthorized();
//    }
//
//        private function unauthorized($message = null){
//            return response()->json([
//                'message' => $message ? $message : 'You are unauthorized to access this resource',
//                'success' => false
//            ], 401);
//        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
