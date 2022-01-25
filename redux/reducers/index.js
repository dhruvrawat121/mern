import { combineReducers } from "redux";
import {productsReducer} from "./productsReducer";
import productDetailReducer from "./productDetailReducer";
import { SignUpReducer } from "./signUpReducer";
import {AddToCartReducer} from "./cartReducer"

const  allReducers = combineReducers({
    products:productsReducer,
    productDetail:productDetailReducer,
    signUpUser:SignUpReducer,
    Cart: AddToCartReducer,
})


export default allReducers;