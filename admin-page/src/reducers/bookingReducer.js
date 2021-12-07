import { GET_BOOK_ADMIN} from "../types";

const defaultState = {};

const bookingReducer =(state= defaultState,action) => {
    
    switch(action.type){
        
        case GET_BOOK_ADMIN:
            return state = action.payload;
       
        default:
            return state
    }
}

export default bookingReducer;