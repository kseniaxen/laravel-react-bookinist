<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Book;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;

enum OrderStatus: int
{
    //ДОДЕЛАТЬ ВИДЫ СТАТУСОВ ЗАКАЗОВ
    case IN_THE_COLLECTION = 1;
}

class OrderController extends Controller
{

    public function index()
    {
        
    }

    public function store(StoreOrderRequest $request)
    {
        $STORE_ORDER = 1;

        $data = $request->validated();

        $arrayBookOrder = $data['books_order'];
        if (is_array($data['books_order'])) {
            $data['books_order'] = implode(',', $data['books_order']);
        }
        $data['statusId'] = OrderStatus::IN_THE_COLLECTION->value;

        $order = Order::create($data);

        foreach ($arrayBookOrder as $bookOrder) {
            Book::where('id', $bookOrder)->update(['statusId' => 2]);
        }
        return response(new OrderResource($order), 201);
    }

    public function show(Order $order)
    {
        
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        
    }

    public function destroy(Order $order)
    {
        
    }
}
