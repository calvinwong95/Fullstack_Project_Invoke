import {ADD_USER} from "../types";

const defaultState = {
    userList: [],
}

const userReducer =(state= defaultState,action) => {
    
    switch(action.type){
        case ADD_USER:
            return state;
        
            
       
        default:
            return state
    }
}

export default userReducer;