import axios from "axios"
import BaseURL from "../../lib/baseUrl"

export const ProductDetail=(req,id)=>async(dispatch)=>{
    
    try{
        const productDetail = await axios.get(`${BaseURL}/api/product/${id}`)
        dispatch({
            type:"PRODUCT_DETAIL",
            payload:{
                productDetail:productDetail.data
            }
        })

    }catch(error){
        dispatch({
            type:"PRODUCT_DETAIL_ERROR",
            payload:{
                error:error.response.data.message
            }
        })
    }
    
}
