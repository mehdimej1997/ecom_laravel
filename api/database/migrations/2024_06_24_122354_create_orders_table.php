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
            $table->decimal("grand_total");
            $table->decimal("shipping_amount");
            $table->string("currency");
            $table->text("notes");

            $table->enum(
                "payment_method",
                ["PAYPAL", "CREDIT_CARD", "STRIPE", "CASH"]
            )->default("CASH");

            $table->enum(
                "payment_status",
                ["PAID", "PENDING", "CANCELED"]
            )->default('PENDING');

            $table->enum(
                "shipping_status",
                ["NEW", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELED"]
            )->default('NEW');

            $table->foreignId("user_id")
                ->constrained("users")
                ->cascadeOnDelete();

            $table->timestamps();
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
