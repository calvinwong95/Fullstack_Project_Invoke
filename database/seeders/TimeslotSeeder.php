<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TimeslotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('booking_timeslots')->insert([[
            'timeslot' => '0900 - 1000'
        ],[
            'timeslot' => '1000 - 1100'
        ],[
            'timeslot' => '1100 - 1200'
        ],[
            'timeslot' => '1300 - 1400'
        ],[
            'timeslot' => '1400 - 1500'
        ],[
            'timeslot' => '1500 - 1600'
        ]]);
    }
}
