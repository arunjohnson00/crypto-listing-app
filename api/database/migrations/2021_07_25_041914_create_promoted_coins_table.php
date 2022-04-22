<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromotedCoinsTable extends Migration
{
    /**
     * Run the migrations.
     *  
     * @return void
     */
    public function up()
    {
        Schema::create('promoted_coins', function (Blueprint $table) {
            $table->id();
            
            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');
            $table->integer('coin_id')->nullable()->unsigned();
            
            $table->foreign('admin_id')->references('id')->on('admin_users');
            $table->integer('admin_id')->nullable()->unsigned();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('user_id')->nullable()->unsigned();

            $table->string('no_of_days',255)->nullable(false);

            $table->tinyInteger('status')->default(1)->comment('1-Approved, 2-Processing, 3-Suspended, 4-Blocked, 5-expired');

            $table->tinyInteger('accept_terms')->default(1)->comment('1-yes,0-no');

            $table->string('paid_amount',255)->nullable();
            $table->tinyInteger('is_coupon_applied')->default(0)->comment('1-yes,0-no');


            $table->foreign('applied_coupon_id')->references('id')->on('coin_coupon_code');
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
        Schema::dropIfExists('promoted_coins');
    }
}
