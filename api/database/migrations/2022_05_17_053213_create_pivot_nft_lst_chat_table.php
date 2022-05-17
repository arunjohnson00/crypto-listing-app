<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePivotNftLstChatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pivot_nft_lst_chat', function (Blueprint $table) {
            $table->increments('id'); 
            
            $table->foreign('nft_lsting_id')->references('id')->on('nft_lsting')->onDelete('cascade');
            $table->integer('nft_lsting_id')->unsigned()->nullable(); 
     
            $table->foreign('chat_platform_id')->references('id')->on('coins_chat');
            $table->integer('chat_platform_id')->unsigned()->nullable(); 
     
            $table->text('chat_url')->nullable(true);  
            
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
        Schema::dropIfExists('pivot_nft_lst_chat');
    }
}
