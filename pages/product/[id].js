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
          <form></form>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        

        <div>
          
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none">
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl text-gray-700">
                    {product.name}
                   </h3>
                  <p className="mt-1 text-md text-gray-500">{product.desc}</p>
                </div>
                <p className="text-xl font-medium text-gray-900"> ${product.price}</p>
              </div>
            </div>
            <button onClick={addProduct} className="rounded-md bg-gray-800 text-white sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm m-4 p-3">Add to Cart</button>
            
            <button onClick={deleteProduct} className="rounded-md bg-gray-800 text-white sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm m-4 p-3">Delete Item</button>
            <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onChange={quantityHandler}
              name="quantity"
              type="number"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter quantity"
              min="1"
              value={quantity}
            />
          </div>
         
        </div>
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