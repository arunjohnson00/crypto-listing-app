<?php

namespace Modules\Backend\Http\Controllers\Events;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\EventsCategory;
use Validator; use \Exception;

class EventsCategoryController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Events Category is created successfully.';
        $this->createErrorMessage   =   'Events Category is not created successfully.';
        $this->updateMessage        =   'Events Category is updated successfully.';
        $this->updateErrorMessage   =   'Events Category is not updated successfully.';
        $this->deleteMessage        =   'Events Category is deleted successfully.';
        $this->deleteErrorMessage   =   'Events Category is not deleted successfully.';   
        $this->NotFoundMessage      =   'Events Category not found!';  
    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => EventsCategory::where('status',1)->orderBy('id','desc')->get() ]);    
    }

    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         return \DataTables::of(EventsCategory::orderBy('id','desc')->get())->make(true);    
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
         ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [ 'name'=>$request->name,'status'=>$request->status ];
            
            try{ EventsCategory::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $event_category_id
     * @return Renderable
     */
    public function show($event_category_id)
    {
        $EventsCategory = EventsCategory::where('id',$event_category_id)->first();  
        if($EventsCategory):
            return response()->json(['response'=>true,'data'=>$EventsCategory]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $event_category_id
     * @return Renderable
     */
    public function edit($event_category_id)
    {
        $EventsCategory = EventsCategory::where('id',$event_category_id)->first();  
        if($EventsCategory):
            return response()->json(['response'=>true,'data'=>$EventsCategory]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $event_category_id
     * @return Renderable
     */
    public function update(Request $request, $event_category_id)
    {
        $EventsCategory = EventsCategory::find($event_category_id);  $error = null;
        if($EventsCategory): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric", 
            ]);
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,'status'=>$request->status ]; 
                try{ $EventsCategory->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $event_category_id
     * @return Renderable
     */
    public function destroy($event_category_id)
    {
        $EventsCategory = EventsCategory::where('id',$event_category_id)->first();  
        if($EventsCategory):
            $EventsCategory->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
