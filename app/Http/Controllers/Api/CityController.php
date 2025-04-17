<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Http\Resources\CityResource;

class CityController extends Controller
{
    public function index()
    {
        return CityResource::collection(City::query()->orderBy('id')->get());
    }

    public function store(StoreCityRequest $request)
    {
        $data = $request->validated();
        $city = City::create($data);

        return response(new CityResource($city) , 201);
    }

    public function show(City $city)
    {
        return new CityResource($city);
    }

    public function update(UpdateCityRequest $request, City $city)
    {
        $data = $request->validated();
        $city->update($data);

        return new CityResource($city);
    }

    public function destroy(City $city)
    {
        $city->delete();

        return response("", 204);
    }
}
