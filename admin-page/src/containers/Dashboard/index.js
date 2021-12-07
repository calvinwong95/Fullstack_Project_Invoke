import React, {useEffect , useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate} from 'react-router';
import { logoutAdmin , getAllUserData, getBookingData} from '../../actions';


import classes from './dashboard.module.css';




import Header from '../../components/Header';
import MainDashboard from '../../components/MainDashboard';
import Card from '../../components/Card';






function Dashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginInfo = useSelector(state=>state.login);
    const adminInfo = useSelector(state=>state.admin);
    const bookingInfo = useSelector(state=>state.booking);

    

    // to get number of registered users and admin

    let registeredArray = [];
    adminInfo.data.map((list)=>{registeredArray = [...registeredArray,list.is_admin]});
    console.log(registeredArray);

    let counterUser = 0;
    let counterAdmin = 0;

    for (let i = 0; i < registeredArray.length; i++) {
        
        if (registeredArray[i] === 0){
            counterUser++
            
        } else {
            counterAdmin++
        }
    }



    // to get number of registered users and admin *end


    // to get number of pending request for booking

    let bookingStatusArray = [];
    bookingInfo.data.map((list,pos)=>{bookingStatusArray = [...bookingStatusArray,list.booking_status]});
    console.log(bookingStatusArray);

    let pendingCounter = 0;
    let approveCounter = 0;
    let rejectCounter = 0;

    for (let i = 0; i < bookingStatusArray.length; i++) {
        
        if (bookingStatusArray[i] === 0){
            pendingCounter++
            
        } else if (bookingStatusArray[i] === 1 ){
            approveCounter++

        } else {
            rejectCounter++
        }
    }

    console.log(pendingCounter,approveCounter,rejectCounter)


    // // to get number of pending request *end
    

    useEffect(()=> {
       dispatch(getAllUserData(loginInfo.token));
       dispatch(getBookingData(loginInfo.token));
    },[])


    const onLogOut = () => {
        dispatch(logoutAdmin(loginInfo.token));
        
        navigate('/');
        console.log(loginInfo.token);
    }

    const onPendingRoute = () => {
        navigate('/pending');
    }

    const onApprovedRoute = () => {
        navigate('/approved');
    }

    const onRejectedRoute = () => {
        navigate('/rejected');
    }

    return (
        <div className={classes.container}>
            <Header onClick={()=>onLogOut()} text="Log Out" title="Dashboard"/>
            <MainDashboard countUsers={counterUser} countAdmins={counterAdmin}/>
            <div className={classes.cardHolder}>
                <Card text="Pending Request: " value={pendingCounter} onClick={()=>onPendingRoute()}/>
                <Card text="Approved Request: " value={approveCounter} onClick={()=>onApprovedRoute()} type="primary"/>
                <Card text="Rejected Request: " value={rejectCounter} onClick={()=>onRejectedRoute()} type="secondary"/>
            </div>
            
        </div>

        
    )
}

export default Dashboard;
