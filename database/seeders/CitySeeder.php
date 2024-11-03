<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cities')->insert([
            'name' => 'Київ',
        ]);
        DB::table('cities')->insert([
            'name' => 'Дніпро',
        ]);
        DB::table('cities')->insert([
            'name' => 'Львів'
        ]);
    }
}
