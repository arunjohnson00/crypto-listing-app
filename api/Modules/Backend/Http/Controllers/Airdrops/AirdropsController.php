<?php

namespace Modules\Backend\Http\Controllers\Airdrops;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Airdrops;
use Validator; use \Exception;

class AirdropsController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Airdrops is created successfully.';
        $this->createErrorMessage   =   'Airdrops is not created successfully.';
        $this->updateMessage        =   'Airdrops is updated successfully.';
        $this->updateErrorMessage   =   'Airdrops is not updated successfully.';
        $this->deleteMessage        =   'Airdrops is deleted successfully.';
        $this->deleteErrorMessage   =   'Airdrops is not deleted successfully.';   
        $this->NotFoundMessage      =   'Airdrops not found!'; 
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(Airdrops::orderBy('id','desc')->get())->make(true);   
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
            'coin_id' => 'required|numeric',  "start_date" => "required|max:255", 
            "no_of_days" => "required|max:255",  "total_amount" => "required|numeric", 
            "no_of_winners" => "required|numeric", "is_follow_twitter" => "required|numeric", 
            "join_telegram" => "required|numeric",  "status" => "required|numeric", 
       ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [
                'coin_id'=>$request->coin_id, 'start_date'=>$request->start_date,
                'no_of_days'=>$request->no_of_days, 'total_amount'=>$request->total_amount,
                'no_of_winners'=>$request->no_of_winners, 'is_follow_twitter'=>$request->is_follow_twitter,
                'join_telegram'=>$request->join_telegram, 'status'=>$request->status,  
                
            ];
          
            try{Airdrops::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif;
    }

    /**
     * Show the specified resource.
     * @param int $airdrop_id
     * @return Renderable
     */
    public function show($airdrop_id)
    {
        $airdrops = Airdrops::where('id',$airdrop_id)->first();  
        if($airdrops):
            return response()->json(['response'=>true,'data'=>$airdrops]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $airdrop_id
     * @return Renderable
     */
    public function edit($airdrop_id)
    {
        $airdrops = Airdrops::where('id',$airdrop_id)->first();  
        if($airdrops):
            return response()->json(['response'=>true,'data'=>$airdrops]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $airdrop_id
     * @return Renderable
     */
    public function update(Request $request, $airdrop_id)
    {
        $airdrops = Airdrops::where('id',$airdrop_id)->first();   $error = null;
        if($airdrops): 
            $validator = Validator::make($request->all(), [
                'coin_id' => 'required|numeric',  "start_date" => "required|max:255", 
                "no_of_days" => "required|max:255",  "total_amount" => "required|numeric", 
                "no_of_winners" => "required|numeric", "is_follow_twitter" => "required|numeric", 
                "join_telegram" => "required|numeric",  "status" => "required|numeric",  ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [
                    'coin_id'=>$request->coin_id, 'start_date'=>$request->start_date,
                    'no_of_days'=>$request->no_of_days, 'total_amount'=>$request->total_amount,
                    'no_of_winners'=>$request->no_of_winners, 'is_follow_twitter'=>$request->is_follow_twitter,
                    'join_telegram'=>$request->join_telegram, 'status'=>$request->status,  
                ];
                try{ $airdrops->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $airdrop_id
     * @return Renderable
     */
    public function destroy($airdrop_id)
    {
        $airdrops = Airdrops::where('id',$airdrop_id)->first();  
        if($airdrops):
            $airdrops->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
