<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusBookSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('status_books')->insert([
            'name' => 'У продажу',
        ]);
        DB::table('status_books')->insert([
            'name' => 'Куплено',
        ]);
    }
}
