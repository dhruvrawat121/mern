const initState ={
    products:[],
}

const productsReducer =(state=initState, action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{...state,
                   products:action.payload.Products,
                  };
        case "FETCH_PRODUCTS_ERROR":
            return{
                error:action.payload.error
            }
        case "CLEAR_ERROR":
            return{
                ...state,
                error:null
            }
        default:
            return {...state}
    }
}

export default productsReducer;