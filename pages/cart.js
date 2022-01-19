import BaseURL from "../lib/baseUrl";
import {useEffect, useState} from "react"

import axios from 'axios';
import { parseCookies } from "nookies";
import calculateCartTotal from "../utils/cartTotal"


const cart =({products})=>{

    const [isCartEmpty, setisCartEmpty]= useState(false);
    const [cartAmount, isCartAmount] = useState(0)

    useEffect(()=>{
        const {cartTotal, stripeTotal} = calculateCartTotal(products)
    },[products])
            return(
                
                    <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                        <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                        />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                            <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <div className="flex-1 flex items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                        <div className="flex">
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>{cartAmount}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Checkout
                                </a>
                                </div>        
                            </div>
                </div>
            )
    
}

                    export async function getServerSideProps(ctx){
                        const {token} = parseCookies(ctx);
                        // check if user authenticated
                        if(!token){
                            return{props:{products:[]}}
                        }
                        try{
                            const url = `${BaseURL}/api/cart`;
                            const payload = {headers:{authorization:token}};
                            const response = await axios.get(url, payload)
                            const res2= response.data;
                            const products = await res2.json();
                            return{
                                   props: {products}
                                }
                        }catch(error){
                            console.log(error);
                        }
                        
                        
                    }




export default cart;

