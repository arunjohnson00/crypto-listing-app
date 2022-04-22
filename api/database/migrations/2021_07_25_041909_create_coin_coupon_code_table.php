<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoinCouponCodeTable extends Migration
{
    /**
     * Run the migrations.
     *  
     * @return void
     */
    public function up()
    {
        Schema::create('coin_coupon_code', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('coupon_name',255)->unique()->nullable(false);
            $table->tinyInteger('coupon_type')->default(1)->comment('1-fixed,2-percentage');
            $table->string('amount_percentage',255)->nullable(false); 
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
        Schema::dropIfExists('coin_coupon_code');
    }
}
