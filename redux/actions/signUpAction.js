import axios from "axios";
import BaseURL from "../../lib/baseUrl";

// for signing Up user

export const SignUpAction=(userData)=>async(dispatch)=>{

    try{
        dispatch({type:"REGISTER_USER_REQUEST"});

        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        const response = await axios.post(`${BaseURL}/api/auth/signUp`,userData,config)
        dispatch({
            type:"REGISTER_USER_SUCCESS",
            payload:{
                success:response.data
            }
        })
       
    }catch(error){

        dispatch({
            type:"REGISTER_USER_FAIL",
            payload:error.response.data.message
        })
    }
}
// clearing errors
export const clearErrors=()=>(dispatch)=>{
    dispatch({
        type:"CLEAR_ERRORS",
      
    })

}

// loader User

export const loadUser = (req)=>async(dispatch)=>{
    try{
        dispatch({
            type:"LOAD_USER_REQUEST"
        })

        const response= await axios.get(`${BaseURL}/api/me`)
        dispatch({
            type:"LOAD_USER_SUCCESS",
            payload:response.data.session.user

        })

    }catch(error){
        dispatch({
            type:"LOAD_USER_FAIL",
            payload:error,
        })

    }
}