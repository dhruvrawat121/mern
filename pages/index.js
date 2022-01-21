import Link from 'next/link'
import BaseURL from '../lib/baseUrl';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productsAction';
import { ProductDetail } from '../redux/actions/productDetailAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {wrapper} from "../redux/store"



 const  Home=()=> {
        
    
// Extracting data from store
   const {products} = useSelector((state)=>state.products)


     
       

      
 return(
   <div className="bg-white">
     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       <h1 className='text-gray-800 font-bold text-xl '>Welcome to the E-commerce Website</h1>
       <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
       {products.map((product) => (
         <div key={product._id} className="group relative" onClick={()=>gameDetailHandler({id:product._id})}>
           <div id={product.id} className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
           <Link href={'/product/[id]'} as={`/product/${product._id}`} ><a className="text-gray-900 font-medium italic"><img
               src={product.img}
               alt={product.imageAlt}
               key={product.id}
               className="w-full h-full object-center object-cover lg:w-full lg:h-full"
             /></a></Link>
           </div>
           <div  key={product.id} className="mt-4 flex justify-between">
             <div  key={product.id}>
               <h3 className="text-sm text-gray-700">
                 {product.name}
               </h3>
             </div>
             <p className="text-sm font-medium text-gray-900"> ${product.price}</p>
           </div>
  
         </div>
       ))}
     </div>
   </div>

   
 </div>
)
      
}
export default Home;

export const getServerSideProps= wrapper.getServerSideProps((store)=>async({req})=>{
  await store.dispatch(productAction(req))
})