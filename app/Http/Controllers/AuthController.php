<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'is_admin' => 'required',

        ]);



        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'is_admin' => $fields['is_admin'],
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response,201);
    }


    public function login(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);


        // $fields = Validator::make($request->all(),[
        //     'name' => 'required|string',
        //     'password' => 'required|string',
        // ]);

        // if($fields->fails())
        // {
        //     return response()->json([
        //         'validation_errors'=>$fields->messages(),
        //     ],422);
        // }


        //Check Email
        $user = User::where('name', $fields['name'])->first();

        //Check Password
        if (!$user || !Hash::check($fields['password'],$user->password)) {
            return response([
                'errors' => 'Incorrect Password or Username'
            ], 401);
        };

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response,201);
    }

    public function logout(Request $request) {
        auth('sanctum')->user()->tokens()->delete();

        return [
            'message' => 'Log out successfully'
        ];
    }


}
