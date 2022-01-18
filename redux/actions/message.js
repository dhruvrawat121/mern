
export const LogInMessage = ()=>{
 return{
    type: "LOGIN_SUCCESSFUL",
    payload:"LogIn Successful",
 }
};

export const logInFailMessage =()=>{
    return{
        type:"LOGIN_FAILED",
        payload:"Something went wrong",
        
    }
}

export const SignUpMessage=()=>{
   return{
    type:"SIGNUP_SUCCESSFUL",
    payload:"SignUp Successful"
   }
}
export const SignUpFailMessage=()=>{
   return{
    type:"SIGNUP_FAILED",
    payload:"SignUp Successful"
   }
}