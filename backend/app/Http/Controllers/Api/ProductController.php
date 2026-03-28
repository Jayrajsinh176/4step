<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function viralProducts()
    {
        $products = Product::where('is_viral', 1)
            ->select('brand', 'name', 'price', 'image')
            ->get();

        // Convert image path to full URL
        $products->transform(function ($item) {
            $item->image = asset('storage/' . $item->image);
            return $item;
        });

        return response()->json($products);
    }
}