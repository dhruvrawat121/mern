import axios from "axios"
 import BaseURL from "../../lib/baseUrl"



export const AddToCartAction = (data)=>async(dispatch)=>{

    try{
        dispatch({type:"ADD_TO_CART_REQUEST"})

        const config = {headers:{
                "content-type":"application/json"

        }}
        const response = await axios.put(`${BaseURL}/api/cart`,data, config)
        dispatch({
            type:"ADD_TO_CART_SUCCESS",
            payload:{
                success:response.data.success
            }
        })
    }catch(error){
        dispatch({
            type:"ADD_TO_CART_ERROR",
            payload:error
        })

    }
}

// clear errors

export const clearErrors =()=>(dispatch)=>{
    dispatch({
        type:"CLEAR_ERROR",
    })
}


// fetch  cart info
 

export const fetchCartInfo=()=>async(dispatch)=>{

try{
    dispatch({type:"FETCH_CART_REQUEST"})
    const response = await axios.get(`${BaseURL}/api/cart`)

    dispatch({
        type:"FETCH_CART_SUCCESS",
        payload:response.data
    })

}catch(error){
    dispatch({
        type:"FETCH_CART_ERROR",
        payload:error
    })
}
}