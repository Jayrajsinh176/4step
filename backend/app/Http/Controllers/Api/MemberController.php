<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MemberController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'dob' => 'required|date',
            'gender' => 'required',
            'email' => 'required|email|unique:members,email',
            'mobileNo' => 'required|digits:10|unique:members,mobile_no',
            'address' => 'required',
            'pinCode' => 'required|digits:6',
            'state' => 'required',
            'city' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $member = Member::create([
            'member_id' => '4STEP' . rand(100000, 999999),
            'fullname' => $request->firstName . ' ' . $request->lastName,
            'dob' => $request->dob,
            'gender' => $request->gender,
            'email' => $request->email,
            'mobile_no' => $request->mobileNo,
            'address' => $request->address,
            'pin_code' => $request->pinCode,
            'state' => $request->state,
            'city' => $request->city,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Signup successful',
            'data' => $member
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'member_id' => 'required',
            'password' => 'required'
        ]);

        $member = Member::where('member_id', $request->member_id)->first();

        if (!$member || !Hash::check($request->password, $member->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'data' => $member
        ]);
    }
}