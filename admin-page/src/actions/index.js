import {CLEAR_ERROR,ADD_ADMIN , LOGIN_ADMIN, GET_DATA_ADMIN, GET_BOOK_ADMIN, GET_PENDING_ADMIN , UPDATE_APPROVE, UPDATE_REJECT, LOGOUT_ADMIN ,LOGIN_ERROR_WRONGINPUT_ADMIN, LOGIN_ERROR_ADMIN}from "../types";
import axios from "axios";


const URL = "http://4bad-49-124-200-218.ngrok.io" 
// const URL = "http://localhost:8000/api" 
export const addAdmin = (data) => (dispatch) => {

   
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`${URL}/api/register`,{
    // axios.post(`${URL}/register`,{
    name: data.username, 
    email:data.email,
    password:data.password,
    password_confirmation : data.retypePassword,
    is_admin: 1,
   
   })
   .then(res =>  {
   console.log('res...',res);
   dispatch({
       type: ADD_ADMIN, 
   })
    })
   
   .catch(error => {
   console.log('Something wrong fetching register API', error);
    })
}


export const loginAdmin = (data) =>  (dispatch) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`${URL}/api/login`, {
    // axios.post(`${URL}/login`, {
            name: data.username,
            password: data.password,
        }).then(res => {
            console.log(res);
           
            dispatch({
                    type: LOGIN_ADMIN,
                    payload: {
                        token: res.data.token,
                        name: res.data.user.name,
                        id: res.data.user.id,
                        is_admin: res.data.user.is_admin,

                        
                    }
                })

        })
        .catch(error => {
            console.log('Something wrong with the admin login post API', error.response);

            if(error.response.status === 401){
                console.log(error.response.data.errors);
                dispatch({
                    type: LOGIN_ERROR_WRONGINPUT_ADMIN,
                    payload: error.response.data.errors,
                    
                })
            } else {    
                dispatch({
                    type: LOGIN_ERROR_ADMIN,
                    payload: {
                        error: error.response,
                    }
                })
            }

           
        })
}

export const logoutAdmin = (data) =>  (dispatch) => {
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(`${URL}/api/logout`,{},{
        // axios.post(`${URL}/logout`,{},{
            headers: {
                Authorization: 'Bearer ' +data,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
    })
            .then(res => {
            console.log(res);
            dispatch({
                type: LOGOUT_ADMIN,
             
            })
        })
            .catch(error => {
            console.log('Something wrong with the logout POST API', error);
    
    })
}

//For admin to retrieve all user data list
export const getAllUserData = (data) =>  (dispatch) => {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`${URL}/api/adminGetUserData`,
    // axios.get(`${URL}/adminGetUserData`,
        {
        headers: {
            Authorization: 'Bearer ' +data,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        })
        .then(res => {
        console.log(res);
        dispatch({
            type: GET_DATA_ADMIN,
            payload: res,
         
        })
       
        })
    .catch(error => {
        console.log('Something wrong with the admin retrieving data GET API', error);
    })
}


//For admin to retrieve all booking data list
export const getBookingData = (data) =>  (dispatch) => {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`${URL}/api/adminGetBookingData`,{
    // axios.get(`${URL}/adminGetBookingData`,{
        headers: {
            Authorization: 'Bearer ' +data,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
})
        .then(res => {
        console.log(res);
        dispatch({
            type: GET_BOOK_ADMIN,
            payload: res,
         
        })
       
        })
    .catch(error => {
        console.log('Something wrong with the admin retrieving data GET API', error);
    })
}


//For admin to retrieve all pending booking list
export const getPendingRequest = (data) =>  (dispatch) => {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`${URL}/api/getPending`,{
    // axios.get(`${URL}/getPending`,{
        headers: {
            Authorization: 'Bearer ' +data,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
})
        .then(res => {
        console.log(res);
        dispatch({
            type: GET_PENDING_ADMIN,
            payload: res,
         
        })
       
        })
    .catch(error => {
        console.log('Something wrong with the admin retrieving pending booklist GET API', error);
    })
}

//update approve list for admin
export const updateApproveList = (data) =>  (dispatch) => {
    console.log(data);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.put(`${URL}/api/getApproved/${data.key.id}`,{
    // axios.put(`${URL}/getApproved/${data.key.id}`,{
        booking_status:1,
    },{
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
})
        .then(res => {
        console.log(res);
        dispatch({
            type: UPDATE_APPROVE,
            payload: res,
         
        })
       
        })
    .catch(error => {
        console.log('Something wrong with the admin retrieving approved booklist GET API', error);
    })
}

//update reject list for admin
export const updateRejectList = (data) =>  (dispatch) => {
    console.log(data);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.put(`${URL}/api/getApproved/${data.key.id}`,{
    // axios.put(`${URL}/getApproved/${data.key.id}`,{
        booking_status:2,
    },{
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
})
        .then(res => {
        console.log(res);
        dispatch({
            type: UPDATE_REJECT,
            payload: res,
         
        })
       
        })
    .catch(error => {
        console.log('Something wrong with the admin retrieving approved booklist GET API', error);
    })
}

//clear error for login page
export const clearError = () =>  (dispatch) => {
    
    dispatch({
        type: CLEAR_ERROR,
    })
}

