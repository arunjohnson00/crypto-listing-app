<?php

namespace Modules\Backend\Http\Controllers\Exchange;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Exchange;
use Validator; use \Exception;
class ExchangeController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Exchange is created successfully.';
        $this->createErrorMessage   =   'Exchange is not created successfully.';
        $this->updateMessage        =   'Exchange is updated successfully.';
        $this->updateErrorMessage   =   'Exchange is not updated successfully.';
        $this->deleteMessage        =   'Exchange is deleted successfully.';
        $this->deleteErrorMessage   =   'Exchange is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/exchange_icons/';
        $this->NotFoundMessage      =   'Exchange not found!'; 
    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => Exchange::orderBy('id','desc')->get() ]);    
    }

    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(Exchange::orderBy('id','desc')->get())->make(true);    
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
                'name'=>$request->name,'status'=>$request->status,  
                'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null,  
            ];
            if($request->exists('thumb_icon')):  
                $thumb_icon = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath, $this->allowedfileExtension); 
                if(isset($thumb_icon['file_name'])): $data['thumb_icon'] = $thumb_icon['file_name']; endif; 
            endif; 
            try{ Exchange::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $exchange_id
     * @return Renderable
     */
    public function show($exchange_id)
    {       
        $exchange = Exchange::where('id',$exchange_id)->first();  
        if($exchange):
            return response()->json(['response'=>true,'data'=>$exchange]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $exchange_id
     * @return Renderable
     */
    public function edit($exchange_id)
    { 
        $exchange = Exchange::where('id',$exchange_id)->first();  
        if($exchange):
            return response()->json(['response'=>true,'data'=>$exchange]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $exchange_id
     * @return Renderable
     */
    public function update(Request $request,$exchange_id)
    {
        $exchange = Exchange::find($exchange_id);  $error = null;
        if($exchange): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric", 
                "thumb_icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,'status'=>$request->status, 'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null, ];
                if($request->exists('thumb_icon')):  
                    $thumb_icon = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath, $this->allowedfileExtension); 
                    if(isset($thumb_icon['file_name'])): $data['thumb_icon'] = $thumb_icon['file_name']; endif; 
                endif; 
                try{ $exchange->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    }

    /**
     * Remove the specified resource from storage.
     * @param int $exchange_id
     * @return Renderable
     */
    public function destroy($exchange_id)
    {
        $exchange = Exchange::where('id',$exchange_id)->first();  
        if($exchange):
            $exchange->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
