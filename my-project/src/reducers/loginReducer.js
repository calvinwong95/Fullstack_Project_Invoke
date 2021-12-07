import {LOGIN_USER, LOGOUT_USER} from "../types";

const defaultState = {};

const loginReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case LOGIN_USER:
            return state = action.payload;
        
        case LOGOUT_USER:
            return state = {};
       
        default:
            return state
    }
}

export default loginReducer;