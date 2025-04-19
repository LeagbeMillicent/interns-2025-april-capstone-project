<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Code to list all order items
        $orderItems = OrderItem::all();
        if ($orderItems->isEmpty()) {
            return response()->json(['message' => 'No order items found.', 'data' => []], 200);
        }
        return response()->json([
            'message' => 'Order items retrieved successfully.',
            'data' => $orderItems
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Code to store a new order item
        $request->validate([
            'order_id' => 'nullable|integer|exists:orders,id', // change it to 'required' later
            'menu_id' => 'required|integer|exists:menus,id',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);

        $orderItem = OrderItem::create($request->all());
        return response()->json([
            'message' => 'Order item created successfully.',
            'data' => $orderItem
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Code to show a specific order item
        $orderItem = OrderItem::findOrFail($id);
        if (!$orderItem) {
            return response()->json(['message' => 'Order item not found.'], 404);
        }
        return response()->json(['message' => 'Order item retrieved successfully.', 'data' => $orderItem], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Code to update an existing order item
        $request->validate([
            'order_id' => 'sometimes|integer|exists:orders,id', // change it to 'required' later
            'menu_id' => 'sometimes|required|integer|exists:menus,id',
            'quantity' => 'sometimes|required|integer|min:1',
            'price' => 'sometimes|required|numeric|min:0',
        ]);

        $orderItem = OrderItem::findOrFail($id);
        if (!$orderItem) {
            return response()->json(['message' => 'Order item not found.'], 404);
        }

        $orderItem->update($request->all());
        return response()->json(
            ['message' => 'Order item updated successfully.', 'data' => $orderItem],
            200
        );
    }
}
