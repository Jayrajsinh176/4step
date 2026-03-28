<?php

namespace App\Http\Controllers\Api;
use App\Models\Order;
use App\Models\Member;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
   public function store(Request $request)
{
    $order = Order::create([
        'member_id' => $request->member_id, // ✅ store id
        'product_name' => $request->product_name,
        'quantity' => $request->quantity,
        'total_amount' => $request->total_amount,
        'image' => $request->image
    ]);

    return response()->json([
        'message' => 'Order placed successfully',
        'data' => $order
    ]);
}

public function index()
{
    $orders = Order::all()->map(function ($order) {
        $member = Member::find($order->member_id);

        return [
            'product_name' => $order->product_name,
            'quantity' => $order->quantity,
            'total_amount' => $order->total_amount,
            'image' => $order->image,
            'member_name' => $member ? $member->fullname : 'Guest' // ✅ dynamic name
        ];
    });

    return response()->json($orders);
}
}
