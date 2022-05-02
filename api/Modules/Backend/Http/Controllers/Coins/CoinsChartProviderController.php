<?php

namespace Modules\Backend\Http\Controllers\Coins;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\CoinsChartProvider as CoinsChart;
use Validator; use \Exception;

class CoinsChartProviderController extends Controller
{
     public function __construct()
    {    
        $this->createMessage        =   'Coin Chart Provider is created successfully.';
        $this->createErrorMessage   =   'Coin Chart Provider is not created successfully.';
        $this->updateMessage        =   'Coin Chart Provider is updated successfully.';
        $this->updateErrorMessage   =   'Coin Chart Provider is not updated successfully.';
        $this->deleteMessage        =   'Coin Chart Provider is deleted successfully.';
        $this->deleteErrorMessage   =   'Coin Chart Provider is not deleted successfully.';  
        $this->NotFoundMessage      =   'Coin Chart Provider not found!'; 
    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => CoinsChart::select('id','name','status')->orderBy('id','desc')->get() ]);    
    }
     
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(CoinsChart::orderBy('id','desc')->get())->make(true);    
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
            try{ CoinsChart::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $coin_chart_id
     * @return Renderable
     */
    public function show($coin_chart_id)
    {
        $CoinsChartProvider = CoinsChart::where('id',$coin_chart_id)->first();  
        if($CoinsChartProvider):
            return response()->json(['response'=>true,'data'=>$CoinsChartProvider]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $coin_chart_id
     * @return Renderable
     */
    public function edit($coin_chart_id)
    {
        $CoinsChartProvider = CoinsChart::where('id',$coin_chart_id)->first();  
        if($CoinsChartProvider):
            return response()->json(['response'=>true,'data'=>$CoinsChartProvider]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $coin_chart_id
     * @return Renderable
     */
    public function update(Request $request, $coin_chart_id)
    {
        $CoinsChartProvider = CoinsChart::where('id',$coin_chart_id)->first(); $error = null;
        if($CoinsChartProvider): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric", 
            ]);  
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,   'status'=>$request->status ]; 
                try{ $CoinsChartProvider->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
        
    }

    /**
     * Remove the specified resource from storage.
     * @param int $coin_chart_id
     * @return Renderable
     */
    public function destroy($coin_chart_id)
    {
        $CoinsChartProvider = CoinsChart::where('id',$coin_chart_id)->first();
        if($CoinsChartProvider):
            $CoinsChartProvider->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
