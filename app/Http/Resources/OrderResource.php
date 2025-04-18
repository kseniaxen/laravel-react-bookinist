<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use App\Models\Book;

class OrderResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        $books_orderArray = explode(',', $this->books_order);
        $books_orderAsNumbers = array_map('intval', $books_orderArray);
        return [
            'id' => $this->id,
            'buyer' => DB::table("users")->where('id', $this->buyerId)->first(),
            'books_order' => BookResource::collection(
                Book::whereIn('id', $books_orderAsNumbers)->get()
            ),
            'status' => DB::table("statuses")->where('id', $this->statusId)->first(),
            'payment' => DB::table("payments")->where('id', $this->paymentId)->first(),
            'delivery' => $this->delivery,
            'receiver_name' => $this->receiver_name,
            'number_phone' => $this->number_phone,
            'price' => $this->price,
            'created' => $this->created_at
        ];
    }
}
