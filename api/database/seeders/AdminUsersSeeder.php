<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::table('admin_users')->get()->count() == 0){
             $tasks =  [
                            [
                                'name'      =>  'CoinXHigh Admin',
                                'email'     =>  'admin@admin.com',
                                'status'    =>  '1', 
                                'password'  =>  bcrypt('password'),
                            ], 
                        ];
             
             DB::table('admin_users')->insert($tasks);
         }
    }
}
