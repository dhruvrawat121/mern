import Link from "next/link";
import { useState } from "react";
import BaseURL from "../lib/baseUrl"
import { useRouter } from "next/router"; 






const SignUp =()=>{

  // states
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')
  const [email,setEmail]= useState('')
  const router = useRouter();

 
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
    e.preventDefault();
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
    if(res2.error){
      console.log(error)
    }else{
      console.log(res2)

    }
    setName("")
    setPassword("")
    setEmail("")

    router.push("/logIn")
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
        <form onSubmit={submitHandler}className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <label htmlFor="name" className="sr-only">
                Your Name:
              </label>
              <input onChange={nameHandler}
                id="name"
                name="name"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
                value={name}
              />
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input onChange={emailHandler}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}

              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input onChange={passwordHandler}
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
              />
            </div>
          </div>

          

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Sign in
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