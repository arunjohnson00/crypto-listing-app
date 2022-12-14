<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBannerAdSettingsTable extends Migration
{
    /** 
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    { 
        Schema::create('banner_ad_settings', function (Blueprint $table) {
            $table->increments('id');  
            $table->string('name')->nullable(false); 
            $table->string('slug')->unique()->nullable(false); 
            $table->string('amount')->nullable(false); 
            $table->tinyInteger('status')->default(1)->comment('1-Approved,2-Suspended');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->nullable();
            $table->softDeletesTz(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banner_ad_settings');
    }
}
