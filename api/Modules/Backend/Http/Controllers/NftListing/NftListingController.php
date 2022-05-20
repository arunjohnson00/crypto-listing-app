<?php

namespace Modules\Backend\Http\Controllers\NftListing;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator; use \Exception;
use Modules\Backend\Entities\NftLsting;

class NftListingController extends Controller
{
    
    public function __construct()
    {    
        $this->createMessage        =   'Nft Listing is created successfully.';
        $this->createErrorMessage   =   'Nft Listing is not created successfully.';
        $this->updateMessage        =   'Nft Listing is updated successfully.';
        $this->updateErrorMessage   =   'Nft Listing is not updated successfully.';
        $this->deleteMessage        =   'Nft Listing is deleted successfully.';
        $this->deleteErrorMessage   =   'Nft Listing is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/nft_listing_image/';
        $this->NotFoundMessage      =   'Nft Listing not found!'; 
    }
    
     /**
     * All listing of the resource.
     * @return Renderable
     */
    public function All()
    {
       return response()->json([ 'data' => NftLsting::orderBy('id','desc')->get() ]);    
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
         return \DataTables::of(NftLsting::orderBy('id','desc')->get())->make(true);  
    }

    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
       
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'pre_sale_start_date' => 'required|max:255',
            'pre_sale_start_time' => 'required|max:255',
            "currancy_id" => "required|numeric", 
            "max_num_items" => "required|numeric", 
            'category_id'=> "required|array|min:1", 
            "image" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000' // max 3mb, 
        ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
             return $this->DataStore($request); 
        endif; 
    }

    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function DataStore($request,$NftLsting=null,$is_update=false)
    {
        
        $data = $this->ArrayCreation($request);
        $error = null;
        
      
        try{ 
            if(isset($data['nft_lsting_data'])): 
                if($is_update==false &&  $NftLsting==null):
                    $NftLsting = NftLsting::create($data['nft_lsting_data']);
                elseif($is_update==true &&  $NftLsting!=null):
                    $NftLsting->update($data['nft_lsting_data']);
                endif;
               
                if($NftLsting): 
                     
                    if(isset($data['pivot_nft_L_event_category'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNftLEventCategory::where('nft_lsting_id',$NftLsting->id)->delete(); endif;
                        $makeArraySync_event_category = $data['pivot_nft_L_event_category'];
                        $makeArraySync_event_category = array_map(function($makeArraySync_event_category) use($NftLsting){ return $makeArraySync_event_category + ['nft_lsting_id' => $NftLsting->id]; }, $makeArraySync_event_category); 
                        \Modules\Backend\Entities\PivotNftLEventCategory::insert($makeArraySync_event_category);
                    endif;
 
                    if(isset($data['pivot_nft_L_marketplaces'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNftLMarketplaces::where('nft_lsting_id',$NftLsting->id)->delete(); endif;
                        $makeArraySync_marketplaces = $data['pivot_nft_L_marketplaces'];
                        $makeArraySync_marketplaces = array_map(function($makeArraySync_marketplaces) use($NftLsting){ return $makeArraySync_marketplaces + ['nft_lsting_id' => $NftLsting->id]; }, $makeArraySync_marketplaces); 
                        \Modules\Backend\Entities\PivotNftLMarketplaces::insert($makeArraySync_marketplaces);
                    endif;
                    
                    if(isset($data['pivot_nft_L_community'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNftLCommunity::where('nft_lsting_id',$NftLsting->id)->delete(); endif;
                        $makeArraySync_community = $data['pivot_nft_L_community'];
                        $makeArraySync_community = array_map(function($makeArraySync_community) use($NftLsting){ return $makeArraySync_community + ['nft_lsting_id' => $NftLsting->id]; }, $makeArraySync_community); 
                        \Modules\Backend\Entities\PivotNftLCommunity::insert($makeArraySync_community);
                    endif; 
                    
                    if(isset($data['pivot_nft_L_chat'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNftLChat::where('nft_lsting_id',$NftLsting->id)->delete(); endif;
                        $makeArraySync_chat = $data['pivot_nft_L_chat'];
                        $makeArraySync_chat = array_map(function($makeArraySync_chat) use($NftLsting){ return $makeArraySync_chat + ['nft_lsting_id' => $NftLsting->id]; }, $makeArraySync_chat); 
                        \Modules\Backend\Entities\PivotNftLChat::insert($makeArraySync_chat);
                    endif; 
                    
                    if(isset($data['pivot_nft_L_socials'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNftLSocials::where('nft_lsting_id',$NftLsting->id)->delete(); endif;
                        $makeArraySync_socials = $data['pivot_nft_L_socials'];
                        $makeArraySync_socials = array_map(function($makeArraySync_socials) use($NftLsting){ return $makeArraySync_socials + ['nft_lsting_id' => $NftLsting->id]; }, $makeArraySync_socials); 
                        \Modules\Backend\Entities\PivotNftLSocials::insert($makeArraySync_socials);
                    endif;  
                endif; 
            else: 
                if($is_update==false &&  $NftLsting==null): $error ='Nft Lsting array not created'; elseif($is_update==true &&  $NftLsting!=null): $error ='Nft Lsting array not update'; endif;
            endif;  
        } catch (Exception $ex) { $error = $ex->getMessage(); }
        if($error == null): 
            if($is_update==true &&  $NftLsting!=null):
                 /* no error, true response for update*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
            else:
                /* no error, true response for create */  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            endif;
            
        else: 
            if($is_update==true &&  $NftLsting!=null):
                /* have error, false response for update */  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  
            else:
                /* have error, false response for create */  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  
            endif;
        endif;
    }
    
    
    /**
     * Show the specified resource.
     * @param int $nft_listing_id
     * @return Renderable
     */
    public function show($nft_listing_id)
    {
        $nft_listing = NftLsting::where('id',$nft_listing_id)->first();  
        if($nft_listing):
            return response()->json(['response'=>true,'data'=>$nft_listing]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $nft_listing_id
     * @return Renderable
     */
    public function edit($nft_listing_id)
    {
         
        $nft_listing = NftLsting::where('id',$nft_listing_id)
                ->with('hasManyMarketplaces')
                ->with('hasManyCommunitys')
                ->with('hasManyChats')
                ->with('hasManySocials')
                ->with('hasManyEventCategory') 
                ->first();  
        if($nft_listing):
            return response()->json(['response'=>true,'data'=>$nft_listing]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $nft_listing_id
     * @return Renderable
     */
    public function update(Request $request, $nft_listing_id)
    {
        
        
            $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'pre_sale_start_date' => 'required|max:255',
            'pre_sale_start_time' => 'required|max:255',
            "currancy_id" => "required|numeric", 
            "max_num_items" => "required|numeric", 
            'category_id'=> "required|array|min:1", 
            "image" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $nft_listing = NftLsting::find($nft_listing_id);;
                if($nft_listing):
                    $is_update=true;
                    return $this->DataStore($request,$nft_listing,$is_update); 
                else:
                     return response()->json(['message' => $this->NotFoundMessage], 404);
                endif;    
            endif; 
       
    }

     
    /**
     * Show the specified resource.
     * @param Request $request
     * @return Renderable
     */
    public function ArrayCreation($request)
    {
        $return = 
        [
            'title'                         =>  ($request->exists('title') ? $request->title : null),
            'description'                   =>  ($request->exists('description') ? $request->description : null),
            'pre_sale_start_date'           =>  ($request->exists('pre_sale_start_date') ? $request->pre_sale_start_date : null),
            'pre_sale_start_time'           =>  ($request->exists('pre_sale_start_time') ? $request->pre_sale_start_time : null),
            'pre_sale_end_date'             =>  ($request->exists('pre_sale_end_date') ? $request->pre_sale_end_date : null),
            'pre_sale_end_time'             =>  ($request->exists('pre_sale_end_time') ? $request->pre_sale_end_time : null),
       
            'public_mint_start_date'        =>  ($request->exists('public_mint_start_date') ? $request->public_mint_start_date : null),
            'public_mint_start_time'        =>  ($request->exists('public_mint_start_time') ? $request->public_mint_start_time : null),
            'public_mint_end_date'          =>  ($request->exists('public_mint_end_date') ? $request->public_mint_end_date : null),
            'public_mint_end_time'          =>  ($request->exists('public_mint_end_time') ? $request->public_mint_end_time : null),
            
            'pre_sale_mint_price'           =>  ($request->exists('pre_sale_mint_price') ? $request->pre_sale_mint_price : null),
            'public_mint_price'             =>  ($request->exists('public_mint_price') ? $request->public_mint_price : null),
            'public_mint_price'             =>  ($request->exists('public_mint_price') ? $request->public_mint_price : null),
            'status'                        =>  ($request->exists('status') ? $request->status : 2),
            'is_launch'                     =>  ($request->exists('is_launch') ? $request->is_launch : 2),
            'i_agree'                       =>  ($request->exists('i_agree') ? $request->i_agree : 2),
            'i_declare'                     =>  ($request->exists('i_declare') ? $request->i_declare : 2),
            'max_num_items'                 =>  ($request->exists('max_num_items') ? $request->max_num_items : null),
            'currancy_id'                   =>  ($request->exists('currancy_id') ? $request->currancy_id : null),
        ];
 
        
        if($request->exists('image')):  
            $image = \App\Helpers\FileHelper::upload($request->image, $this->FilePath, $this->allowedfileExtension); 
            if(isset($image['file_name'])): $return['image'] = $image['file_name']; endif; 
        endif; 

 

        $pivot_nft_L_event_category =  [] ;
        if( $request->exists('category_id')  ):
            $n=1;
            foreach ($request['category_id'] as $key_n => $value_n):
                $pivot_nft_L_event_category[$n]['category_id'] = $value_n;
                $n++;
            endforeach;   
        endif;

        
        
        $pivot_nft_L_marketplaces =  [] ;
        if(
            ( $request->exists('marketplace_id') && $request->exists('marketplace_url')) 
            &&
            (
                count($request->marketplace_id) == count($request->marketplace_url)  
            )        
         ):
            $cr=1;
            foreach ($request['marketplace_id'] as $key_cr => $value_cr):
            
                $pivot_nft_L_marketplaces[$cr]['marketplace_id'] = $value_n;
                $pivot_nft_L_marketplaces[$cr]['marketplace_url'] = (isset($request['marketplace_url'][$key_cr])) ? $request['marketplace_url'][$key_cr] : '';
                $cr++;
            endforeach;   
        endif;
 
        
        
        $pivot_nft_L_community =  [] ;
        if(
             ($request->exists('community_website_url') ) 
         ):
            $co=1;
            foreach ($request['community_website_url'] as $key_co => $value_co):
             $pivot_nft_L_community[$co]['community_website_url'] = (isset($request['community_website_url'][$key_co])) ? $request['community_website_url'][$key_co] : '';
                $co++;
            endforeach;   
        endif;
        
        
        
        $pivot_nft_L_chat =  [] ;
        if(
             ($request->exists('chat_platform_id') && $request->exists('chat_url')) 
             &&
             (
                 count($request->chat_platform_id) == count($request->chat_url)  
             )       
         ):
            $ch=1;
            foreach ($request['chat_platform_id'] as $key_ch => $value_ch):
            
                $pivot_nft_L_chat[$ch]['chat_platform_id'] = (isset($request['chat_platform_id'][$key_ch])) ? $request['chat_platform_id'][$key_ch] : '';
                $pivot_nft_L_chat[$ch]['chat_url'] = (isset($request['chat_url'][$key_ch])) ? $request['chat_url'][$key_ch] : '';
                $ch++;
            endforeach;   
        endif;
        
        
        $pivot_nft_L_socials =  [] ;
        if(
             ($request->exists('social_platform_id') && $request->exists('social_url')) 
             &&
             (
                  count($request->social_platform_id) == count($request->social_url)  
             )        
         ):
            $so=1;
            foreach ($request['social_platform_id'] as $key_so => $value_so):
            
                $pivot_nft_L_socials[$so]['social_platform_id'] = (isset($request['social_platform_id'][$key_so])) ? $request['social_platform_id'][$key_so] : '';
                $pivot_nft_L_socials[$so]['social_url'] = (isset($request['social_url'][$key_so])) ? $request['social_url'][$key_so] : '';
                $so++;
            endforeach;   
        endif;
        
        
        $array =
        [ 
            'nft_lsting_data'               =>  $return,
            'pivot_nft_L_event_category'    =>  $pivot_nft_L_event_category,
            'pivot_nft_L_marketplaces'      =>  $pivot_nft_L_marketplaces,
            'pivot_nft_L_community'         =>  $pivot_nft_L_community, 
            'pivot_nft_L_chat'              =>  $pivot_nft_L_chat,
            'pivot_nft_L_socials'           =>  $pivot_nft_L_socials,
     
        ];

 


      return $array;
    }
    
    
    
    /**
     * Remove the specified resource from storage.
     * @param int $nft_listing_id
     * @return Renderable
     */
    public function destroy($nft_listing_id)
    {
        $nft_listing = NftLsting::where('id',$nft_listing_id)->first();  
        if($nft_listing):
            $nft_listing->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
