<?php

namespace Modules\Backend\Http\Controllers\NftListing;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator; use \Exception;
use Modules\Backend\Entities\NftLstingCategory;

class NftListingCategoryController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Nft Listing Category is created successfully.';
        $this->createErrorMessage   =   'Nft Listing Category is not created successfully.';
        $this->updateMessage        =   'Nft Listing Category is updated successfully.';
        $this->updateErrorMessage   =   'Nft Listing Category is not updated successfully.';
        $this->deleteMessage        =   'Nft Listing Category is deleted successfully.';
        $this->deleteErrorMessage   =   'Nft Listing Category is not deleted successfully.';  
        $this->NotFoundMessage      =   'Nft Listing Category not found!'; 
    }
    
     /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => NftLstingCategory::select('id','name')->where('status',1)->orderBy('id','desc')->get() ]);    
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         return \DataTables::of(NftLstingCategory::orderBy('id','desc')->get())->make(true);  
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
            try{ NftLstingCategory::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $nft_listing_category_id
     * @return Renderable
     */
    public function show($nft_listing_category_id)
    {
        $nft_listing_category = NftLstingCategory::where('id',$nft_listing_category_id)->first();  
        if($nft_listing_category):
            return response()->json(['response'=>true,'data'=>$nft_listing_category]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $nft_listing_category_id
     * @return Renderable
     */
    public function edit($nft_listing_category_id)
    {
        $nft_listing_category = NftLstingCategory::where('id',$nft_listing_category_id)->first();  
        if($nft_listing_category):
            return response()->json(['response'=>true,'data'=>$nft_listing_category]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $nft_listing_category_id
     * @return Renderable
     */
    public function update(Request $request, $nft_listing_category_id)
    {
        $nft_listing_category = NftLstingCategory::find($nft_listing_category_id);  $error = null;
        if($nft_listing_category): 
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255', "status" => "required|numeric"
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [ 'name'=>$request->name,'status'=>$request->status ]; 
                try{ $nft_listing_category->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    
    }

    /**
     * Remove the specified resource from storage.
     * @param int $nft_listing_category_id
     * @return Renderable
     */
    public function destroy($nft_listing_category_id)
    {
        $nft_listing_category = NftLstingCategory::where('id',$nft_listing_category_id)->first();  
        if($nft_listing_category):
            $nft_listing_category->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
