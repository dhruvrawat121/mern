import axios from "axios";
import BaseURL from "../../lib/baseUrl";



const signUpAction = ()=>async(dispatch)=>{
const signUp = await axios.post(`${BaseURL}/api/signUp`)
}