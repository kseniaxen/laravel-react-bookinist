<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Http\Requests\StorePaymentRequest;
use App\Http\Requests\UpdatePaymentRequest;
use App\Http\Resources\PaymentResource;

class PaymentController extends Controller
{
    public function index()
    {
        return PaymentResource::collection(Payment::query()->orderBy('id')->get());
    }

    public function store(StorePaymentRequest $request)
    {
        $data = $request->validated();
        $payment = Payment::create($data);

        return response(new PaymentResource($payment) , 201);
    }

    public function show(Payment $payment)
    {
        return new PaymentResource($payment);
    }

    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        $data = $request->validated();
        $payment->update($data);

        return new PaymentResource($payment);
    }

    public function destroy(Payment $payment)
    {
        $payment->delete();

        return response("", 204);
    }
}
