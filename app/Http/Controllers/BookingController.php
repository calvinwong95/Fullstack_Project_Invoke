<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\BookingVenue;
use App\Models\BookingTimeslot;
use App\Models\Booking;
use App\Models\User;


class BookingController extends Controller
{
    function booking ()
    {
        $bookingVenue = BookingVenue::all();
        $bookingTimeslot = BookingTimeslot::all();
        return response()-> json([
            'bookingVenue' => $bookingVenue,
            'bookingTimeslot' => $bookingTimeslot,
        ]);


    }

    function viewBookingRequest (Request $request)
    {
        return Booking::all();
    }

    function addBookingRequest (Request $request)
    {
        $fields = $request->validate([
            'user_id' => 'required|integer',
            'bookingdate' => 'nullable|string',
            'bookingvenue_id' => 'required|integer',
            'bookingtimeslot_id' => 'required|integer',
            'booking_status' => 'required|integer',

        ]);

        $bookings = Booking::create([
            'user_id' => $fields['user_id'],
            'bookingdate' => $fields['bookingdate'],
            'bookingvenue_id' => $fields['bookingvenue_id'],
            'bookingtimeslot_id' => $fields['bookingtimeslot_id'],
            'booking_status' => $fields['booking_status'],


            // 'user_id' => 1,
            // 'bookingdate' => '11/1/2021',
            // 'bookingvenue_id' => 1,
            // 'bookingtimeslot_id' => 1,
            // 'booking_status' => 1,
            // 'admin_id' => 1,

        ]);


        $response = [
            'bookings' => $bookings,

        ];

        return response($response,201);
    }


    function adminGetUserData (Request $request)
    {
        return User::all();
    }

    function adminGetBookingData (Request $request)
    {
        return Booking::all();
    }

    function getApprovedBookings (Request $request)
    {
        return Booking::all()->where('booking_status', '=' ,1);
    }
}
