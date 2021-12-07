<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class VenueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('booking_venues')->insert([[
            'venue_name' => 'Moonshot'
        ],[
            'venue_name' => 'Rooftop'
        ],[
            'venue_name' => 'L3 Meeting Room'
        ],[
            'venue_name' => 'L2 Meeting Room'
        ],[
            'venue_name' => 'L1 Meeting Room'
        ]]);
    }
}
