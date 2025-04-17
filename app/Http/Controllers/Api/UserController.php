<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index()
    {
        //return UserResource::collection(User::query()->orderBy('id', 'desc')->paginate(10));
        //return new UserResource(User::query()->orderBy('id', 'desc')->paginate(10));
        return new UserResource(Auth::user());
    }

    public function store(StoreUserRequest $request)
    {
        
    }

    public function show()
    {
        return new UserResource(Auth::user());
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        if($data['password'] == null ){
            $data['password'] = Auth::user()['password'];
            $user->update($data);
        }
        
        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        //
    }
}
