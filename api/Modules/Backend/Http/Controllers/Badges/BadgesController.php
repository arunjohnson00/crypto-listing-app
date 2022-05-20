<?php

namespace Modules\Backend\Http\Controllers\Badges;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Badges;
use Validator; use \Exception;


class BadgesController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Badge is created successfully.';
        $this->createErrorMessage   =   'Badge is not created successfully.';
        $this->updateMessage        =   'Badge is updated successfully.';
        $this->updateErrorMessage   =   'Badge is not updated successfully.';
        $this->deleteMessage        =   'Badge is deleted successfully.';
        $this->deleteErrorMessage   =   'Badge is not deleted successfully.';   
        $this->NotFoundMessage      =   'Badge not found!'; 
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/badge_icons/';
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return \DataTables::of(Badges::orderBy('id','desc')->get())->make(true);  
    }
 

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        $error = null;
        $validator = Validator::make($request->all(), [ 
            "name" => "required|max:255",  
            "url" => "required", 
            "status" => "required|numeric", 
            "icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000' // max 3mb, 
       ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [ 'name'=>$request->name, 'url'=>$request->url, 'status'=>$request->status ];
            if($request->exists('icon')):  
                $_icon = \App\Helpers\FileHelper::upload($request->icon, $this->FilePath, $this->allowedfileExtension); 
                if(isset($_icon['file_name'])): $data['icon'] = $_icon['file_name']; endif; 
            endif;
            try{ Badges::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif;
    }

    /**
     * Show the specified resource.
     * @param int $badge_id
     * @return Renderable
     */
    public function show($badge_id)
    {
        $badge = Badges::where('id',$badge_id)->first();  
        if($badge):
            return response()->json(['response'=>true,'data'=>$badge]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $badge_id
     * @return Renderable
     */
    public function edit($badge_id)
    {
        $badge = Badges::where('id',$badge_id)->first();  
        if($badge):
            return response()->json(['response'=>true,'data'=>$badge]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $badge_id
     * @return Renderable
     */
    public function update(Request $request, $badge_id)
    {
        $badge = Badges::where('id',$badge_id)->first();    $error = null;
        if($badge): 
            $validator = Validator::make($request->all(), [ 
                "name" => "required|max:255",  "url" => "required",  "status" => "required|numeric", 
                "icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
           ]); 
             
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name, 'url'=>$request->url, 'status'=>$request->status ];
                if($request->exists('icon')):  
                    $_icon = \App\Helpers\FileHelper::upload($request->icon, $this->FilePath, $this->allowedfileExtension); 
                    if(isset($_icon['file_name'])): $data['icon'] = $_icon['file_name']; endif; 
                endif;
                try{ $badge->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $badge_id
     * @return Renderable
     */
    public function destroy($badge_id)
    {
        $badge = Badges::where('id',$badge_id)->first();
        if($badge):
            $badge->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
