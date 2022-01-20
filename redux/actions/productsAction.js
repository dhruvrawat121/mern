
import axios from "axios";
import BaseURL from "../../lib/baseUrl"

export const productAction =()=>async(dispatch)=>{

    dispatch({
        type:"IS_LOADING"
    })
    // fetching data
    const AllProducts = await axios.get(`${BaseURL}/api/products`);
    dispatch({
        type:"FETCH_PRODUCTS",
        payload:{
            Products:AllProducts.data
        }
    })
}

