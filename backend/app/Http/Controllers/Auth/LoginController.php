<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Laravel\Passport\Token; // Add this line

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            // Generate a new access token (using Laravel Passport)
            $accessToken = $user->createToken('auth_token')->accessToken;

            return response()->json([
                'message' => 'Login successful!',
                'access_token' => $accessToken, // Get the plain text token
                'user' => $user->only('id', 'name', 'email'), // Return only essential user details
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid credentials!',
        ], 401);
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();
        if ($user) {
            $user->tokens->each(function ($token, $key) {
                $token->delete();
            });
        }

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
