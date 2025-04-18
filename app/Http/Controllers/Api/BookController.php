<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Http\Requests\CartBookRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

enum BookStatus: int
{
    case ON_SALE = 1;
    case SOLD_OUT = 2;
}

class BookController extends Controller
{

    public function index()
    {
        return BookResource::collection(
            Book::query()
                ->where('statusId', 1) 
                ->orderBy('id', 'desc')
                ->paginate(8)
        );
    }

    public function cart(CartBookRequest $request)
    {
        $data = $request->validated();
        $id = explode(",", $data['id']);
        $books = Book::find($id);
        return BookResource::collection($books);
    }

    public function store(StoreBookRequest $request)
    {
        $data = $request->validated();
        $strImage = '';
        if ($request->hasFile('image_path')) {
            foreach ($data['image_path'] as $image) {
                $uniqueName = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $strImage .= $uniqueName . ',';
                $image->move(public_path('storage/images'), $uniqueName);
            }
        }
        $data['image_path'] = substr($strImage, 0, -1);
        $data['statusId'] = BookStatus::ON_SALE->value;
        $book = Book::create($data);

        return response(new BookResource($book), 201);
    }

    public function show(Book $book)
    {
        return new BookResource($book);
    }

    public function auth()
    {
        $books = DB::table('books')->where('userId', Auth::user()->id)->orderBy('id', 'desc')->get();
        return BookResource::collection($books);
    }

    public function update(UpdateBookRequest $request, Book $book)
    {
        $data = $request->validated();

        $onChange_images = '';
        $addImages = '';

        $book_Id = DB::table('books')->where('id', $book['id'])->get()->first();

        if ($request->hasFile('image_path')) {
            foreach ($data['image_path'] as $image) {
                $uniqueName = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $addImages .= $uniqueName . ',';
                $image->move(public_path('storage/images'), $uniqueName);
            }

            $addImages .= $book_Id->image_path;
            $data['image_path'] = $addImages;
        }

        if (!empty($data['images_delete'])) {
            if (empty($data['image_path'])) {
                $data['image_path'] = $book_Id->image_path;
            }
            $array_images = explode(",", $data['image_path']);
            foreach ($array_images as $image) {
                if ($image != $data['images_delete']) {
                    $onChange_images .= $image . ',';
                }
            }
            $onChange_images = substr($onChange_images, 0, -1);
            $data['image_path'] = $onChange_images;
        }

        $book->update($data);

        return response(new BookResource($book), 201);
    }

    public function destroy(Book $book)
    {
        $book->delete();

        return response("", 204);
    }
}
