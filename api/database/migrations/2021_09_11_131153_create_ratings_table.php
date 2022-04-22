<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->increments('id');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');;
            $table->integer('user_id')->unsigned();

            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');;
            $table->integer('coin_id')->unsigned();
            
            $table->string('review', 255)->nullable();
            
            $table->decimal('rating')->nullable()->default(0);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ratings');
    }
}
