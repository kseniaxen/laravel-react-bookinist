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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyerId');
            $table->unsignedBigInteger('paymentId');
            $table->unsignedBigInteger('statusId');
            $table->string('books_order');
            $table->text('delivery');
            $table->string('receiver_name');
            $table->string('number_phone');
            $table->decimal('price',15,2);
            $table->timestamps();

            $table->foreign('buyerId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('statusId')->references('id')->on('statuses')->onDelete('cascade');
            $table->foreign('paymentId')->references('id')->on('payments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
