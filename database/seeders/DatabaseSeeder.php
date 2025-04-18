<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(UserSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(GenreSeeder::class);
        $this->call(StatusBookSeeder::class);
        $this->call(BookSeeder::class);
        $this->call(PaymentSeeder::class);
        $this->call(StatusSeeder::class);
    }
}
