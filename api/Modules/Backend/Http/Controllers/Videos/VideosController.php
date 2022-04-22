<?php

namespace Modules\Backend\Http\Controllers\Videos;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Videos;
use Validator; use \Exception;

class VideosController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Video is created successfully.';
        $this->createErrorMessage   =   'Video is not created successfully.';
        $this->updateMessage        =   'Video is updated successfully.';
        $this->updateErrorMessage   =   'Video is not updated successfully.';
        $this->deleteMessage        =   'Video is deleted successfully.';
        $this->deleteErrorMessage   =   'Video is not deleted successfully.';  
        $this->NotFoundMessage      =   'Video not found!'; 
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         return \DataTables::of(Videos::orderBy('id','desc')->get())->make(true); 
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
            'name'        => 'required|max:255',            'title'         => 'required|max:255',
            'sub_title'   => 'required|max:255',            'url'           => 'required',
            'button_name' => 'required|max:255',            'button_url'     => 'required',
            "status"      => "required|numeric",  
        ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [
                'v_name'     => $request->name,           'v_title'   => $request->title,         'v_sub_title' => $request->sub_title,   'v_url'=>$request->url, 
                'v_btn_name' => $request->button_name,    'v_btn_url' => $request->button_url,    'status'      => $request->status, 
            ];
            try{ Videos::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif;
    }

    /**
     * Show the specified resource.
     * @param int $video_id
     * @return Renderable
     */
    public function show($video_id)
    {
        $video = Videos::where('id',$video_id)->first();  
        if($video):
            return response()->json(['response'=>true,'data'=>$video]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $video_id
     * @return Renderable
     */
    public function edit($video_id)
    {
        $video = Videos::where('id',$video_id)->first();  
        if($video):
            return response()->json(['response'=>true,'data'=>$video]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $video_id
     * @return Renderable
     */
    public function update(Request $request, $video_id)
    {
        $video = Videos::where('id',$video_id)->first(); $error = null;
        if($video): 
            $validator = Validator::make($request->all(), [
                'name'        => 'required|max:255',            'title'         => 'required|max:255',
                'sub_title'   => 'required|max:255',            'url'           => 'required',
                'button_name' => 'required|max:255',            'button_url'     => 'required',
                "status"      => "required|numeric",  
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [
                    'v_name'     => $request->name,           'v_title'   => $request->title,         'v_sub_title' => $request->sub_title,   'v_url'=>$request->url, 
                    'v_btn_name' => $request->button_name,    'v_btn_url' => $request->button_url,    'status'      => $request->status, 
                ];
                try{ if(!empty($data)){$video->update($data);} } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    }

    /**
     * Remove the specified resource from storage.
     * @param int $video_id
     * @return Renderable
     */
    public function destroy($video_id)
    {
        $video = Videos::where('id',$video_id)->first(); 
        if($video):
            $video->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteErrorMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
