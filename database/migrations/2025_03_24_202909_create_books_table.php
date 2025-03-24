<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userId');
            $table->unsignedBigInteger('cityId');
            $table->unsignedBigInteger('genreId');
            $table->string('author');
            $table->string('title');
            $table->longText('description')->nullable();
            $table->integer('year')->nullable();
            $table->string('publish')->nullable();
            $table->decimal('price',15,2);
            $table->string('image_path')->nullable();
            $table->timestamps();

            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('cityId')->references('id')->on('cities')->onDelete('cascade');
            $table->foreign('genreId')->references('id')->on('genres')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};