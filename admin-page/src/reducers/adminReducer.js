import {GET_DATA_ADMIN, GET_PENDING_ADMIN} from "../types";

const defaultState = {};

const adminReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case GET_DATA_ADMIN:
            return state = action.payload;


        default:
            return state
    }
}

export default adminReducer;