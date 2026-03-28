<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $fillable = [
    'member_id',
    'fullname',
    'dob',
    'gender',
    'email',
    'mobile_no',
    'address',
    'pin_code',
    'state',
    'city',
    'password'
];
}
