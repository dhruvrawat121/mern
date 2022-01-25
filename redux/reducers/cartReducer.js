

const initState={products:[], quantity:null, loading:false, cartItems:[]}

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
        case "FETCH_CART_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_CART_SUCCESS":
            return{
                cartItems: action.payload,
                loading: false
            }
        case "FETCH_CART_FAIL":
            return{
                error:action.payload
            }
    }
}