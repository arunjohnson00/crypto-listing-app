<?php

namespace Modules\Backend\Http\Controllers\Users;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator; use \Exception;
use \Modules\Backend\Entities\Users;

class UsersController extends Controller
{
    public function __construct()
    {    
        $this->createMessage        =   'User is created successfully.';
        $this->createErrorMessage   =   'User is not created successfully.';
        $this->updateMessage        =   'User is updated successfully.';
        $this->updateErrorMessage   =   'User is not updated successfully.';
        $this->deleteMessage        =   'User is deleted successfully.';
        $this->deleteErrorMessage   =   'User is not deleted successfully.';  
        $this->allowedfileExtension =   ['jpg','png','jpeg','gif','JPG','PNG','JPEG','GIF'];
        $this->FilePath             =   public_path().'/uploads/users/';
        $this->NotFoundMessage      =   'User not found!'; 
    }
    
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
          return \DataTables::of(Users::orderBy('id','desc')->get())->make(true);    
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
            'name'      =>  'required|max:255',
            'email'     =>  "required|max:255|unique:users,email,NULL,id,deleted_at,NULL|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", 
            "status"    =>  "required|numeric",
            'password'  =>  'required|min:6',
            "avatar"    => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb, 
            
        ]);  
        
        if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
        else:  /*validation passed */
            $data = [ 'name'=>$request->name, 'status'=>$request->status, 'email'=>$request->email,'password'=>bcrypt($request->password) ];
            if($request->exists('avatar')):  
                $avatar = \App\Helpers\FileHelper::upload($request->avatar, $this->FilePath, $this->allowedfileExtension); 
                if(isset($avatar['file_name'])): $data['avatar'] = $avatar['file_name']; endif; 
            endif;  
            try{Users::create($data); } catch (Exception $ex) { $error = $ex->getMessage(); }
            if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->createMessage],200);
            else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->createErrorMessage.'<br/> '.$error],200);  endif;
        endif; 
        
    }

    /**
     * Show the specified resource.
     * @param int $user_id
     * @return Renderable
     */
    public function show($user_id)
    {
        $user = Users::where('id',$user_id)->first();  
        if($user):
            return response()->json(['response'=>true,'data'=>$user]);
        else:
            return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif; 
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $user_id
     * @return Renderable
     */
    public function edit($user_id)
    {
        $user = Users::where('id',$user_id)->first();  
        if($user):
            return response()->json(['response'=>true,'data'=>$user]);
        else:
            return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422);
        endif;
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $user_id
     * @return Renderable
     */
    public function update(Request $request, $user_id)
    {
        $user = Users::find($user_id);  $error = null;
        if($user):   
            
            $validator = Validator::make($request->all(), [
                'name'      =>  'max:255', 'email'     =>  "max:255|unique:users,email,$user->id,id,deleted_at,NULL|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", 
                "status"    =>  "numeric", 'password'  =>  'min:6', "avatar"    => 'mimes:jpg,png,jpeg,gif,JPG,PNG,JPEG,GIF|max:3000' // max 3mb,  
            ]);  
            if ($validator->fails()) : /* validation failed */ return response()->json($validator->errors(), 422);
            else:  /*validation passed */
                ($request->exists('name') && $request->name !=null) ? $data['name'] =$request->name : '';
                ($request->exists('email') && $request->email !=null) ? $data['email'] =$request->email : '';
                ($request->exists('status') && $request->status !=null) ? $data['status'] =$request->status : '';
                ($request->exists('password') && $request->password !=null) ? $data['password'] =bcrypt($request->password) : ''; 
                if($request->exists('avatar')):  
                    $avatar = \App\Helpers\FileHelper::upload($request->avatar, $this->FilePath, $this->allowedfileExtension); 
                    if(isset($avatar['file_name'])): $data['avatar'] = $avatar['file_name']; endif; 
                endif;  
                try{ if(!empty($data)){$user->update($data);} } catch (Exception $ex) { $error = $ex->getMessage(); }
                
                if($error == null): /* no error, true response*/  return response()->json(['response'=>true,'message'=>$this->updateMessage],200);
                else: /* have error, false response*/  return response()->json(['response'=>false,'message'=>$this->updateErrorMessage.'<br/> '.$error],200);  endif;
            endif; 
        else:  return response()->json(['response'=>false,'message'=>$this->NotFoundMessage],422); endif;
    }

    /**
     * Remove the specified resource from storage.
     * @param int $user_id
     * @return Renderable
     */
    public function destroy($user_id)
    {
        $user = Users::where('id',$user_id)->first();  
        if($user):
            $user->delete();
            return response()->json(['response'=>true,'message'=> $this->deleteMessage]);
        else:
            return response()->json(['response'=>false,'message'=>$this->deleteErrorMessage]);
        endif; 
    }
}
