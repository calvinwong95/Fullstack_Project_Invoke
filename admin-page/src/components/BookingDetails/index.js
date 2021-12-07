import React from 'react'
import classes from './bookingdetails.module.css';
import AdminButton from '../AdminButton';

function BookingDetails({username, datebooked, timeslot, venue, approve, reject, updatedAt, bookingStatus, approvereject}) {

    const ApprovedDate = updatedAt.slice(0,10);
    return (
        <div>
            <div className={classes.textHolder}>
                <div className={classes.text}>
                    <h4>Username: {username}</h4>
                    <h4>Date: {datebooked}</h4>
                </div>
                <div className={classes.text}>
                    <h4>Timeslot: {timeslot}</h4>
                    <h4>Venue: {venue}</h4>
                </div>
                {
                    bookingStatus > 0 ? <div>
                                            <h3 className={classes.text}>{approvereject} on: {ApprovedDate} </h3>
                                         </div> 
                                        :
                                         <div className={classes.buttonContainer}>
                                            <AdminButton text='Approve' type="primary" onClick={approve}/>
                                            <AdminButton text='Reject' type="secondary" onClick={reject}/>
                                         </div>
                }
                
            </div>
        </div>
    )
}

export default BookingDetails;
