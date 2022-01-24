import Link from "next/link"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/signUpAction";
import {wrapper} from "../../redux/store"
import { signOut } from "next-auth/react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";



const Navbar=()=>{

    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(()=>{
        dispatch(loadUser())
    },[dispatch])

    const {user, loading} =useSelector(state=>state.signUpUser)

    
    const logOutHandler=()=>{
        toast.success("LoggedOut Successfully")
        setInterval(()=>{
            signOut();
            router.push("/")
        },2000)
    }
    return(
        <div className="text-xl text-gray-100 bg-gray-800 min-w-full min-h-full">
            <div className="flex justify-between">
                <h1 className="m-2 p-3"><Link href="/"><a>Logo</a></Link></h1>
                <ul className="flex justify-around  md:min-w-max xl:w-6/12 m-2">
                   {user ?<>
                    <li className="p-3"><Link href="/cart">Cart</Link></li>
                    <li className="p-3"><Link href="/newProduct">Create Product</Link></li>
                    <li className="p-3"><Link href="/accountPage"><a>Welcome {user.name}</a></Link></li>
                    <li className="p-3"><a className="text-red-700 cursor-pointer" onClick={logOutHandler}>LogOut</a></li>
                   </>:<>
                   <li className="p-3"><Link href="/login"><a>Existing User? login</a></Link></li>
                    <li className="p-3"><Link href="/signUp"><a>New User? Sign Up</a></Link></li> 
                   </>}
                   
                  
                    
                    
                </ul>

            </div>
            <ToastContainer position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        </div>
    )
}

export default Navbar;

