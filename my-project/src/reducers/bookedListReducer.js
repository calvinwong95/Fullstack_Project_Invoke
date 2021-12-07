import {GET_BOOKED_DATA,DELETE_DATA} from "../types";

const defaultState = {}

const bookedListReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case GET_BOOKED_DATA:
            return state = action.payload;

        case DELETE_DATA:
            return state = {};
            
        
        default:
            return state
    }
}

export default bookedListReducer;