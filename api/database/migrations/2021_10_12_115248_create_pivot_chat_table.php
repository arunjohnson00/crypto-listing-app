<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePivotChatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */ 
    public function up()
    {
        Schema::create('pivot_chat', function (Blueprint $table) {
            $table->increments('id');  
            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');
            $table->integer('coin_id')->unsigned();
            
     
            $table->text('chat_platform')->nullable(); 
            $table->text('chat_url')->nullable(true); 
            $table->tinyInteger('is_default')->default(0)->comment('0-No,1-Yes');
            
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
        Schema::dropIfExists('pivot_chat');
    }
}
