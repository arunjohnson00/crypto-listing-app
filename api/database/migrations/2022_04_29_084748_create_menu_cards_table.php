<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_cards', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('icon')->nullable(false);
            $table->string('title')->nullable(false);
            $table->string('sub_title')->nullable(false);
            $table->text('url')->nullable(true);
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
        Schema::dropIfExists('menu_cards');
    }
}
