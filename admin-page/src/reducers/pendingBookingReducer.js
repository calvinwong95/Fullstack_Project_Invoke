import {GET_PENDING_ADMIN} from "../types";

const defaultState = {};

const pendingBookingReducer =(state= defaultState,action) => {
    
    switch(action.type){
        
        case GET_PENDING_ADMIN:
            return state = action.payload;
            
        default:
            return state
    }
}

export default pendingBookingReducer;