import {LOGIN_ERROR_ADMIN, LOGIN_ERROR_WRONGINPUT_ADMIN , CLEAR_ERROR} from "../types";

const defaultState = {
    name:"",
    password:"",
    error:"",
};

const errorReducer =(state= defaultState,action) => {
    
    switch(action.type){
        
        case LOGIN_ERROR_ADMIN:
            if (action.payload.error.data.errors.name && action.payload.error.data.errors.password){
                return state = {
                    error:"",
                    name:action.payload.error.data.errors.name[0],
                    password:action.payload.error.data.errors.password[0],
                };
            } else if (action.payload.error.data.errors.name && !action.payload.error.data.errors.password){
                return state = {
                    error:"",
                    name:action.payload.error.data.errors.name[0],
                    password:"",
                };
            } else if (!action.payload.error.data.errors.name && action.payload.error.data.errors.password) {
                return state = {
                    error:"",
                    name:"",
                    password:action.payload.error.data.errors.password[0],
                };
            }
        
        case LOGIN_ERROR_WRONGINPUT_ADMIN: 
            return state = {
                name:"",
                password:"",
                error: action.payload,
            }

        case CLEAR_ERROR:
            return state = {
                name:"",
                password:"",
                error:"",
            }
        default:
            return state
    }
}

export default errorReducer;