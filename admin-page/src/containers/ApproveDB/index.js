import React , {useEffect} from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import { useDispatch ,useSelector  } from 'react-redux';
import { getPendingRequest , updateApproveList , updateRejectList} from '../../actions';
import BookingDetails from '../../components/BookingDetails';

import classes from './approvedb.module.css';

function ApproveDB() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginInfo = useSelector(state=>state.login);
    
    const toDashboard = () => {
        navigate('/dashboard');
    }

    useEffect(()=> {
        dispatch(getPendingRequest(loginInfo.token));
     },[])

    const approveList = useSelector(state=>state.pending.data);

    return (
        <div className={classes.container}>
            <Header onClick={()=>toDashboard()} text="To Homepage" title="Dashboard - Approved Booking"/>

            {
                approveList.data.length > 0 && approveList.data.map((list, pos)=> list.booking_status === 1 && 
                 <BookingDetails key={pos} username={list.name} datebooked={list.bookingdate} timeslot={list.timeslot} venue={list.venue_name} updatedAt={list.updated_at} bookingStatus={list.booking_status} approvereject="Approved"/>
                 )
            }
        </div>
        
    )
}

export default ApproveDB;
