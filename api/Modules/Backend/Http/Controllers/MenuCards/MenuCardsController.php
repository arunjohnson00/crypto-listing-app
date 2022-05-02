<?php

namespace Modules\Backend\Http\Controllers\MenuCards;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Backend\Entities\MenuCards;
use Validator; use \Exception;

class MenuCardsController extends Controller
{
     public function __construct()
    {    
        $this->createMessage        =   'Menu Card is created successfully.';
        $this->createErrorMessage   =   'Menu Card is not created successfully.';
        $this->updateMessage        =   'Menu Card is updated successfully.';
        $this->updateErrorMessage   =   'Menu Card is not updated successfully.';
        $this->deleteMessage        =   'Menu Card is deleted successfully.';
        $this->deleteErrorMessage   =   'Menu Card is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/menu_card_icons/';
        $this->NotFoundMessage      =   'Menu Card not found!'; 
    }
    
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
       return \DataTables::of(MenuCards::orderBy('id','desc')->get())->make(true);    
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
            'title' => 'required|max:255', 'sub_title' => 'required|max:255', "status" => "required|numeric", 
            "icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|required|max:3000' // max 3mb, 
        ]); 
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [
                'title'=>$request->title,  'sub_title'=>$request->sub_title,  'status'=>$request->status,  
                'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null, 
            ];
            if($request->exists('icon')):  
                $icon = \App\Helpers\FileHelper::upload($request->icon, $this->FilePath, $this->allowedfileExtension); 
                if(isset($icon['file_name'])): $data['icon'] = $icon['file_name']; endif; 
            endif;  
            try{ MenuCards::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
    }

    /**
     * Show the specified resource.
     * @param int $menu_card_id
     * @return Renderable
     */
    public function show($menu_card_id)
    {
        $MenuCard = MenuCards::where('id',$menu_card_id)->first();  
        if($MenuCard):
            return response()->json(['response'=>true,'data'=>$MenuCard]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;  
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $menu_card_id
     * @return Renderable
     */
    public function edit($menu_card_id)
    {
        $MenuCard = MenuCards::where('id',$menu_card_id)->first();  
        if($MenuCard):
            return response()->json(['response'=>true,'data'=>$MenuCard]);
        else:
             return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $menu_card_id
     * @return Renderable
     */
    public function update(Request $request, $menu_card_id)
    {
        $MenuCard = MenuCards::find($menu_card_id);  $error = null;
         if($MenuCard): 
            $validator = Validator::make($request->all(), [
                'title' => 'required|max:255', 'sub_title' => 'required|max:255', "status" => "required|numeric",  "icon" => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            ]); 
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                $data = [
                    'title'=>$request->title,  'sub_title'=>$request->sub_title,  'status'=>$request->status,  'url'=> ($request->exists('url') && $request->url !=null) ? $request->url : null, 
                ];
                if($request->exists('icon')):  
                    $icon = \App\Helpers\FileHelper::upload($request->icon, $this->FilePath, $this->allowedfileExtension); 
                    if(isset($icon['file_name'])): $data['icon'] = $icon['file_name']; endif; 
                endif; 
                try{ $MenuCard->update($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif; 
        
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($menu_card_id)
    {
        $MenuCard = MenuCards::where('id',$menu_card_id)->first();  
        if($MenuCard):
            $MenuCard->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
