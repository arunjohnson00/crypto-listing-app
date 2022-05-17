<?php

namespace Modules\Backend\Entities;

use Illuminate\Database\Eloquent\Model;
 
class PivotNftLSocials extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "pivot_nft_lst_socials";
    
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

}
