<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingTimeslot extends Model
{
    use HasFactory;

    protected $table = 'booking_timeslots';

    protected $fillable = [
        'timeslot'
    ];
}
