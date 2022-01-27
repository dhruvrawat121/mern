

const initState={products:[], quantity:null, loading:false, cartItems:[], remove:[]}

export const AddToCartReducer = (state=initState, action)=>{
    switch(action.type){
        case "ADD_TO_CART_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "ADD_TO_CART_SUCCESS":
            return{
                success:action.payload.success,
                loading:false
            }
        case "ADD_TO_CART_FAIL":
            return{
                error:action.payload
            }
        case "CLEAR_ERROR":
            return{
                ...state,
                errors:null
            }
        default:
            return{
                ...state,
            
            }
            // fetching data from cart
        case "FETCH_CART_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_CART_SUCCESS":
            return{
                ...state,
                cartItems: action.payload,
                loading: false
            }
        case "FETCH_CART_FAIL":
            return{
                error:action.payload
            }
        // deleting item from cart

        case "DELETE_ITEM_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "DELETE_ITEM_SUCCESS":
            return{
                ...state,
                remove: action.payload,
                loading: false
            }
        case "DELETE_ITEM_FAILURE":
            return{
                error:action.payload
            }
    }
}