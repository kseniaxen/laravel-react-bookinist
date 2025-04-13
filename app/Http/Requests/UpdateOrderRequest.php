<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
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
            'statusId' => 'required|exists:statuses,id',
            'books_order' => 'required|array',
            'delivery' => 'required|string|max:1000',
            'receiver_name' => 'required|string|max:55',
            'number_phone' => 'required|string',
            'price' => 'required|numeric|min:1'
        ];
    }
}
