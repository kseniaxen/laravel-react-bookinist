<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'role_name' => 'ROLE_ADMIN',
            'password' => Hash::make('admin'),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'user',
            'email' => 'user@user.com',
            'role_name' => 'ROLE_USER',
            'password' => Hash::make('user'),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Ксения Сердюк',
            'email' => 'ksenia@ksenia.com',
            'role_name' => 'ROLE_USER',
            'password' => Hash::make('K123456!'),
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
