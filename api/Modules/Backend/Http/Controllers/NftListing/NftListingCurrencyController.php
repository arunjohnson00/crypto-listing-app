<?php

namespace Modules\Backend\Http\Controllers\NftListing;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\NftLstingCurrency;
use Validator; use \Exception;

class NftListingCurrencyController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Nft Listing Currency is created successfully.';
        $this->createErrorMessage   =   'Nft Listing Currency is not created successfully.';
        $this->updateMessage        =   'Nft Listing Currency is updated successfully.';
        $this->updateErrorMessage   =   'Nft Listing Currency is not updated successfully.';
        $this->deleteMessage        =   'Nft Listing Currency is deleted successfully.';
        $this->deleteErrorMessage   =   'Nft Listing Currency is not deleted successfully.';  
        $this->NotFoundMessage      =   'Nft Listing Currency not found!'; 
    }
    
     /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => NftLstingCurrency::select('id','name','symbol')->where('status',1)->orderBy('id','desc')->get() ]);    
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         return \DataTables::of(NftLstingCurrency::orderBy('id','desc')->get())->make(true); 
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
            $data = [ 'name'=>$request->name,'symbol'=>$request->symbol, 'status'=>$request->status ]; 
            try{NftLstingCurrency::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $nft_listing_currency_id
     * @return Renderable
     */
    public function show($nft_listing_currency_id)
    {
        $nft_listing_currency = NftLstingCurrency::where('id',$nft_listing_currency_id)->first();  
        if($nft_listing_currency):
            return response()->json(['response'=>true,'data'=>$nft_listing_currency]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $nft_listing_currency_id
     * @return Renderable
     */
    public function edit($nft_listing_currency_id)
    {
        $nft_listing_currency = NftLstingCurrency::where('id',$nft_listing_currency_id)->first();  
        if($nft_listing_currency):
            return response()->json(['response'=>true,'data'=>$nft_listing_currency]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $nft_listing_currency_id
     * @return Renderable
     */
    public function update(Request $request, $nft_listing_currency_id)
    {
        $nft_listing_currency = NftLstingCurrency::find($nft_listing_currency_id);  $error = null;
        if($nft_listing_currency): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255','symbol' => 'required|max:255', "status" => "required|numeric"
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,'symbol'=>$request->symbol, 'status'=>$request->status ]; 
                try{ $nft_listing_currency->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $nft_listing_currency_id
     * @return Renderable
     */
    public function destroy($nft_listing_currency_id)
    {
        $nft_listing_currency = NftLstingCurrency::where('id',$nft_listing_currency_id)->first();  
        if($nft_listing_currency):
            $nft_listing_currency->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
