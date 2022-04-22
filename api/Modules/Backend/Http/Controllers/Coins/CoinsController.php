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
        if($request->exists('is_presale') &&  $request->exists('is_launched') ):
            return response()->json(['response'=>false,'message'=>'Coin have issue, please select presale or launched only'],422);
        elseif($request->exists('is_presale') && $request->is_presale==1):
                $validator = Validator::make($request->all(), [
                     "logo"                     => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000', // max 3mb,
                    'address'                   =>  "max:255",                   'network_id'        =>  "numeric", 
                    'name'                      =>  'required|max:255',           'symbol'            =>  "required|max:255",    
                    'presale_start_date'        =>  "required",                  'presale_end_date'  =>  "required",  
                    "status"                    =>  "required|numeric",         "schedule_date"     =>  "required_if:is_scheduled,==,1"
                ],
                [
                    'schedule_date.required_if'  =>  'The schedule date field is required when is scheduled is selected'
                ]);
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                return $this->isPresaleStore($request); 
            endif;
        elseif($request->exists('is_launched') && $request->is_launched==1):
            
        else:
            return response()->json(['message' => 'Page not found!'], 404);
        endif;
         
    }

     /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function isPresaleStore($request)
    {
        $pivot_exchange = [];
        if(isset($request['exchange']) && isset($request['exchange_url']) && ( count($request['exchange']) == count($request['exchange_url'])  ) ):
            $i=0;
            foreach ($request['exchange'] as $key_p => $value_p):
                    $pivot_exchange[$i]['exchange_id'] = $value_p;
                    $pivot_exchange[$i]['url'] = (isset($request['exchange_url'][$key_p])) ? $request['exchange_url'][$key_p] : '';
//                    $pivot_exchange[$i]['is_default'] = (isset($data['is_default'][$key_p])) ? $data['is_default'][$key_p] : 0;
                    $pivot_exchange[$i]['is_default'] =  0;
                    $i++;
            endforeach;
        endif;
        $pivot_network = [];
        if(isset($request['network']) && isset($request['network_address']) && isset($request['network_explorer_link'])  && ( count($request['network']) == count($request['network_address'])  ) && (count($request['network_address']) == count($request['network_explorer_link'])) ):
            $n=0;
            foreach ($request['network'] as $key_n => $value_n):
                $pivot_network[$i]['network_id'] = $value_n;
                $pivot_network[$i]['address'] == (isset($request['network_address'][$key_n])) ? $request['network_address'][$key_n] : '';
                $pivot_network[$i]['explorer_link'] == (isset($request['network_explorer_link'][$key_n])) ? $request['network_explorer_link'][$key_n] : '';
                $n++;
            endforeach;
        endif;
        $data = $this->ArrayCreation($request);
        dd($data);

        try{ 
            $coin = Coins::create($data);
            if($coin): if(!empty($pivot_exchange)){$coin->pivot_exchanges()->sync($pivot_exchange);} endif;
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
        return 
        [
            'address'               =>  ($request->exists('address') ? $request->address : null),
            'network_id'            =>  ($request->exists('network_id') ? $request->network_id : null),
            'name'                  =>  ($request->exists('name') ? $request->name : null),
            'symbol'                =>  ($request->exists('symbol') ? $request->symbol : null),
            'presale_start_date'    =>  ($request->exists('presale_start_date') ? $request->presale_start_date : null),
            'presale_end_date'      =>  ($request->exists('presale_end_date') ? $request->presale_end_date : null),
            'status'                =>  ($request->exists('status') ? $request->status : null),
            'schedule_date'         =>  ($request->exists('schedule_date') ? $request->schedule_date : null),
            'vote'                  =>  ($request->exists('random_vote') ? $request->random_vote : null),
            'github_link'           =>  ($request->exists('github_link') ? $request->github_link : null),
            'medium_link'           =>  ($request->exists('medium_link') ? $request->medium_link : null),
            'whitepaper_link'       =>  ($request->exists('whitepaper_link') ? $request->whitepaper_link : null),
            'docs_url'              =>  ($request->exists('docs_url') ? $request->docs_url : null),
            'is_presale'            =>  ($request->exists('is_presale') ? $request->is_presale : 2),
            'is_launched'           =>  ($request->exists('is_launched') ? $request->is_launched : 2),
            'price'                 =>  ($request->exists('price') ? $request->price : null),
            'max_supply'            =>  ($request->exists('max_supply') ? $request->max_supply : null),
            'market_cap'            =>  ($request->exists('market_cap') ? $request->market_cap : null),
            'circulating_supply'    =>  ($request->exists('circulating_supply') ? $request->circulating_supply : null),
            'coingecko_url'         =>  ($request->exists('coingecko_url') ? $request->coingecko_url : null),
            'market_cap_url'        =>  ($request->exists('market_cap_url') ? $request->market_cap_url : null),
            'i_agree'               =>  ($request->exists('i_agree') ? $request->i_agree : 2),
            'i_declare'             =>  ($request->exists('i_declare') ? $request->i_agree : 2),
            
            
             
        ];
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
