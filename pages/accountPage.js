import { parseCookies } from "nookies";
import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";




const AccountPage = ()=>{

    const {user, loading} =useSelector(state=>state.signUpUser)
    return(
        <>

        {user && !loading ?
        
           <>
           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
           <div className="max-w-md w-full space-y-8">
               <div>
                   <img
                       className="mx-auto h-12 w-auto"
                       src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                       alt="Workflow"
                   />
                   <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your Profile</h2>
           
               </div>         
           </div>
     
       </div>
   
       <div className="flex -space-x-1 overflow-hidden">
           <img
           className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
           src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
           alt=""
           />

       </div>
       <div className="mt-8 space-y-6">
           <h2 className="mt-6 text-center text-xl font-bold text-gray-900">{user.name}</h2>

       </div>
       <div className="mt-8 space-y-6">
           <h2 className="mt-6 text-center text-xl font-bold text-gray-900">{user.email}</h2>

       </div>
       <div className="mt-8 space-y-6">
           <h2 className="mt-6 text-center text-xl font-bold text-gray-900">Your Orders</h2>

       </div>
       </>:null 
        }
            
        </>
    )
}


export default AccountPage;



