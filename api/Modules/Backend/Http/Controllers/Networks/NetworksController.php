<?php

namespace Modules\Backend\Http\Controllers\Networks;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Networks;
use Validator; use \Exception;
class NetworksController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Network is created successfully.';
        $this->createErrorMessage   =   'Network is not created successfully.';
        $this->updateMessage        =   'Network is updated successfully.';
        $this->updateErrorMessage   =   'Network is not updated successfully.';
        $this->deleteMessage        =   'Network is deleted successfully.';
        $this->deleteErrorMessage   =   'Network is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/network_icons/';
        $this->NotFoundMessage      =   'Network not found!'; 
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(Networks::orderBy('id','desc')->get())->make(true);    
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
            'name' => 'required|max:255', "status" => "required|numeric", 
            "thumb_icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000' // max 3mb, 
        ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [
                'name'=>$request->name,
                'status'=>$request->status,  
                'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null,
                'chain_id'=> ($request->exists('chain_id') && $request->chain_id !=null) ? $request->chain_id : null,
                'explorer_url'=> ($request->exists('explorer_url') && $request->explorer_url !=null) ? $request->explorer_url : null,
                'currency_symbol'=> ($request->exists('currency_symbol') && $request->currency_symbol !=null) ? $request->currency_symbol : null,
            ];
            if($request->exists('thumb_icon')):  
                $thumb_icon = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath.'t/', $this->allowedfileExtension); 
                if(isset($thumb_icon['file_name'])): $data['thumb_icon'] = $thumb_icon['file_name']; endif; 
            endif; 
            if($request->exists('network_icon')):  
                $network_icon = \App\Helpers\FileHelper::upload($request->network_icon, $this->FilePath.'n/', $this->allowedfileExtension); 
                if(isset($network_icon['file_name'])): $data['network_icon'] = $network_icon['file_name']; endif; 
            endif;
            try{ Networks::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $networks_id
     * @return Renderable
     */
    public function show($networks_id)
    {       
        $network = Networks::where('id',$networks_id)->first();  
        if($network):
            return response()->json(['response'=>true,'data'=>$network]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $networks_id
     * @return Renderable
     */
    public function edit($networks_id)
    { 
        $network = Networks::where('id',$networks_id)->first();  
        if($network):
            return response()->json(['response'=>true,'data'=>$network]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $networks_id
     * @return Renderable
     */
    public function update(Request $request,$networks_id)
    {
        $network = Networks::find($networks_id);  $error = null;
        if($network): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric", 
                "thumb_icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [
                    'name'=>$request->name,
                    'status'=>$request->status,  
                    'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null,
                    'chain_id'=> ($request->exists('chain_id') && $request->chain_id !=null) ? $request->chain_id : null,
                    'explorer_url'=> ($request->exists('explorer_url') && $request->explorer_url !=null) ? $request->explorer_url : null,
                    'currency_symbol'=> ($request->exists('currency_symbol') && $request->currency_symbol !=null) ? $request->currency_symbol : null,
                ];
                if($request->exists('thumb_icon')):  
                    $thumb_icon = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath.'t/', $this->allowedfileExtension); 
                    if(isset($thumb_icon['file_name'])): $data['thumb_icon'] = $thumb_icon['file_name']; endif; 
                endif; 
                if($request->exists('network_icon')):  
                    $network_icon = \App\Helpers\FileHelper::upload($request->network_icon, $this->FilePath.'n/', $this->allowedfileExtension); 
                    if(isset($network_icon['file_name'])): $data['network_icon'] = $network_icon['file_name']; endif; 
                endif;
                try{ $network->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    }

    /**
     * Remove the specified resource from storage.
     * @param int $networks_id
     * @return Renderable
     */
    public function destroy($networks_id)
    {
        $network = Networks::where('id',$networks_id)->first();  
        if($network):
            $network->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteErrorMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
