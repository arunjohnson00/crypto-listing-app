<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id'); 
            $table->string('name');
            $table->string('email')->unique(); 
            $table->string('password'); 
            $table->tinyInteger('email_verified')->default(0)->comment('1-yes,0-no');
            $table->timestamp('email_verified_at')->nullable();
            $table->tinyInteger('receive_newsletter')->default(0)->comment('1-yes,0-no');
            $table->tinyInteger('i_agree')->default(1)->comment('1-yes,2-no');
            $table->tinyInteger('status')->default(1)->comment('1-Approved,2-Suspended');
            $table->rememberToken();

            $table->string('verify_token', 80)->unique()->nullable()->default(null);
            $table->timestamp('verify_token_created_at')->nullable();
            $table->timestamp('verify_token_updated_at')->nullable();

            $table->string('reset_token', 80)->unique()->nullable()->default(null);
            $table->timestamp('reset_token_created_at')->nullable();
            $table->timestamp('reset_token_updated_at')->nullable();

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
        Schema::dropIfExists('users');
    }
}
