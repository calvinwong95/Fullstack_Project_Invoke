import React , {useEffect} from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import { useDispatch ,useSelector  } from 'react-redux';
import { getPendingRequest , updateApproveList , updateRejectList} from '../../actions';
import BookingDetails from '../../components/BookingDetails';
import classes from './rejectdb.module.css';

function RejectDB() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginInfo = useSelector(state=>state.login);

    const toDashboard = () => {
        navigate('/dashboard');
    }

    useEffect(()=> {
        dispatch(getPendingRequest(loginInfo.token));
     },[])

    const rejectedList = useSelector(state=>state.pending.data);
    console.log(rejectedList);


    return (
        <div className={classes.container}>
            <Header onClick={()=>toDashboard()} text="To Homepage" title="Dashboard - Rejected Booking"/>
            {
                rejectedList.data.length > 0 && rejectedList.data.map((list, pos)=> list.booking_status === 2 && 
                <BookingDetails username={list.name} datebooked={list.bookingdate} timeslot={list.timeslot} venue={list.venue_name} updatedAt={list.updated_at} bookingStatus={list.booking_status} approvereject="Rejected"/>
                )
            }   
        </div>
        
    )
}

export default RejectDB;