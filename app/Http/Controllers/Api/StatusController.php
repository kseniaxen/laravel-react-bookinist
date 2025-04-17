<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Status;
use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Http\Resources\StatusResource;

class StatusController extends Controller
{
    public function index()
    {
        return StatusResource::collection(Status::query()->orderBy('id')->get());
    }

    public function store(StoreStatusRequest $request)
    {
        $data = $request->validated();
        $status = Status::create($data);

        return response(new StatusResource($status) , 201);
    }

    public function show(Status $status)
    {
        return new StatusResource($status);
    }

    public function update(UpdateStatusRequest $request, Status $status)
    {
        $data = $request->validated();
        $status->update($data);

        return new StatusResource($status);
    }

    public function destroy(Status $status)
    {
        $status->delete();

        return response("", 204);
    }
}
