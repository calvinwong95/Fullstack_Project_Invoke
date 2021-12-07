import {GET_APPROVED_BOOKING_DATA} from "../types";

const defaultState = {}

const approvedBookingListReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case GET_APPROVED_BOOKING_DATA:
            return state = action.payload;
            
        
        default:
            return state
    }
}

export default approvedBookingListReducer;