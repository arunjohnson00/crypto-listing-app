<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');   
            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');
            $table->integer('coin_id')->unsigned(); 
            $table->text('title')->nullable(true); 
            $table->text('slug')->nullable(true); 
            $table->foreign('category_id')->references('id')->on('events_category');
            $table->integer('category_id')->unsigned();
            $table->date('event_date')->nullable(true); 
            $table->tinyInteger('or_earlier')->default(2)->comment('1-Yes,2-No'); 
            $table->text('description')->nullable(true); 
            $table->text('source_link')->nullable(true); 
            $table->text('proof')->nullable(true);  
            $table->foreign('reward_address_id')->references('id')->on('reward_address');
            $table->integer('reward_address_id')->unsigned()->nullable(); 
            $table->text('address')->nullable(true); 
            $table->string('twitter_account')->nullable(true);  
            $table->tinyInteger('status')->default(1)->comment('1-Approved,2-Blocked'); 
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
        Schema::dropIfExists('events');
    }
}
