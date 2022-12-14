<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminUsersTable extends Migration
{ 
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->collation('utf8mb4_unicode_ci')->nullable(false);
            $table->string('email')->collation('utf8mb4_unicode_ci')->nullable(false);
            $table->string('password')->collation('utf8mb4_unicode_ci')->nullable(false);
            $table->string('image')->collation('utf8mb4_unicode_ci')->nullable();
            $table->tinyInteger('status')->comment('0-inactive , 1-active')->nullable(false);
           
            $table->rememberToken();
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
        Schema::dropIfExists('admin_users');
    }
}
