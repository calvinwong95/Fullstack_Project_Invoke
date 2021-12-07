import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import bookingReducer from "./bookingReducer";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";
import pendingBookingReducer from "./pendingBookingReducer";


const rootReducer = combineReducers ({
   
    login:loginReducer,
    admin:adminReducer,
    booking: bookingReducer,
    pending: pendingBookingReducer,
    error: errorReducer,
}) 

export default rootReducer;