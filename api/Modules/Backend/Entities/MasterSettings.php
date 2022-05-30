<?php

namespace Modules\Backend\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MasterSettings extends Model
{
    use SoftDeletes;
    protected $table = "master_settings";
    protected $fillable = [];
    protected $guarded = [ ]; 
    protected $dates = ['deleted_at'];
}
