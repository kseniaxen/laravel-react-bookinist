<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statuses')->insert([
            'name' => 'У збірці',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Передається в доставку',
        ]);
        DB::table('statuses')->insert([
            'name' => 'У дорозi',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Отриманий',
        ]);
    }
}
