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
        return  \DataTables::of(
                Coins::orderBy('id','desc') /* only use if emergency coins*/
                ->with('hasManyNetworks')
                ->with('hasManyExchanges')
                ->with('hasManyAudits')
                ->with('hasManyCharts')
                ->with('hasManyCommunitys')
                ->with('hasManyChats')
                ->with('hasManySocials')
                ->get()
                )
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
     * Show the specified resource.
     * @param int $coin_id
     * @return Renderable
     */
    public function show($coin_id)
    {    
        $coin = Coins::where('id',$coin_id)->first();  
        if($coin):
            return response()->json(['response'=>true,'data'=>$coin]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $coin_id
     * @return Renderable
     */
    public function edit($coin_id)
    {
        $coin = Coins::where('id',$coin_id)
                ->with('hasManyNetworks')
                ->with('hasManyExchanges')
                ->with('hasManyAudits')
                ->with('hasManyCharts')
                ->with('hasManyCommunitys')
                ->with('hasManyChats')
                ->with('hasManySocials')
                ->first();  
        if($coin):
            return response()->json(['response'=>true,'data'=>$coin]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $coin_id
     * @return Renderable
     */
    public function update(Request $request, $coin_id)
    {
        if(!$request->exists('is_presale') &&  !$request->exists('is_launched') ):
            return response()->json(['response'=>false,'message'=>'Coin have issue, please select presale or launched only'],422);
        elseif($request->exists('is_presale') && $request->is_presale==1):
           
                $validator = Validator::make($request->all(), [
                    "logo"                     => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000', // max 3mb,
                    'address'                   =>  "unique:coins,address,$coin_id,id,deleted_at,NULL|max:255",                   'network_id'        =>  "numeric", 
                    'name'                      =>  'required|max:255',           'symbol'            =>  "required|max:255",    
                    'presale_start_date'        =>  "required",                  'presale_end_date'  =>  "required",  
                    "status"                    =>  "required|numeric",         "schedule_date"     =>  "required_if:is_scheduled,==,1"
                ],
                [
                    'schedule_date.required_if'  =>  'The schedule date field is required when is scheduled is selected'
                ]);
            
        elseif($request->exists('is_launched') && $request->is_launched==1):
            
            $validator = Validator::make($request->all(), [
               "logo"                      =>  'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000', // max 3mb,
               'address'                   =>  "unique:coins,address,$coin_id,id,deleted_at,NULL|max:255",                   'network_id'        =>  "numeric", 
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
            $coin = Coins::find($coin_id);
            if($coin):
                $is_update=true;
                return $this->DataStore($request,$coin,$is_update); 
            else:
                 return response()->json(['message' => 'Coin not found!'], 404);
            endif;
           
        endif;
    }

     
    
     /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function DataStore($request,$coin=null,$is_update=false)
    {
        
        $data = $this->ArrayCreation($request);
        $error = null;
        
       // return response()->json($request->all());
        //return response()->json($data);
      //  return response()->json($data['pivot_exchange']);
        //die();

        try{ 
            if(isset($data['coin_data'])): 
                if($is_update==false &&  $coin==null):
                    $coin = Coins::create($data['coin_data']);
                elseif($is_update==true &&  $coin!=null):
                    $coin->update($data['coin_data']);
                endif;
               
                if($coin): 
                    if(isset($data['pivot_network'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotNetwork::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncNetwork = $data['pivot_network'];
                        $makeArraySyncNetwork = array_map(function($makeArraySyncNetwork) use($coin){ return $makeArraySyncNetwork + ['coin_id' => $coin->id]; }, $makeArraySyncNetwork); 
                        \Modules\Backend\Entities\PivotNetwork::insert($makeArraySyncNetwork);
                    endif;


                    if(isset($data['pivot_exchange'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotExchange::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncExchange = $data['pivot_exchange'];
                        $makeArraySyncExchange = array_map(function($makeArraySyncExchange) use($coin){ return $makeArraySyncExchange + ['coin_id' => $coin->id]; }, $makeArraySyncExchange); 
                        \Modules\Backend\Entities\PivotExchange::insert($makeArraySyncExchange);
                    endif;


                    if(isset($data['pivot_audit'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotAudit::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncAudit = $data['pivot_audit'];
                        $makeArraySyncAudit = array_map(function($makeArraySyncAudit) use($coin){ return $makeArraySyncAudit + ['coin_id' => $coin->id]; }, $makeArraySyncAudit); 
                        \Modules\Backend\Entities\PivotAudit::insert($makeArraySyncAudit);
                    endif;


                    if(isset($data['pivot_chart'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotChart::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncChart = $data['pivot_chart'];
                        $makeArraySyncChart = array_map(function($makeArraySyncChart) use($coin){ return $makeArraySyncChart + ['coin_id' => $coin->id]; }, $makeArraySyncChart); 
                        \Modules\Backend\Entities\PivotChart::insert($makeArraySyncChart);
                    endif;
 
                    if(isset($data['pivot_community'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotCommunity::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncCommunity = $data['pivot_community'];
                        $makeArraySyncCommunity = array_map(function($makeArraySyncCommunity) use($coin){ return $makeArraySyncCommunity + ['coin_id' => $coin->id]; }, $makeArraySyncCommunity); 
                        \Modules\Backend\Entities\PivotCommunity::insert($makeArraySyncCommunity);
                    endif;
                
                    if(isset($data['pivot_chat'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotChat::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncChat = $data['pivot_chat'];
                        $makeArraySyncChat = array_map(function($makeArraySyncChat) use($coin){ return $makeArraySyncChat + ['coin_id' => $coin->id]; }, $makeArraySyncChat); 
                        \Modules\Backend\Entities\PivotChat::insert($makeArraySyncChat);
                    endif;

                    if(isset($data['pivot_social'])):
                        if($is_update==true): \Modules\Backend\Entities\PivotSocial::where('coin_id',$coin->id)->delete(); endif;
                        $makeArraySyncSocial = $data['pivot_social'];
                        $makeArraySyncSocial = array_map(function($makeArraySyncSocial) use($coin){ return $makeArraySyncSocial + ['coin_id' => $coin->id]; }, $makeArraySyncSocial); 
                        \Modules\Backend\Entities\PivotSocial::insert($makeArraySyncSocial);
                    endif;


                   
                endif;
            
                
            else: 
                if($is_update==false &&  $coin==null): $error ='Coin array not created'; elseif($is_update==true &&  $coin!=null): $error ='Coin array not update'; endif;
                
            endif;  
        } catch (Exception $ex) { $error = $ex->getMessage(); }
        if($error == null): 
            if($is_update==true &&  $coin!=null):
                 /* no error, true response for update*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
            else:
                /* no error, true response for create */  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            endif;
            
        else: 
            if($is_update==true &&  $coin!=null):
                /* have error, false response for update */  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  
        
            else:
                /* have error, false response for create */  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  
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
            if(isset($logo['file_name'])): $return['logo'] = $logo['file_name']; endif; 
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



        $pivot_exchange =  [] ;
        if(
             ($request->exists('exchange_id') && $request->exists('url') && $request->exists('exchange_explorer_link')) 
        //     /*&&
        //     (
        //         count($request['exchange_id']) == count($request['url']) &&
        //         count($request['url']) == count($request['exchange_explorer_link']) &&
        //         count($request['exchange_explorer_link']) == count($request['exchange_id'])  
        //     )  */      
         ):
            $e=1;
            foreach ($request['exchange_id'] as $key_e => $value_e):
                $pivot_exchange[$e]['exchange_id'] = $value_e;
                $pivot_exchange[$e]['url'] = (isset($request['url'][$key_e])) ? $request['url'][$key_e] : '';
                $pivot_exchange[$e]['explorer_link'] = (isset($request['exchange_explorer_link'][$key_e])) ? $request['exchange_explorer_link'][$key_e] : '';
                $e++;
            endforeach;   
        endif;





        $pivot_audit =  [] ;
        if(
             ($request->exists('audited_by') && $request->exists('audit_link')) 
        //     /*&&
        //     (
        //         count($request['audited_by']) == count($request['audit_link']) &&
        //         count($request['audit_link']) == count($request['audited_by']) &&
        //         count($request['network_explorer_link']) == count($request['network'])  
        //     )  */      
         ):
            $a=1;
            foreach ($request['audited_by'] as $key_a => $value_a):
            
                $pivot_audit[$a]['audited_by'] = (isset($request['audited_by'][$key_a])) ? $request['audited_by'][$key_a] : '';
                $pivot_audit[$a]['audit_link'] = (isset($request['audit_link'][$key_a])) ? $request['audit_link'][$key_a] : '';
                $a++;
            endforeach;   
        endif;




        $pivot_chart =  [] ;
        if(
             ($request->exists('chart_provider') && $request->exists('chart_link')) 
        //     /*&&
        //     (
        //         count($request['chart_provider']) == count($request['chart_link']) &&
        //         count($request['chart_link']) == count($request['network_explorer_link']) &&
        //         count($request['network_explorer_link']) == count($request['network'])  
        //     )  */      
         ):
            $cr=1;
            foreach ($request['chart_provider'] as $key_cr => $value_cr):
            
                $pivot_chart[$cr]['chart_provider'] = (isset($request['chart_provider'][$key_cr])) ? $request['chart_provider'][$key_cr] : '';
                $pivot_chart[$cr]['chart_link'] = (isset($request['chart_link'][$key_cr])) ? $request['chart_link'][$key_cr] : '';
                $cr++;
            endforeach;   
        endif;




        $pivot_community =  [] ;
        if(
             ($request->exists('community_website_url') )
        //     /*&&
        //     (
        //         count($request['network']) == count($request['network_address']) &&
        //         count($request['network_address']) == count($request['network_explorer_link']) &&
        //         count($request['network_explorer_link']) == count($request['network'])  
        //     )  */      
         ):
            $co=1;
            foreach ($request['community_website_url'] as $key_co => $value_co):
             $pivot_community[$co]['community_website_url'] = (isset($request['community_website_url'][$key_co])) ? $request['community_website_url'][$key_co] : '';
                $co++;
            endforeach;   
        endif;





        $pivot_chat =  [] ;
        if(
             ($request->exists('chat_platform') && $request->exists('chat_url')) 
        //     /*&&
        //     (
        //         count($request['network']) == count($request['network_address']) &&
        //         count($request['network_address']) == count($request['network_explorer_link']) &&
        //         count($request['network_explorer_link']) == count($request['network'])  
        //     )  */      
         ):
            $ch=1;
            foreach ($request['chat_platform'] as $key_ch => $value_ch):
            
                $pivot_chat[$ch]['chat_platform'] = (isset($request['chat_platform'][$key_ch])) ? $request['chat_platform'][$key_ch] : '';
                $pivot_chat[$ch]['chat_url'] = (isset($request['chat_url'][$key_ch])) ? $request['chat_url'][$key_ch] : '';
                $ch++;
            endforeach;   
        endif;




        $pivot_social =  [] ;
        if(
             ($request->exists('social_platform') && $request->exists('social_url')) 
        //     /*&&
        //     (
        //         count($request['network']) == count($request['network_address']) &&
        //         count($request['network_address']) == count($request['network_explorer_link']) &&
        //         count($request['network_explorer_link']) == count($request['network'])  
        //     )  */      
         ):
            $so=1;
            foreach ($request['social_platform'] as $key_so => $value_so):
            
                $pivot_social[$so]['social_platform'] = (isset($request['social_platform'][$key_so])) ? $request['social_platform'][$key_so] : '';
                $pivot_social[$so]['social_url'] = (isset($request['social_url'][$key_so])) ? $request['social_url'][$key_so] : '';
                $so++;
            endforeach;   
        endif;






  
        $array =
        [
            'coin_data' =>$return,
            'pivot_network'=> $pivot_network,
            'pivot_exchange'=> $pivot_exchange,
            'pivot_audit'=> $pivot_audit,
            'pivot_chart'=> $pivot_chart,
            'pivot_community'=>$pivot_community,
            'pivot_chat'=>$pivot_chat,
            'pivot_social'=>$pivot_social
        ];

 


      return $array;
    }
    
    
    
    
    
    
    
    
    
    
    
    /**
     * Remove the specified resource from storage.
     * @param int $coin_id
     * @return Renderable
     */
    public function destroy($coin_id)
    {
        $coin = Coins::where('id',$coin_id)->first();  
        if($coin):
            $coin->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
