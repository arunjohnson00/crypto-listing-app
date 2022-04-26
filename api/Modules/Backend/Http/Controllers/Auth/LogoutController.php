<?php

namespace Modules\Backend\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class LogoutController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
//        $this->middleware('auth:backend_api')->except('login');
//        return response()->json([ 'valid' => auth()->check() ]);
        $this->middleware('auth:backend_api');
//        $this->middleware('auth:backend_api', ['except' => ['login']]);
//        $this->middleware('auth:backend_api', ['only' => ['refresh','me','logout']]); 
    }
    
   /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
 
        auth('backend_api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
