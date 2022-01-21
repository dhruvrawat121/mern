
import axios from "axios";
import BaseURL from "../../lib/baseUrl"


// All Products
export const productAction =(req)=>async(dispatch)=>{

    try{
        const response=await axios.get(`${BaseURL}/api/products`)
        dispatch({
            type:"FETCH_PRODUCTS",
            payload:{
                Products:response.data,
            }
        })

    }catch(error){
        dispatch({
            type:"FETCH_PRODUCTS_ERROR",
            payload:{
                error:error.response.data.message
            }
        })
    }
}

// clear errors

export const clearErros =()=>(dispatch)=>{
    dispatch({
        type:"CLEAR_ERROR",
    })
}