<?php

namespace Modules\Backend\Http\Controllers\Coins;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\CoinsCommunity;
use Validator; use \Exception;

class CoinsCommunityController extends Controller
{
//     public function __construct()
//    {    
//        $this->createMessage        =   'Coin Community is created successfully.';
//        $this->createErrorMessage   =   'Coin Community is not created successfully.';
//        $this->updateMessage        =   'Coin Community is updated successfully.';
//        $this->updateErrorMessage   =   'Coin Community is not updated successfully.';
//        $this->deleteMessage        =   'Coin Community is deleted successfully.';
//        $this->deleteErrorMessage   =   'Coin Community is not deleted successfully.';  
//        $this->NotFoundMessage      =   'Coin Community not found!'; 
//    }
    
    /**
     * All listing of the resource.
     * @return Renderable
     */
//    public function All()
//    {
//       return response()->json([ 'data' => CoinsCommunity::select('id','name','status')->orderBy('id','desc')->get() ]);    
//    }
     
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
//    public function index()
//    {
//       return \DataTables::of(CoinsCommunity::orderBy('id','desc')->get())->make(true);    
//    }
    
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
//    public function store(Request $request)
//    {
//        $error = null;
//        $validator = Validator::make($request->all(), [
//            'name' => 'required|max:255', "status" => "required|numeric", 
//         ]); 
//        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
//        else:  /*validation passed */
//            $data = [ 'name'=>$request->name,   'status'=>$request->status ];
//            try{ CoinsCommunity::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
//            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
//            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
//        endif; 
//    }

    /**
     * Show the specified resource.
     * @param int $coin_community_id
     * @return Renderable
     */
//    public function show($coin_community_id)
//    {
//        $CoinsCommunity = CoinsCommunity::where('id',$coin_community_id)->first();  
//        if($CoinsCommunity):
//            return response()->json(['response'=>true,'data'=>$CoinsCommunity]);
//        else:
//             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
//        endif; 
//    }

    /**
     * Show the form for editing the specified resource.
     * @param int $coin_community_id
     * @return Renderable
     */
//    public function edit($coin_community_id)
//    {
//        $CoinsCommunity = CoinsCommunity::where('id',$coin_community_id)->first();  
//        if($CoinsCommunity):
//            return response()->json(['response'=>true,'data'=>$CoinsCommunity]);
//        else:
//             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
//        endif;
//    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $coin_community_id
     * @return Renderable
     */
//    public function update(Request $request, $coin_community_id)
//    {
//        $CoinsCommunity = CoinsCommunity::where('id',$coin_community_id)->first(); $error = null;
//        if($CoinsCommunity): 
//            $validator = Validator::make($request->all(), [
//                'name' => 'required|max:255', "status" => "required|numeric", 
//            ]);  
//            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
//            else:  /*validation passed */
//                $data = [ 'name'=>$request->name,   'status'=>$request->status ]; 
//                try{ $CoinsCommunity->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
//                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
//                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
//            endif; 
//        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
//        
//    }

    /**
     * Remove the specified resource from storage.
     * @param int $coin_community_id
     * @return Renderable
     */
//    public function destroy($coin_community_id)
//    {
//        $CoinsCommunity = CoinsCommunity::where('id',$coin_community_id)->first();
//        if($CoinsCommunity):
//            $CoinsCommunity->delete();
//            return response()->json(['response'=>true,'message'=> $this->deleteErrorMessage]);
//        else:
//            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
//        endif; 
//    }
}
