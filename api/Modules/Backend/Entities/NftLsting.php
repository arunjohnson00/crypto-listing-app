<?php

namespace Modules\Backend\Entities;

use Illuminate\Database\Eloquent\Model; 
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;


class NftLsting extends Model
{
    use SoftDeletes, Sluggable;
    
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "nft_lsting";
    
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
                'source' => 'title'
            ]
        ];
    }
    
    /**
    * Get the Event Category for the nft_lsting.
    */ 
    public function hasManyEventCategory()
    {
        return $this->hasMany(PivotNftLEventCategory::class,  'nft_lsting_id');
    }
    
    /**
    * Get the Marketplaces for the nft_lsting.
    */ 
    public function hasManyMarketplaces()
    {
        return $this->hasMany(PivotNftLMarketplaces::class,  'nft_lsting_id');
    }
    
    /**
    * Get the PivotCommunitys for the nft_lsting.
    */ 
    public function hasManyCommunitys()
    {
        return $this->hasMany(PivotNftLCommunity::class,  'nft_lsting_id');
    }
    
    /**
    * Get the Chats for the nft_lsting.
    */ 
    public function hasManyChats()
    {
        return $this->hasMany(PivotNftLChat::class,  'nft_lsting_id');
    } 
    
    
     /**
    * Get the Socials for the nft_lsting.
    */ 
    public function hasManySocials()
    {
        return $this->hasMany(PivotNftLSocials::class,  'nft_lsting_id');
    }
}
