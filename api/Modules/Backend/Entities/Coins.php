<?php

namespace Modules\Backend\Entities;

use Illuminate\Database\Eloquent\Model; 
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;
 
class Coins extends Model
{
    use SoftDeletes,Sluggable;
    
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "coins";
    
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
   
     
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    
    /**
     * Get the user associated with the coin.
     */
    public function user()
    {
        return $this->hasOne(Users::class,'id','user_id');
    }
    
    /**
     * Get the network associated with the coin.
     */
    public function network()
    {
        return $this->hasOne(Networks::class,'id','network_id');
    }
    
    /**
     * Sync the network exchanges with the coin.
     */
    public function pivot_exchanges()
    {
        return $this->belongsToMany('Modules\Backend\Entities\PivotExchange','pivot_exchange','coin_id','id') ;
      
    }
}
