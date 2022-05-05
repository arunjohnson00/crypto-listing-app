<?php
 
namespace Modules\Backend\Http\Controllers\UserNotifications;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\UserNotifications;
 

class UserNotificationsController extends Controller
{
     /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => UserNotifications::orderBy('id','desc')->get() ]);    
    }  
}
