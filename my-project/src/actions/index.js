import {CLEAR_ERROR,LOGIN_ERROR_WRONGINPUT_USER, ADD_BOOKING, DELETE_BOOKING, ADD_USER, LOGIN_USER, LOGOUT_USER, GET_BOOKING_ARRAY ,GET_BOOKED_DATA, DELETE_DATA, GET_APPROVED_BOOKING_DATA, LOGIN_ERROR_USER}from "../types";
import axios from "axios";


const URL = "http://4bad-49-124-200-218.ngrok.io"
//FOR REGISTRATION
export const addUser = (data) => (dispatch)=>{
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`${URL}/api/register`,{
    name: data.username, 
    email:data.email,
    password:data.password,
    password_confirmation : data.retypePassword,
    is_admin: 0,
    
    })
    .then(res =>  {
    console.log('res...',res);
    dispatch({
        type: ADD_USER, 
    })
    })
    .catch(error => {
    console.log('Something wrong fetching API', error);
    
})
}


//FOR LOGIN

export const loginUser = (data) => (dispatch)=>{
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`${URL}/api/login`, {
            name: data.username,
            password: data.password,
        }).then(res => {
            console.log(res);
            dispatch({
                type: LOGIN_USER,
                payload: {
                    token: res.data.token,
                    name: res.data.user.name,
                    id: res.data.user.id,
                    
                } 
            })
           
        })
        .catch(error => {
            
            console.log('Something wrong with the user login post API', error.response);

            if(error.response.status === 401){
                console.log(error.response.data.errors);
                dispatch({
                    type: LOGIN_ERROR_WRONGINPUT_USER,
                    payload: error.response.data.errors,
                })
            } else {
                dispatch({
                    type: LOGIN_ERROR_USER,
                    payload: {
                    error: error.response,
                    }
                })
            }
        })
}

//FOR LOGOUT
export const logoutUser = (data) => (dispatch)=>{
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`${URL}/api/logout`,{},{
            headers: {
                Authorization: 'Bearer ' +data,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            })
            .then(res => {
            dispatch({
                type: LOGOUT_USER,
             
            })
           
        })
        .catch(error => {
            console.log('Something wrong with the user logout POST API', error);
        })
}

//FOR GETTING DATA
export const getBookingArray = (data) => (dispatch)=>{
    
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //GET ACTION DONT NEED SECOND PARAM
    axios.get(`${URL}/api/booking`,{
            headers: {
                Authorization: 'Bearer ' +data,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            })
            .then(res => {
                
                dispatch({
                    type: GET_BOOKING_ARRAY,
                    payload: res.data,
                
                })
                
           
            })
            .catch(error => {
            console.log('Something wrong with retrieving array for book API', error);
            })
}
// FOR GETTING BOOKED DATA FROM API
export const getBookedList = (data) => (dispatch)=>{
    
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //GET ACTION DONT NEED SECOND PARAM
    axios.get(`${URL}/api/joinedData/${data.id}`,{
            headers: {
                Authorization: 'Bearer ' +data.token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            })
            .then(res => {
                console.log(res.data.data);
                dispatch({
                    type: GET_BOOKED_DATA,
                    payload: res.data.data,
                    
                
                })
                
           
            })
            .catch(error => {
            console.log('Something wrong with retrieving booked data from API', error);
            })
}



// ADD NEW BOOKING
export const addBooking = (data) => (dispatch) => {
    axios.post(`${URL}/api/addBookingRequest`,{
        user_id : data.userId,
        bookingdate : data.text,
        bookingvenue_id : data.selectVenue,
        bookingtimeslot_id : data.selectTime,
        booking_status : data.status,
        
    },{
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
})
        .then(res => {
        dispatch({
            type: ADD_BOOKING,
            payload: res,
         
        })
       
    })
    .catch(error => {
        console.log('Something wrong with the addBooking POST API', error);
    })
}
    


export const deleteBooking = (data) => (dispatch) =>
    {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //GET ACTION DONT NEED SECOND PARAM
    console.log(data);
    axios.delete(`${URL}/api/delete/${data.id}`,{
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        })
        .then(res => {
            console.log(res);
            dispatch({
                type: DELETE_DATA,
                // payload: res.id,
                
            
            })
            
       
        })
        .catch(error => {
        console.log('Something wrong with deleting data from API', error);
        })
}


// FOR GETTING APPROVED BOOKING DATA FROM API
export const getApprovedBookingArray = (data) => (dispatch)=>{
    
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //GET ACTION DONT NEED SECOND PARAM
    axios.get(`${URL}/api/getApprovedBookings`,{
            headers: {
                Authorization: 'Bearer ' +data,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            })
            .then(res => {
                // console.log(res.data);
                dispatch({
                    type: GET_APPROVED_BOOKING_DATA,
                    payload: res.data,
                    
                
                })
                
           
            })
            .catch(error => {
            console.log('Something wrong with retrieving booked data from API', error);
            })
}
    
export const clearError = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    })
}