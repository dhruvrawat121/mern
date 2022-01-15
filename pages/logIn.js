import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseURL from "../lib/baseUrl"
import cookie from "js-cookie";



const LogIn =()=>{

          const [email, setEmail]=useState('')
          const[password, setPassword]= useState("")
          const router = useRouter();
      // Event Handlers
          const emailHandler=(e)=>{
            setEmail(e.target.value)
          }

          const passwordHandler=(e)=>{
            setPassword(e.target.value)
          }

          const logInHandler=async(e)=>{
            e.preventDefault()
            const res = await fetch(`${BaseURL}/api/logIn`,{
              method:"POST",
              headers:{"content-Type":"application/json"},
              body:JSON.stringify({
                email: email,
                password: password
              })
            })

            const res2 = await res.json();
            if(res2.error){
              console.log(error)
            }else{
              console.log(res2)
              cookie.set('token',res.token)
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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">LogIn your Account</h2>
       
      </div>
      <form onClick={logInHandler}className="mt-8 space-y-6" action="#" method="POST" on={true}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input onChange={emailHandler}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input onChange={passwordHandler}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        

        <div>
          <button
          on
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Log in
          </button>
        </div>
        <div className="text-sm">
               <Link href="/signUp"><a className="font-medium text-indigo-600 hover:text-indigo-500">
                 Don't have an Account. SignUp Instead?
                </a></Link>
              </div>
      </form>
    </div>
  </div>
  )
}



export default LogIn;