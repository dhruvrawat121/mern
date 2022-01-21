import axios from "axios"
import BaseURL from "../../lib/baseUrl"

export const ProductDetail=({id})=>async(dispatch)=>{
    
        const productDetail = await axios.get(`${BaseURL}/api/product/${id}`)
    dispatch({
        type:"PRODUCT_DETAIL",
        payload:{
            productDetail:productDetail.data
        }
    })
}
