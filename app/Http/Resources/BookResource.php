<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        $array = explode(",", $this->image_path);
        $path_array = [];
        foreach ($array as $item) {
            array_push($path_array, asset('storage/images/' . $item));
        }
        return [
            'id' => $this->id,
            'user' => DB::table("users")->where('id', $this->userId)->first()->name,
            'image_user' => DB::table("users")->where('id', $this->userId)->first()->image,
            'city' => DB::table("cities")->where('id', $this->cityId)->first()->name,
            'author' => $this->author,
            'title' => $this->title,
            'description' => $this->description,
            'year' => $this->year,
            'publish' => $this->publish,
            'price' => $this->price,
            'image_path' => $path_array,
            'created_at' => $this->created_at
        ];
    }
}
