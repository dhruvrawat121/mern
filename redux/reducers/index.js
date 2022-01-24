import { combineReducers } from "redux";
import {productsReducer} from "./productsReducer";
import productDetailReducer from "./productDetailReducer";
import { SignUpReducer } from "./signUpReducer";

const  allReducers = combineReducers({
    products:productsReducer,
    productDetail:productDetailReducer,
    signUpUser:SignUpReducer,
})


export default allReducers;