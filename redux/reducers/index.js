import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import messageReducer from "./messageReducer";


const  allReducers = combineReducers({
    logIn: logInReducer,
    message: messageReducer,
})


export default allReducers;