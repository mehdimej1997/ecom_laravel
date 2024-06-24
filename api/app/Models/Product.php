<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "slug",
        "product_images",
        "description",
        "price",
        "is_active",
        "is_stock",
        "is_featured",
        "on_sale",
        "is_active",
        "category_id",
        "brand_id"
    ];

    protected $casts = ["images" => "array"];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
