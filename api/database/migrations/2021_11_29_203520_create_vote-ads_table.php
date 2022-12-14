<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoteAdsTable extends Migration
{
    /** 
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vote-ads', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('name')->nullable();
            $table->string('target_link')->nullable(false);
            $table->string('no_of_days')->nullable(false);
            $table->string('ads_image')->nullable(false);
            $table->tinyInteger('status')->default(2)->comment('0-Not Approved ,1-Approved,2-Suspended');
            $table->string('paid_amount')->nullable();
            $table->string('reduced_amount')->nullable();
            //$table->timestamp('approved_at')->default(null)->nullable();
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
         Schema::dropIfExists('vote-ads');
    }
}
