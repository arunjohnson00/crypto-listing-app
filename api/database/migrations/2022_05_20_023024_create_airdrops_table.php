<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAirdropsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('airdrops', function (Blueprint $table) {
            $table->increments('id');  
            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');
            $table->integer('coin_id')->unsigned()->nullable(); 
            $table->date('start_date')->nullable(true);
            $table->string('no_of_days')->nullable(true); 
            $table->string('total_amount')->nullable(true); 
            $table->string('no_of_winners')->nullable(true); 
            $table->tinyInteger('is_follow_twitter')->default(2)->comment('1-Yes,2-No'); 
            $table->tinyInteger('join_telegram')->default(2)->comment('1-Yes,2-No'); 
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
        Schema::dropIfExists('airdrops');
    }
}
