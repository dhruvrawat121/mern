import axios from "axios"
import BaseURL from "../../lib/baseUrl"

const ProductDetail=()=>async(dispatch)=>{
    const productDetail = await axios.get(`${BaseURL}/api/product/${id}`)
    console.log(productDetail)
    dispatch({
        type:"PRODUCT_DETAIL",
        productDetail=productDetail.data,
    })
}