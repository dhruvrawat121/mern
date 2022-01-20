const initState ={
    products:[],
    isLoading:true
}

const productsReducer =(state=initState, action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{...state,
                   products:action.payload.Products,
                   isLoading:false
                  };
        case "IS_LOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return {...state}
    }
}

export default productsReducer;