<?php

namespace Modules\Backend\Http\Controllers\Settings;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\MasterSettings;
use Validator; use \Exception;

class MasterSettingsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function random_votes_store(Request $request)
    {
        $slug = 'votes-with-random-coins';
        if($request->exists('store') && $request->store && $request->isMethod('post')): 
            $validator = Validator::make($request->all(), [ 'from' => "required|numeric",   "to" => "required|numeric",  ]);
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */ $error=null;$from = $request->from; $to = $request->to; 
                try
                {   
                    if($from <= $to ):  
                        $MasterSettings = MasterSettings::where('slug',$slug)->first();
                        $data['slug']=$slug; $data['setting'] = json_encode(array('from'=>$from,'to'=>$to));
                        if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                        else: /*insert*/  MasterSettings::insert($data); endif;
                    else: $error = 'From value must be grater than or equal To value'; endif;
                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:   return response()->json(['response'=>false,'message'=>'Not Updated successfully'.$error]); endif;
            endif;
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
        
        
        
       // return \Redirect::route('master_settings');   
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function discount_store(Request $request)
    {
        $slug = 'discount_settings';
        if($request->exists('store') && $request->store && $request->isMethod('post')):   
            $validator = Validator::make($request->all(), [ 'duration' => 'required', "percentage" => "required|numeric",  ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
            else:  /*validation passed */
                $error=null; $duration = $request->duration; $percentage = $request->percentage; 
                try
                {    
                    $MasterSettings = MasterSettings::where('slug',$slug)->first();
                    $data=[ 'slug' => $slug, 'setting' => json_encode(array('duration'=>$duration,'percentage'=>$percentage))];
                    if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                    else: /*insert*/  MasterSettings::insert($data); endif;

                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:  return response()->json(['response'=>false,'message'=>'Not Updated successfully <br/>'.$error]); endif;
               // return \Redirect::route('master_settings');   
            endif; 
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function privacy_policy_store(Request $request)
    {
        $slug = 'privacy_policy_text';
        if($request->exists('store') && $request->store && $request->isMethod('post')):   
            $validator = Validator::make($request->all(), [ 'policy_text' => 'required',   ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
            else:  /*validation passed */
                $error=null; $policy_text = $request->policy_text; 
                try
                {    
                    $MasterSettings = MasterSettings::where('slug',$slug)->first();
                    $data=[ 'slug' => $slug, 'setting' => json_encode(array('policy_text'=>$policy_text))];
                    if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                    else: /*insert*/  MasterSettings::insert($data); endif;

                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:  return response()->json(['response'=>false,'message'=>'Not Updated successfully <br/>'.$error]); endif;
               // return \Redirect::route('master_settings');   
            endif; 
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function disclaimer_store(Request $request)
    {
        $slug = 'disclaimer_text';
        if($request->exists('store') && $request->store && $request->isMethod('post')):   
            $validator = Validator::make($request->all(), [ 'disclaimer_text' => 'required',   ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
            else:  /*validation passed */
                $error=null; $disclaimer_text = $request->disclaimer_text; 
                try
                {    
                    $MasterSettings = MasterSettings::where('slug',$slug)->first();
                    $data=[ 'slug' => $slug, 'setting' => json_encode(array('disclaimer_text'=>$disclaimer_text))];
                    if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                    else: /*insert*/  MasterSettings::insert($data); endif;

                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:  return response()->json(['response'=>false,'message'=>'Not Updated successfully <br/>'.$error]); endif;
               // return \Redirect::route('master_settings');   
            endif; 
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function terms_and_conditions_store(Request $request)
    {
        $slug = 'terms_and_conditions_text';
        if($request->exists('store') && $request->store && $request->isMethod('post')):   
            $validator = Validator::make($request->all(), [ 'terms_and_conditions_text' => 'required',   ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
            else:  /*validation passed */
                $error=null; $terms_and_conditions_text = $request->terms_and_conditions_text; 
                try
                {    
                    $MasterSettings = MasterSettings::where('slug',$slug)->first();
                    $data=[ 'slug' => $slug, 'setting' => json_encode(array('terms_and_conditions_text'=>$terms_and_conditions_text))];
                    if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                    else: /*insert*/  MasterSettings::insert($data); endif;

                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:  return response()->json(['response'=>false,'message'=>'Not Updated successfully <br/>'.$error]); endif;
               // return \Redirect::route('master_settings');   
            endif; 
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function top_bar_notification_store(Request $request)
    {
        $slug = 'top_bar_notification_text';
        if($request->exists('store') && $request->store && $request->isMethod('post')):   
            $validator = Validator::make($request->all(), [ 'top_bar_notification_text' => 'required',   ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
            else:  /*validation passed */
                $error=null; $top_bar_notification_text = $request->top_bar_notification_text; 
                try
                {    
                    $MasterSettings = MasterSettings::where('slug',$slug)->first();
                    $data=[ 'slug' => $slug, 'setting' => json_encode(array('top_bar_notification_text'=>$top_bar_notification_text))];
                    if($MasterSettings): /*update*/ $MasterSettings->update($data); 
                    else: /*insert*/  MasterSettings::insert($data); endif;

                } catch (Exception $ex) {$error = $ex->getMessage(); }

                if($error == null):  return response()->json(['response'=>true,'message'=>'Updated successfully']);
                else:  return response()->json(['response'=>false,'message'=>'Not Updated successfully <br/>'.$error]); endif;
               // return \Redirect::route('master_settings');   
            endif; 
        elseif($request->exists('show') && $request->show && $request->isMethod('get')):
            $MasterSettings = MasterSettings::where('slug',$slug)->first();
            return response()->json(['response'=>($MasterSettings) ? true : false,'data'=>$MasterSettings]);
        else:  return response()->json(['response'=>false,'message'=>'Not Foud'], 404); endif;
    }
    
       
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function change_password(Request $request)
    {
        $validator = Validator::make($request->all(), [  
            'password' => 'required|min:6|same:password_confirmation',
            'password_confirmation' => 'required|min:6'
        ]);
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422); 
        else:  /*validation passed */
            $user = auth('backend_api')->user();
            $password =bcrypt($request->password);
            \Modules\Backend\Entities\AdminUser::find($user->id)->update(['password' => $password]);
            return response()->json(['response'=>true,'message'=>'Updated successfully']);
        endif;
    }
    
    
    
    
    
}
