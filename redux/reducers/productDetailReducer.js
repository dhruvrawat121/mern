
const initState={
    productDetail:{},
   
}

const productDetailReducer = (state=initState,action)=>{
    switch(action.type){
        case "PRODUCT_DETAIL":
            return{
                ...state,
                productDetail:action.payload.productDetail,
            }
        case "PRODUCT_DETAIL_ERROR":
            return{
                error:action.payload.error
            }
        case "CLEAR_ERRORS":
            return{
                ...state,
                error:null
            }
        default:
            return{
                ...state
            }
    }
}
export default productDetailReducer;