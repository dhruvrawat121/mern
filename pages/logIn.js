import {signIn} from "next-auth/react"
import { toast } from "react-toastify"
import { useState } from "react";
import { Link } from "next/link";
import LogIn from "./components/auth/logIn";



const Login = ()=>{

  return(
    <>
    <LogIn/>
    </>
  )
    
}
export default Login;