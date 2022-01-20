import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import messageReducer from "./messageReducer";
import productsReducer from "./productsReducer";
import productDetailReducer from "./productDetailReducer";


const  allReducers = combineReducers({
    logIn: logInReducer,
    message: messageReducer,
    products:productsReducer,
    productDetail:productDetailReducer,
})


export default allReducers;