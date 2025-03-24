<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('genres')->insert([
            'name' => 'Детективи та трилери',
        ]);
        DB::table('genres')->insert([
            'name' => 'Біографія',
        ]);
        DB::table('genres')->insert([
            'name' => 'Психологія',
        ]);
        DB::table('genres')->insert([
            'name' => 'Дитячі книжки',
        ]);
        DB::table('genres')->insert([
            'name' => 'Езотерика',
        ]);
        DB::table('genres')->insert([
            'name' => 'Кулінарія',
        ]);
        DB::table('genres')->insert([
            'name' => 'Освіта',
        ]);
        DB::table('genres')->insert([
            'name' => 'Подорожі',
        ]);
        DB::table('genres')->insert([
            'name' => 'Романи',
        ]);
        DB::table('genres')->insert([
            'name' => 'Фантастика',
        ]);
        DB::table('genres')->insert([
            'name' => 'Домашнє коло',
        ]);
        DB::table('genres')->insert([
            'name' => 'Енциклопедії',
        ]);
        DB::table('genres')->insert([
            'name' => 'Розповіді',
        ]);
        DB::table('genres')->insert([
            'name' => 'Зібрання творів',
        ]);
        DB::table('genres')->insert([
            'name' => 'Проза',
        ]);
        DB::table('genres')->insert([
            'name' => 'Поезія',
        ]);
        DB::table('genres')->insert([
            'name' => 'Подарункові видання',
        ]);
    }
}
