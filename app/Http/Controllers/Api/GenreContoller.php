<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Http\Requests\StoreGenreRequest;
use App\Http\Requests\UpdateGenreRequest;
use App\Http\Resources\GenreResource;

class GenreContoller extends Controller
{
    public function index()
    {
        return GenreResource::collection(Genre::query()->orderBy('id')->get());
    }

    public function store(StoreGenreRequest $request)
    {
        $data = $request->validated();
        $genre = Genre::create($data);

        return response(new GenreResource($genre) , 201);
    }

    public function show(Genre $genre)
    {
        return new GenreResource($genre);
    }

    public function update(UpdateGenreRequest $request, Genre $genre)
    {
        $data = $request->validated();
        $genre->update($data);

        return new GenreResource($genre);
    }


    public function destroy(Genre $genre)
    {
        $genre->delete();

        return response("", 204);
    }
}
