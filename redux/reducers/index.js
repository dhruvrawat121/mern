import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import signUpReducer from "./signUpReducer"
import messageReducer from "./messageReducer";


const  allReducers = combineReducers({
    logIn: logInReducer,
    message: messageReducer,
    signUp: signUpReducer,
})


export default allReducers;