<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function store(StoreOrderRequest $request)
    {
        $STORE_ORDER = 1;

        $data = $request->validated();

        if (is_array($data['books_order'])) {
            $data['books_order'] = implode(',', $data['books_order']);
        }
        
        $data['statusId'] = $STORE_ORDER;
        $order = Order::create($data);
        return response(new OrderResource($order), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
