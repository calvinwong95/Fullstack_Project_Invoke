import {ADD_BOOKING,DELETE_BOOKING} from "../types";

const defaultState = {
    bookingList: [],
}

const bookingReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case ADD_BOOKING:
            return {
                ...state,
                bookingList: state.bookingList.concat({
                key: Math.random(),
                data: action.payload,
            })
        };

            
        case DELETE_BOOKING:
            return {
                ...state,
                bookingList: state.bookingList.filter((item) => item.key !== action.payload)

                
            };
        default:
            return state
    }
}

export default bookingReducer;