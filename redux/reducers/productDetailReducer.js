
const initState={
    productDetail:{},
   
}

const productDetailReducer = (state=initState,action)=>{
    switch(action.type){
        case "PRODUCT_DETAIL":
            return{
                ...state,
                productDetail:action.payload.productDetail,
                isLoading:false
            }
     

        default:
            return{
                ...state
            }
    }
}
export default productDetailReducer;