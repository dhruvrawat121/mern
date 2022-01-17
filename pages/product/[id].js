import Link from "next/link"
import { useRouter } from 'next/router'
import {useState} from "react"
import BaseURL from "../../lib/baseUrl"



const Product =({product})=>{

  const [quantity, setQuantity]= useState(1)
    const router = useRouter()

    if(router.isFallback){
        return(
             <div><h1>...is loading. </h1></div>
              )

    }
    // quantity Handlers
    const quantityHandler=(e)=>{
      setQuantity(e.target.value)

    }
    // deleting
    const deleteProduct=async()=>{
        const res =await fetch(`${BaseURL}/api/product/${product._id}`,{
            method:"DELETE"
        })
        await res.json();
        router.push('/')
        
    }
    // add to cart handler

    const addProduct=async()=>{
       const res= await fetch(`${BaseURL}/api/cart`,{
         method:"PUT",
         headers:{
            "Content-Type":"application/json"
          },
         body:JSON.stringify({
            productId:product._id,
            quantity:quantity

           })
           })
           const res2 = await res.json();
           setQuantity("")
    
      }
    
   
    return(
      <div className="bg-white">
      <div className="pt-6">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.img}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
               src={product.img}
               alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                 src={product.img}
                 alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.img}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
         {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <span className=".text-md tracking-tight text-gray-900 p-3">Quantity</span>
          <input type="Number" onChange={quantityHandler}  defaultValue ="1" className=".text-md tracking-tight text-gray-900  ml-3 p-3" />
          </div>
        <div className="w-100">
        <button onClick={addProduct}
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Add to bag
          </button>
        </div>
          <div className="2xl:w-full xl:w-full place-items-center content-center 2xl:justify-items-center">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900">{product.desc}</p>
        </div>
          
        </div >
       
      
        </div>
            <Link href="/"><a>Back to the Home Page</a></Link>
      </div>
    )

}


export async function getStaticProps({params:{id}}) {
    const res = await fetch(`${BaseURL}/api/product/${id}`)
    const data = await res.json()
    return {
      props: {
          product:data
      }, // will be passed to the page component as props
    }
  }
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: "61d98333937fae42aba5b64f"} } // See the "paths" section below
      ],
      fallback: true, // See the "fallback" section below
    };
  }


   export default Product;

