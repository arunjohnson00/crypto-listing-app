<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNftLstingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nft_lsting', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('title')->nullable(false); 
            $table->text('slug')->nullable(false);
            $table->text('description')->nullable(true); 
            $table->date('pre_sale_start_date')->nullable(true);
            $table->date('pre_sale_start_time')->nullable(true);
            $table->date('pre_sale_end_date')->nullable(true);
            $table->date('pre_sale_end_time')->nullable(true);
            
            $table->date('public_mint_start_date')->nullable(true);
            $table->date('public_mint_start_time')->nullable(true);
            $table->date('public_mint_end_date')->nullable(true);
            $table->date('public_mint_end_time')->nullable(true);
            
            $table->string('pre_sale_price')->nullable(true);
            $table->string('public_mint_price')->nullable(true);
            
            $table->tinyInteger('is_launch')->default(1)->comment('1-yes,2-No'); 
            $table->tinyInteger('i_agree')->default(1)->comment('1-yes,2-No'); 
            $table->tinyInteger('i_declare')->default(1)->comment('1-yes,2-No'); 
            
            $table->string('max_num_items')->nullable(true);
            $table->text('image')->nullable(true);
            
            //currancy_id 
             
            
            $table->tinyInteger('status')->default(1)->comment('1-Approved,2-Blocked'); 
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('approved_at')->nullable();
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
        Schema::dropIfExists('nft_lsting');
    }
}
