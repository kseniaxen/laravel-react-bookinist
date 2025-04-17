<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:55',
            'author' => 'required|string|max:55',
            'description' => 'nullable|max:1000',
            'year' => 'nullable|integer|min:1|digits_between: 1,4',
            'publish' => 'nullable|string|max:55',
            'statusId' => 'sometimes|string',
            'price' => 'required|numeric|min:1',
            'userId' => 'required|exists:users,id',
            'cityId' => 'required|exists:cities,id',
            'genreId' => 'required|exists:genres,id',
            'images_delete' => 'string',
            'image_path.*' => 'mimes:jpeg,png,jpg'
        ];
    }
}
