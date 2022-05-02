<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */ 
    public function up()
    {
        Schema::create('coins', function (Blueprint $table) {
            $table->increments('id');  
            $table->string('name')->nullable(false); 
            $table->string('symbol')->nullable(false);  
            $table->string('is_token_or_coin')->default(1)->comment('t-token,c-coin');
            $table->foreign('network_id')->references('id')->on('networks');
            $table->integer('network_id')->unsigned()->nullable();
            $table->string('address')->unique()->nullable(); 
            $table->string('explorer_link')->nullable(); 
            $table->string('token_listed_link')->nullable();
            $table->string('logo')->nullable();
            $table->string('slug')->unique()->nullable(); 
            $table->string('market_cap')->nullable();
            $table->string('max_supply')->nullable();
            $table->string('presale_link')->nullable();
            $table->string('presale_date')->nullable();
            $table->string('date_created')->nullable();
            $table->foreign('crypto_sector_cat_id')->references('id')->on('crypto_sector_category');
            $table->integer('crypto_sector_cat_id')->unsigned()->nullable();
            $table->tinyInteger('is_listed_coingecko')->default(2)->comment('1-yes,2-no');
            $table->string('coingecko_url')->nullable();
            $table->tinyInteger('is_listed_market_cap')->default(2)->comment('1-yes,2-no');
            $table->string('market_cap_url')->nullable();
            $table->string('official_email')->nullable();
            $table->string('description')->nullable();
            $table->text('details');
            $table->string('website_url')->nullable();
            $table->string('telegram_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('reddit_link')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('medium_link')->nullable();
            $table->string('github_link')->nullable();
            $table->string('whitepaper_link')->nullable();
            
            $table->string('youtube_link')->nullable();
            $table->string('tiktok_link')->nullable();
            $table->string('chart_link')->nullable();
            $table->string('audit_report_link')->nullable();
            $table->string('docs_link')->nullable();
            
            $table->string('discord_url')->nullable();
            $table->tinyInteger('i_agree')->default(1)->comment('1-yes,2-no');
            $table->tinyInteger('i_declare')->default(1)->comment('1-yes,2-no');
            $table->Integer('vote')->nullable(false)->default(0);
            $table->Integer('todays_vote')->nullable(false)->default(0);
            $table->Integer('impressions')->nullable(false)->default(0);
            $table->tinyInteger('created_from')->default(1)->comment('1-self,2-admin'); 
            $table->foreign('admin_id')->references('id')->on('admin_users');
            $table->integer('admin_id')->nullable()->unsigned();
            
            $table->string('price')->nullable(); 

            $table->string('promote_amount')->nullable(); 

            $table->tinyInteger('is_presale')->default(2)->comment('1-yes,2-no');

            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('user_id')->nullable()->unsigned();
            
            $table->tinyInteger('is_scheduled')->default(0)->comment('1-Yes,0-No');
            $table->string('schedule_date')->nullable();
            $table->timestamp('approved_at')->nullable();
            
            $table->tinyInteger('status')->default(1)->comment('1-Approved,2-Suspended,3-Blocked,4-Processing');
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
        Schema::dropIfExists('coins');
    }
}
