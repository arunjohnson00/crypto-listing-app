<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('v_name')->nullable(false);
            $table->string('v_title')->nullable(false);
            $table->string('v_sub_title')->nullable(false);
            $table->text('v_url')->nullable(false);
            $table->string('v_btn_name')->nullable(false);
            $table->text('v_btn_url')->nullable(false);
            $table->tinyInteger('status')->default(2)->comment('1-Approved,2-Processing,3-Rejected/Blocked'); 
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
        Schema::dropIfExists('videos');
    }
}
