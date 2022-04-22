<?php

namespace Modules\Backend\Entities;

use Illuminate\Database\Eloquent\Model; 
use Illuminate\Database\Eloquent\SoftDeletes;
 
class Videos extends Model
{
    use SoftDeletes;
    
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "videos";
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
    protected $fillable = [];
    
    /**
    * The attributes that aren't mass assignable.
    *
    * @var array
    */
    
    protected $guarded = [ ]; 
    
    /**
     * Casting the dates to a carbon object.
     *
     * @var array<int, string>
     */
    protected $dates = ['deleted_at'];
   
     
    
}
