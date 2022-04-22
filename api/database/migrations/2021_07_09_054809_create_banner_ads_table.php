<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBannerAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banner_ads', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('name',255)->nullable();
            $table->string('banner_target_link',255)->nullable(false);
            $table->string('no_of_days',255)->nullable(false);
            $table->string('banner_image',255)->nullable(false);
            $table->foreign('banner_ad_type')->references('id')->on('banner_ad_settings');
            $table->integer('banner_ad_type')->unsigned();
            
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('user_id')->unsigned()->nullable(); 
            
            $table->tinyInteger('status')->default(2)->comment('1-Approved,2-Suspended');
            $table->tinyInteger('accept_terms')->default(1)->comment('1-yes,0-no');
            $table->string('paid_amount',255)->nullable();
            $table->tinyInteger('is_coupon_applied')->default(0)->comment('1-yes,0-no');

            $table->foreign('applied_coupon_id')->references('id')->on('banner_coupon_code');
            $table->integer('applied_coupon_id')->unsigned()->nullable();

            $table->string('reduced_amount',255)->nullable();
            $table->text('payment_address')->nullable();
            
            $table->timestamp('approved_at')->default(null)->nullable();


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
        Schema::dropIfExists('banner_ads');
    }
}
