<?php

namespace Modules\Backend\Http\Controllers\NftMarketplaces;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\NftMarketplaces;
use Validator; use \Exception;

class NftMarketplacesController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Nft Marketplace is created successfully.';
        $this->createErrorMessage   =   'Nft Marketplace is not created successfully.';
        $this->updateMessage        =   'Nft Marketplace is updated successfully.';
        $this->updateErrorMessage   =   'Nft Marketplace is not updated successfully.';
        $this->deleteMessage        =   'Nft Marketplace is deleted successfully.';
        $this->deleteErrorMessage   =   'Nft Marketplace is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/nft_marketplace_icons/';
        $this->NotFoundMessage      =   'Nft Marketplace not found!'; 
    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => NftMarketplaces::orderBy('id','desc')->get() ]);    
    }

    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(NftMarketplaces::orderBy('id','desc')->get())->make(true);    
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
            try{ NftMarketplaces::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $nft_marketplace_id
     * @return Renderable
     */
    public function show($nft_marketplace_id)
    {       
        $nft_marketplace = NftMarketplaces::where('id',$nft_marketplace_id)->first();  
        if($nft_marketplace):
            return response()->json(['response'=>true,'data'=>$nft_marketplace]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $nft_marketplace_id
     * @return Renderable
     */
    public function edit($nft_marketplace_id)
    { 
        $nft_marketplace = NftMarketplaces::where('id',$nft_marketplace_id)->first();  
        if($nft_marketplace):
            return response()->json(['response'=>true,'data'=>$nft_marketplace]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $nft_marketplace_id
     * @return Renderable
     */
    public function update(Request $request,$nft_marketplace_id)
    {
        $nft_marketplace = NftMarketplaces::find($nft_marketplace_id);  $error = null;
        if($nft_marketplace): 
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
                try{ $nft_marketplace->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
    }

    /**
     * Remove the specified resource from storage.
     * @param int $nft_marketplace_id
     * @return Renderable
     */
    public function destroy($nft_marketplace_id)
    {
        $nft_marketplace = NftMarketplaces::where('id',$nft_marketplace_id)->first();  
        if($nft_marketplace):
            $nft_marketplace->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteErrorMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
