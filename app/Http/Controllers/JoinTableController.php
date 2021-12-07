<?php

namespace App\Http\Controllers;

use App\Models\BookingTimeslot;
use App\Models\BookingVenue;
use App\Models\Booking;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class JoinTableController extends Controller
{
    function index($id)
    {
        // $data = Booking::join('booking','bookings.bookingtimeslot_id','=','booking_timeslots.id')
        // ->join('bookings','bookings.bookingvenue_id','=','booking_venues.id')
        // ->get(['booking_timeslots.timeslot','booking_venues.venue_name']);

        $data = Booking::join('booking_timeslots','bookings.bookingtimeslot_id','=','booking_timeslots.id')
        ->join('booking_venues','bookings.bookingvenue_id','=','booking_venues.id')
        ->where('bookings.user_id',$id)
        ->orderBy('bookings.created_at')
        ->get(['booking_timeslots.timeslot','booking_venues.venue_name','bookingdate','bookings.id','booking_status']);



        $response = [
            'data' => $data
        ];
        return response($response,201);
    }

    function getPending(Request $request) {

        $data = Booking::join('booking_timeslots','bookings.bookingtimeslot_id','=','booking_timeslots.id')
        ->join('booking_venues','bookings.bookingvenue_id','=','booking_venues.id')
        ->join('users','bookings.user_id','=','users.id')
        ->get(['users.name','booking_timeslots.timeslot','booking_venues.venue_name','bookingdate','bookings.id','booking_status','bookings.updated_at']);

        $response = [
            'data' => $data
        ];
        return response($response,201);
    }


    function delete($id)
    {
        $delete = Booking::destroy($id);

        $response = [
            'data' => $delete
        ];

        return response($response,201);

    }

    function getApproved(Request $request,$id)
    {
        // $fields = $request->validate([

        //     'booking_status' => 'required|integer',

        // ]);

        $booking = Booking::find($id);
        $booking ->update($request->all());

        $response = [
            'data' => $booking
        ];
        return response($response,201);
    }

    function getRejected(Request $request,$id)
    {


        $booking = Booking::find($id);
        $booking ->update($request->all());

        $response = [
            'data' => $booking
        ];
        return response($response,201);
    }
}
