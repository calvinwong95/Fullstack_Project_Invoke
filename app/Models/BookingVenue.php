<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingVenue extends Model
{
    use HasFactory;

    protected $table = 'booking_venues';

    protected $fillable = [
        'venue_name'
    ];
}
