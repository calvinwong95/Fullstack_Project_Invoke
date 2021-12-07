import {GET_BOOKING_ARRAY} from "../types";

const defaultState = {}

const bookingArrayReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case GET_BOOKING_ARRAY:
            return state = action.payload;
            
        
        default:
            return state
    }
}

export default bookingArrayReducer;