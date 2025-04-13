<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Book;


class StoreOrderRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'buyerId' => 'required|exists:users,id',
            'paymentId' => 'required|exists:payments,id',
            'books_order' => [
                'required',
                function ($attribute, $value, $fail) {
                    $buyerId = $this->input('buyerId');
                    $bookIds = is_array($value) ? $value : explode(',', $value);
                    $bookIds = array_map('intval', $bookIds);

                    $conflicts = Book::whereIn('id', $bookIds)
                        ->where('userId', $buyerId)
                        ->pluck('id')
                        ->toArray();

                    if (!empty($conflicts)) {
                        $fail("Вы не можете заказать свои книги");
                    }
                }
            ],
            'delivery' => 'required|string|max:1000',
            'receiver_name' => 'required|string|max:55',
            'number_phone' => 'required|string',
            'price' => 'required|numeric|min:1'
        ];
    }
}
