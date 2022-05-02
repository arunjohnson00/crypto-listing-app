<?php

namespace Modules\Backend\Http\Controllers\Coins;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\Coins;

use Validator; use \Exception;

class CoinsController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'Coin is created successfully.';
        $this->createErrorMessage   =   'Coin is not created successfully.';
        $this->updateMessage        =   'Coin is updated successfully.';
        $this->updateErrorMessage   =   'Coin is not updated successfully.';
        $this->deleteMessage        =   'Coin is deleted successfully.';
        $this->deleteErrorMessage   =   'Coin is not deleted successfully.';  
        $this->NotFoundMessage      =   'Coin not found!'; 
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/coin_logo/';
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return  \DataTables::of(Coins::orderBy('id','desc')->get())
                ->editColumn('created_at', function ($coin){ if($coin->created_at != null): return date('d-M-Y h:i a', strtotime($coin->created_at) ); else: return null; endif; })
                ->make(true); 
    }
 
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        if(!$request->exists('is_presale') &&  !$request->exists('is_launched') ):
            return response()->json(['response'=>false,'message'=>'Coin have issue, please select presale or launched only'],422);
        elseif($request->exists('is_presale') && $request->is_presale==1):
           
                $validator = Validator::make($request->all(), [
                     "logo"                     => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000', // max 3mb,
                    'address'                   =>  "unique:coins,address,NULL,id,deleted_at,NULL|max:255",                   'network_id'        =>  "numeric", 
                    'name'                      =>  'required|max:255',           'symbol'            =>  "required|max:255",    
                    'presale_start_date'        =>  "required",                  'presale_end_date'  =>  "required",  
                    "status"                    =>  "required|numeric",         "schedule_date"     =>  "required_if:is_scheduled,==,1"
                ],
                [
                    'schedule_date.required_if'  =>  'The schedule date field is required when is scheduled is selected'
                ]);
            
        elseif($request->exists('is_launched') && $request->is_launched==1):
            
            $validator = Validator::make($request->all(), [
               "logo"                      =>  'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000', // max 3mb,
               'address'                   =>  "unique:coins,address,NULL,id,deleted_at,NULL|max:255",                   'network_id'        =>  "numeric", 
               'name'                      =>  'required|max:255',          'symbol'            =>  "required|max:255",    
               'price'                     =>  "required",                  'max_supply'  =>  "required",  
               "status"                    =>  "required|numeric",          "schedule_date"     =>  "required_if:is_scheduled,==,1"
           ],
           [
               'schedule_date.required_if'  =>  'The schedule date field is required when is scheduled is selected'
           ]);

        else:
            return response()->json(['message' => 'Page not found!'], 404);
        endif;
         

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
    public function DataStore($request)
    {
        
        $data = $this->ArrayCreation($request);
        $error = null;
        
        //return response()->json($request->all());
        //return response()->json($data);
        //die();

        try{ 
            if(isset($data['coin_data'])): 
                $coin = Coins::create($data['coin_data']);
                if($coin): 

                     if(isset($data['pivot_network'])):
                        $makeArraySyncNetwork = $data['pivot_network'];
                        $makeArraySyncNetwork = array_map(function($makeArraySyncNetwork) use($coin){ return $makeArraySyncNetwork + ['coin_id' => $coin->id]; }, $makeArraySyncNetwork); 
                        \Modules\Backend\Entities\PivotNetwork::insert($makeArraySyncNetwork);
                    endif;
                
                endif;
            
                
            else: $error ='Coin array not created'; endif;  
        } catch (Exception $ex) { $error = $ex->getMessage(); }
        if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
        else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
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
            'address'               =>  ($request->exists('address') ? $request->address : null),
            'network_id'            =>  ($request->exists('network_id') ? $request->network_id : null),
            'name'                  =>  ($request->exists('name') ? $request->name : null),
            'symbol'                =>  ($request->exists('symbol') ? $request->symbol : null),
            'description'           =>  ($request->exists('description') ? $request->description : null),
            'github_link'           =>  ($request->exists('github_link') ? $request->github_link : null),
            'medium_link'           =>  ($request->exists('medium_link') ? $request->medium_link : null),
            'whitepaper_link'       =>  ($request->exists('whitepaper_link') ? $request->whitepaper_link : null),
            'docs_url'              =>  ($request->exists('docs_link') ? $request->docs_link : null),
            'i_agree'               =>  ($request->exists('i_agree') ? $request->i_agree : 2),
            'i_declare'             =>  ($request->exists('i_declare') ? $request->i_agree : 2),
            'status'                =>  ($request->exists('status') ? $request->status : null),

            'schedule_date'         =>  ($request->exists('schedule_date') ? $request->schedule_date : null),
            'vote'                  =>  ($request->exists('vote') ? $request->vote : null),
            'is_presale'            =>  ($request->exists('is_presale') ? $request->is_presale : 2),
            'is_launched'           =>  ($request->exists('is_launched') ? $request->is_launched : 2),
         
        ];
 
        if($request->exists('is_scheduled') && $request->exists('schedule_date')): 
            $return['schedule_date'] =($request->is_scheduled==1) ? $request->schedule_date : null;
            $return['is_scheduled'] =$request->is_scheduled;
        else:
            $return['schedule_date'] = null;
            $return['is_scheduled'] =null;
        endif; 

       
        if($request->exists('is_listed_market_cap') && $request->exists('coin_market_cap_url')):  
            $return['is_listed_market_cap'] =$request->is_listed_market_cap;
            $return['market_cap_url'] =$request->coin_market_cap_url;
        else:
            $return['is_listed_market_cap'] =2; $return['market_cap_url'] =null;
        endif;   
        
        if($request->exists('is_listed_market_cap') && $request->exists('coin_market_cap_url')):  
            $return['is_listed_coingecko'] =$request->is_listed_market_cap;
            $return['coingecko_url'] =$request->coingecko_url;
        else:
            $return['is_listed_coingecko'] =2; $return['coingecko_url'] =null;
        endif;  

        if($request->exists('logo')):  
            $logo = \App\Helpers\FileHelper::upload($request->logo, $this->FilePath, $this->allowedfileExtension); 
            if(isset($thumb_icon['file_name'])): $return['logo'] = $logo['file_name']; endif; 
        endif; 


        $return['is_presale'] =($request->exists('is_presale') ? $request->is_presale : 2);
        $return['is_launched'] =($request->exists('is_launched') ? $request->is_launched : 2);
        $return['presale_start_date'] = $return['presale_end_date'] =$return['presale_address'] =  $return['presale_link'] = null;
        $return['price'] = $return['circulating_supply'] =$return['max_supply'] =  $return['market_cap'] = null;

        if($request->exists('is_presale') && $request->is_presale==1): 
            $return['presale_start_date']    =  ($request->exists('presale_start_date') ? $request->presale_start_date : null);
            $return['presale_end_date']      =  ($request->exists('presale_end_date') ? $request->presale_end_date : null);
            $return['presale_address']      =  ($request->exists('presale_address') ? $request->presale_address : null);
            $return['presale_link']      =  ($request->exists('presale_link') ? $request->presale_link : null);
             
        elseif($request->exists('is_launched') && $request->is_launched==1):
            $return['price']            =  ($request->exists('price') ? $request->price : null);
            $return['circulating_supply']      =  ($request->exists('circulating_supply') ? $request->circulating_supply : null);
            $return['max_supply']      =  ($request->exists('max_supply') ? $request->max_supply : null);
            $return['market_cap']      =  ($request->exists('market_cap') ? $request->market_cap : null);
        endif;
         



        $pivot_network =  [] ;
        if(
            ($request->exists('network') && $request->exists('network_address') && $request->exists('network_explorer_link')) 
            /*&&
            (
                count($request['network']) == count($request['network_address']) &&
                count($request['network_address']) == count($request['network_explorer_link']) &&
                count($request['network_explorer_link']) == count($request['network'])  
            )  */      
        ):
            $n=1;
            foreach ($request['network'] as $key_n => $value_n):
                $pivot_network[$n]['network_id'] = $value_n;
                $pivot_network[$n]['address'] = (isset($request['network_address'][$key_n])) ? $request['network_address'][$key_n] : '';
                $pivot_network[$n]['explorer_link'] = (isset($request['network_explorer_link'][$key_n])) ? $request['network_explorer_link'][$key_n] : '';
                $n++;
            endforeach;   
        endif;

  
        $array =
        [
            'coin_data' =>$return,
            'pivot_network'=> $pivot_network
        ];







    



      return $array;
    }
    
    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('backend::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('backend::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
