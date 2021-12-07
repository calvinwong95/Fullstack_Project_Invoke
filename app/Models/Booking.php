<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'bookings';



    protected $fillable = [
        'user_id',
        'bookingdate',
        'bookingvenue_id',
        'bookingtimeslot_id',
        'booking_status',

    ];
}
