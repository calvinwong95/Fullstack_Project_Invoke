import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import bookingArrayReducer from "./bookingArrayReducer";
import bookedListReducer from "./bookedListReducer";
import approvedBookingListReducer from "./approvedBookingListReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers ({
    booking: bookingReducer,
    user:userReducer,
    login:loginReducer,
    bookingArray:bookingArrayReducer,
    bookedList: bookedListReducer,
    approvedList : approvedBookingListReducer,
    error: errorReducer,
}) 

export default rootReducer;