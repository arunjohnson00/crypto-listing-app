<?php

namespace Modules\Backend\Http\Controllers\Events;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\RewardAddress;
use Validator; use \Exception;

class RewardAddressController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Reward Address is created successfully.';
        $this->createErrorMessage   =   'Reward Address is not created successfully.';
        $this->updateMessage        =   'Reward Address is updated successfully.';
        $this->updateErrorMessage   =   'Reward Address is not updated successfully.';
        $this->deleteMessage        =   'Reward Address is deleted successfully.';
        $this->deleteErrorMessage   =   'Reward Address is not deleted successfully.';   
        $this->NotFoundMessage      =   'Reward Address not found!';  
    }
    
     /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => RewardAddress::where('status',1)->orderBy('id','desc')->get() ]);    
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return \DataTables::of(RewardAddress::orderBy('id','desc')->get())->make(true);   
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
            'name' => 'required|max:255','symbol' => 'required|max:255', "status" => "required|numeric", 
         ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [ 'name'=>$request->name,'symbol'=>$request->symbol,'status'=>$request->status ];
            
            try{ RewardAddress::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $reward_address_id
     * @return Renderable
     */
    public function show($reward_address_id)
    {
        $reward_address = RewardAddress::where('id',$reward_address_id)->first();  
        if($reward_address):
            return response()->json(['response'=>true,'data'=>$reward_address]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $reward_address_id
     * @return Renderable
     */
    public function edit($reward_address_id)
    {
        $reward_address = RewardAddress::where('id',$reward_address_id)->first();  
        if($reward_address):
            return response()->json(['response'=>true,'data'=>$reward_address]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $reward_address_id
     * @return Renderable
     */
    public function update(Request $request, $reward_address_id)
    {
        $reward_address = RewardAddress::where('id',$reward_address_id)->first();  $error = null;
        if($reward_address): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255','symbol' => 'required|max:255', "status" => "required|numeric", 
             ]);
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,'symbol'=>$request->symbol,'status'=>$request->status ];
                try{ $reward_address->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $reward_address_id
     * @return Renderable
     */
    public function destroy($reward_address_id)
    {
        $reward_address = RewardAddress::where('id',$reward_address_id)->first();  
        if($reward_address):
            $reward_address->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif;
    }
}
