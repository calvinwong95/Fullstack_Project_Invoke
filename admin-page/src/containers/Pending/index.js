import React , {useEffect} from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import { useDispatch ,useSelector  } from 'react-redux';
import { getPendingRequest , updateApproveList , updateRejectList} from '../../actions';
import classes from './pending.module.css';


import BookingDetails from '../../components/BookingDetails';


function Pending() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const loginInfo = useSelector(state=>state.login);

    


    const toDashboard = () => {
        navigate('/dashboard');
    }

    useEffect(()=> {
        dispatch(getPendingRequest(loginInfo.token));
     },[])
    
     const pendingList = useSelector(state=>state.pending.data);

     console.log(pendingList.data);
    
    const onApprove = (key) => {
        dispatch(updateApproveList({key:key,token:loginInfo.token}));
        dispatch(getPendingRequest(loginInfo.token));
    }

    const onReject = (key) => {
        dispatch(updateRejectList({key:key,token:loginInfo.token}));
        dispatch(getPendingRequest(loginInfo.token));
    }
 
    return (
        <div className={classes.container}>
            <Header onClick={()=>toDashboard()} text="To Homepage" title="Dashboard - Pending Request"/>

            {
                 pendingList.data.length > 0 && pendingList.data.map((list, pos)=> list.booking_status === 0 && 
                 <BookingDetails key={pos} username={list.name} datebooked={list.bookingdate} timeslot={list.timeslot} venue={list.venue_name} approve={()=>onApprove({id:list.id, user:list.name, date:list.bookingDate, timeslot:list.timeslot, venue:list.venue_name})} reject={()=>onReject({id:list.id, user:list.name, date:list.bookingDate, timeslot:list.timeslot, venue:list.venue_name})} updatedAt={list.updated_at}/>
                 )
            }
            
           
        </div>
    )
}

export default Pending
