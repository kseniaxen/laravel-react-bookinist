<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class OrderResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        $books_orderArray = explode(',', $this->books_order);
        $books_orderAsNumbers = array_map('intval', $books_orderArray);
        return [
            'id' => $this->id,
            'buyer' => DB::table("users")->where('id', $this->buyerId)->first(),
            'books_order' => $books_orderAsNumbers,
            'status' => $this->statusId,
            'payment' => $this->paymentId,
            'delivery' => $this->delivery,
            'receiver_name' => $this->receiver_name,
            'number_phone' => $this->number_phone,
            'price' => $this->price
        ];
    }
}
