<?php

namespace Modules\Backend\Http\Controllers\Events;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Events;
use Validator; use \Exception;

class EventsController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Event is created successfully.';
        $this->createErrorMessage   =   'Event is not created successfully.';
        $this->updateMessage        =   'Event is updated successfully.';
        $this->updateErrorMessage   =   'Event is not updated successfully.';
        $this->deleteMessage        =   'Event is deleted successfully.';
        $this->deleteErrorMessage   =   'Event is not deleted successfully.';   
        $this->NotFoundMessage      =   'Event not found!'; 
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/event_proof/';
    }
    
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
      return \DataTables::of(Events::orderBy('id','desc')->get())->make(true);  
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
            "coin_id" => "required|numeric", 
            'title' => 'required|max:255', 
            'category_id' => 'required|numeric', 
            'event_date' => 'required|max:255', 
            'or_earlier' => 'numeric', 
            //'description' => 'required', 
            //'source_link' => 'required',  
            //'reward_address_id' => 'required|numeric', 
            //'address' => 'required', 
            //"twitter_account" => "required",  
            "status" => "required|numeric", 
            "proof" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000' // max 3mb, 
        ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [
                'coin_id'=>$request->coin_id,
                'title'=>$request->title,
                'category_id'=>$request->category_id,
                'event_date'=>$request->event_date,
                'or_earlier'=> ($request->exists('or_earlier') && $request->or_earlier !=null) ? $request->or_earlier : null,
                'description'=> ($request->exists('description') && $request->description !=null) ? $request->description : null,
                'source_link'=> ($request->exists('source_link') && $request->source_link !=null) ? $request->source_link : null,
                'reward_address_id'=> ($request->exists('reward_address_id') && $request->reward_address_id !=null) ? $request->reward_address_id : null,
                'address'=> ($request->exists('address') && $request->address !=null) ? $request->address : null,
                'twitter_account'=> ($request->exists('twitter_account') && $request->twitter_account !=null) ? $request->twitter_account : null,
                'status'=>$request->status,  
                  
            ];
            if($request->exists('proof')):  
                $proof = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath, $this->allowedfileExtension); 
                if(isset($proof['file_name'])): $data['proof'] = $proof['file_name']; endif; 
            endif; 
            try{ Events::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif;
    }

    /**
     * Show the specified resource.
     * @param int $event_id
     * @return Renderable
     */
    public function show($event_id)
    {
        $event = Events::where('id',$event_id)->first();  
        if($event):
            return response()->json(['response'=>true,'data'=>$event]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $event_id
     * @return Renderable
     */
    public function edit($event_id)
    {
        $event = Events::where('id',$event_id)->first();  
        if($event):
            return response()->json(['response'=>true,'data'=>$event]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

                
    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $event_id
     * @return Renderable
     */
    public function update(Request $request, $event_id)
    {
        $event = Events::where('id',$event_id)->first();    $error = null;
        if($event): 
            $validator = Validator::make($request->all(), [
                "coin_id" => "required|numeric", 
                'title' => 'required|max:255', 
                'category_id' => 'required|numeric', 
                'event_date' => 'required|max:255', 
                'or_earlier' => 'numeric', 
                //'description' => 'required', 
                //'source_link' => 'required',  
                //'reward_address_id' => 'required|numeric', 
                //'address' => 'required', 
                //"twitter_account" => "required",  
                "status" => "required|numeric", 
                "proof" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            ]);  
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [
                    'coin_id'=>$request->coin_id,
                    'title'=>$request->title,
                    'category_id'=>$request->category_id,
                    'event_date'=>$request->event_date,
                    'or_earlier'=> ($request->exists('or_earlier') && $request->or_earlier !=null) ? $request->or_earlier : null,
                    'description'=> ($request->exists('description') && $request->description !=null) ? $request->description : null,
                    'source_link'=> ($request->exists('source_link') && $request->source_link !=null) ? $request->source_link : null,
                    'reward_address_id'=> ($request->exists('reward_address_id') && $request->reward_address_id !=null) ? $request->reward_address_id : null,
                    'address'=> ($request->exists('address') && $request->address !=null) ? $request->address : null,
                    'twitter_account'=> ($request->exists('twitter_account') && $request->twitter_account !=null) ? $request->twitter_account : null,
                    'status'=>$request->status,  

                ];
               if($request->exists('proof')):  
                    $proof = \App\Helpers\FileHelper::upload($request->thumb_icon, $this->FilePath, $this->allowedfileExtension); 
                    if(isset($proof['file_name'])): $data['proof'] = $proof['file_name']; endif; 
                endif;  
                try{ $event->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $event_id
     * @return Renderable
     */
    public function destroy($event_id)
    {
        $event = Events::where('id',$event_id)->first();  
        if($event):
            $event->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
