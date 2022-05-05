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
     * Sync the exchanges with the coin.
      
    public function pivot_exchanges()
    {
        return $this->belongsToMany('Modules\Backend\Entities\PivotExchange','pivot_exchange','coin_id','id') ;
      
    }*/


    /**
     * Sync the Network with the coin.
     
    public function pivot_networks()
    {
        return $this->belongsToMany('Modules\Backend\Entities\PivotNetwork','pivot_network','coin_id','id') ;
      
    }*/
    
    /**
    * Get the Networks for the coin.
    */ 
    public function hasManyNetworks()
    {
        return $this->hasMany(PivotNetwork::class,  'coin_id');
    }
    
    /**
    * Get the exchanges for the coin.
    */ 
    public function hasManyExchanges()
    {
        return $this->hasMany(PivotExchange::class,  'coin_id');
    }
    
    
    /**
    * Get the Audits for the coin.
    */ 
    public function hasManyAudits()
    {
        return $this->hasMany(PivotAudit::class,  'coin_id');
    }
    
    /**
    * Get the Charts for the coin.
    */ 
    public function hasManyCharts()
    {
        return $this->hasMany(PivotChart::class,  'coin_id');
    }
    
    /**
    * Get the PivotCommunitys for the coin.
    */ 
    public function hasManyCommunitys()
    {
        return $this->hasMany(PivotCommunity::class,  'coin_id');
    }
    
    /**
    * Get the Chats for the coin.
    */ 
    public function hasManyChats()
    {
        return $this->hasMany(PivotChat::class,  'coin_id');
    } 
    
    
    /**
    * Get the Socials for the coin.
    */ 
    public function hasManySocials()
    {
        return $this->hasMany(PivotSocial::class,  'coin_id');
    } 
}
