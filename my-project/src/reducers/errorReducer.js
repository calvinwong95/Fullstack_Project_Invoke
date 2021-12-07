import {CLEAR_ERROR,LOGIN_ERROR_USER, LOGIN_ERROR_WRONGINPUT_USER} from "../types";

const defaultState = {
    name:"",
    password:"",
    error:"",
};

const errorReducer =(state= defaultState,action) => {
    
    switch(action.type){
        
        case LOGIN_ERROR_USER:
            
            if (action.payload.error.data.errors.name && action.payload.error.data.errors.password){
                return state = {
                
                    name:action.payload.error.data.errors.name[0],
                    password:action.payload.error.data.errors.password[0],
                    error:"",
                };
            } else if (action.payload.error.data.errors.name && !action.payload.error.data.errors.password){
                return state = {
                
                    name:action.payload.error.data.errors.name[0],
                    password:"",
                    error:"",
                };
            } else if (!action.payload.error.data.errors.name && action.payload.error.data.errors.password) {
                return state = {
                
                    name:"",
                    password:action.payload.error.data.errors.password[0],
                    error:"",
                };
            }

        case LOGIN_ERROR_WRONGINPUT_USER: 
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