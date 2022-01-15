import Link from "next/link";
import { useState } from "react";
import BaseURL from "../lib/baseUrl"
import { useRouter } from "next/router"; 
import { useForm } from "react-hook-form";
// for alert
import { Alert } from "react-bootstrap";






const SignUp =()=>{

  // states
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')
  const [email,setEmail]= useState('')
  const router = useRouter();

 const {handleSubmit, register, formState:{errors}}= useForm();
// All the Event Handlers

  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  // Email Handler
  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }

  // password handler
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  // submit Handler
  const submitHandler=async(e)=>{
    const res = await fetch(`${BaseURL}/api/signUp`,{
      method:"POST",
      headers:{
        "content-Type": "application/json"
      },
      body:JSON.stringify({
         email,
         password,
         name

      })
    })
    
    const res2 = await res.json()
    console.log(res2)
    if(res2.error){
      <Alert variant="danger">{res2.message}</Alert>
    }else{
      <Alert variant="success">Success</Alert>
      router.push("/logIn")

    }
    
   

  }
    return(
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your Account</h2>
         
        </div>
        {/* FORM FOR SIGN UP */}
        <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="form-group">
            <label htmlFor="name" className="sr-only">
                Your Name:
              </label>
              <input onChange={nameHandler}
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm form-control"
                placeholder="Your Name"
                {...register('name',{required:true})}

              />
              {/* check for name errors */}
              {errors.name && 
              <Alert variant="danger">
                {errors.name &&errors.name.type==="required" && "Name is required"}
              </Alert>
              
              }
              </div>
            <div className="form-group">
            <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input onChange={emailHandler}
                {...register("email",{required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}

                id="email-address"
                type="email"
                className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm form-control"
                placeholder="Email address"

              />
              {/* check for email errors */}
              {errors.email && 
              <Alert variant="danger">
                {errors.email ?.type==="required" && <p>Email address is required</p>}
                {errors.email ?.type==="pattern" && <p>Please provide a valid email Address</p>}
              </Alert>
              
              }
            </div>
            <div className="form-group">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input onChange={passwordHandler}
                {...register("password",{required:true, minLength:8})}

                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm form-control"
                placeholder="Password"
              />
                {/* check for password errors */}
                {errors.password && 
              <Alert variant="danger">
                {errors.password ?.type==="required" && <p>Password is required</p>}
                {errors.password ?.type==="minLength" && <p>Atleast 8 characters are required</p>}
              </Alert>
              
              }
            </div>
          </div>

          

          <div className="form-group">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign Up
            </button>
          </div>
          <div className="text-sm">
                <Link href="/logIn"><a className="font-medium text-indigo-600 hover:text-indigo-500">
                 Already Have an Account. LogIn Instead?
                </a>
                </Link>
              </div>
        </form>
      </div>
    </div>
    )
}


export default SignUp;