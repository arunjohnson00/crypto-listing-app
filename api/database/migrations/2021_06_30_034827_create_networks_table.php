<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNetworksTable extends Migration
{
    /** 
     * Run the migrations. 
     * @return void
     */
    public function up()
    {   
        Schema::create('networks', function (Blueprint $table) {
            $table->increments('id');  
            $table->string('name',255)->nullable(false); 
            $table->string('slug',255)->unique()->nullable(false); 
            $table->string('thumb_icon',255)->nullable(false);
            
            $table->text('url')->nullable(true);
            $table->string('chain_id',255)->nullable(true);
            $table->string('currency_symbol',255)->nullable(true);
            $table->text('explorer_url')->nullable(true);
            $table->string('network_icon',255)->nullable(true);
            $table->text('about')->nullable(true);
            
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
        Schema::dropIfExists('networks');
    }
}
