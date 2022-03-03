
import {useEffect, useState} from "react";
import calculateCartTotal from "../utils/cartTotal"
import { deleteCartItem } from "../redux/actions/cartAction";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";


const Cart =()=>{
    // extracting data from states
    const {cartItems} = useSelector(state=>state.Cart)
    const [cartAmount, setCartAmount] = useState(0)
    const dispatch = useDispatch();
    const router = useRouter();
    const removeHandler=(productId)=>{
        const data = {productId:productId}
        dispatch(deleteCartItem(data))
        
    } 

    useEffect(()=>{
        const {cartTotal} = calculateCartTotal(cartItems)
        setCartAmount(cartTotal)
    },[cartItems])

         
      

            return(
                
                    <div className="mt-8">


                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartItems?.map((c) => (
                                    <li key={c.product._id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                        <img
                                        src={c.product.img}
                                        alt={c.product.img}
                                        className="w-full h-full object-center object-cover"
                                        />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                            {c.product.name}
                                            </h3>
                                            <p className="ml-4">{c.product.price}</p>
                                        </div>
                                        </div>
                                        <div className="flex-1 flex items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {c.quantity}</p>

                                        <div className="flex">
                                            <button onClick={()=>removeHandler(c.product._id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
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

                   




export default Cart;

