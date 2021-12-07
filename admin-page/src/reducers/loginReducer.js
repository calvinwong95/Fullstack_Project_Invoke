import {LOGIN_ADMIN,LOGIN_ERROR_ADMIN,LOGOUT_ADMIN} from "../types";

const defaultState = {
   
};

const loginReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case LOGIN_ADMIN:
            return state = action.payload;
        
        case LOGOUT_ADMIN:
            return state = {};
       
        default:
            return state
    }
}

export default loginReducer;