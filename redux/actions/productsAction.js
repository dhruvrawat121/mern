
import axios from "axios";
import BaseURL from "../../lib/baseUrl"


// All Products
export const productAction =(req)=>async(dispatch)=>{

    try{
        const products=await axios.get(`${BaseURL}/api/products`)
        dispatch({
            type:"FETCH_PRODUCTS",
            payload:{
                Products:products.data,
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

export const clearErrors =()=>(dispatch)=>{
    dispatch({
        type:"CLEAR_ERROR",
    })
}