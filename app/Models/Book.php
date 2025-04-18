<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Book extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'userId',
        'cityId',
        'genreId',
        'statusId',
        'author',
        'title',
        'description',
        'year',
        'publish',
        'price',
        'image_path'
    ];
}
