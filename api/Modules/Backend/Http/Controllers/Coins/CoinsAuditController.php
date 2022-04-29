<?php

namespace Modules\Backend\Http\Controllers\Coins;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\CoinsAudit;
use Validator; use \Exception;

class CoinsAuditController extends Controller
{
     public function __construct()
    {    
        $this->createMessage        =   'Coin Audit is created successfully.';
        $this->createErrorMessage   =   'Coin Audit is not created successfully.';
        $this->updateMessage        =   'Coin Audit is updated successfully.';
        $this->updateErrorMessage   =   'Coin Audit is not updated successfully.';
        $this->deleteMessage        =   'Coin Audit is deleted successfully.';
        $this->deleteErrorMessage   =   'Coin Audit is not deleted successfully.';  
        $this->NotFoundMessage      =   'Coin Audit not found!'; 
    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => CoinsAudit::orderBy('id','desc')->get() ]);    
    }
     
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(CoinsAudit::orderBy('id','desc')->get())->make(true);    
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
            $data = [ 'name'=>$request->name,   'status'=>$request->status ];
            try{ CoinsAudit::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $coin_audit_id
     * @return Renderable
     */
    public function show($coin_audit_id)
    {
        $CoinsAudit = CoinsAudit::where('id',$coin_audit_id)->first();  
        if($CoinsAudit):
            return response()->json(['response'=>true,'data'=>$CoinsAudit]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $coin_audit_id
     * @return Renderable
     */
    public function edit($coin_audit_id)
    {
        $CoinsAudit = CoinsAudit::where('id',$coin_audit_id)->first();  
        if($CoinsAudit):
            return response()->json(['response'=>true,'data'=>$CoinsAudit]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $coin_audit_id
     * @return Renderable
     */
    public function update(Request $request, $coin_audit_id)
    {
        $CoinsAudit = CoinsAudit::where('id',$coin_audit_id)->first(); $error = null;
         if($CoinsAudit): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric", 
            ]);  
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,   'status'=>$request->status ]; 
                try{ $CoinsAudit->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
        
    }

    /**
     * Remove the specified resource from storage.
     * @param int $coin_audit_id
     * @return Renderable
     */
    public function destroy($coin_audit_id)
    {
        $CoinsAudit = CoinsAudit::where('id',$coin_audit_id)->first();
        if($CoinsAudit):
            $CoinsAudit->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteErrorMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
