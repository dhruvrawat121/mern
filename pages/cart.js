import BaseURL from "../lib/baseUrl";

const cart =({products})=>{


    return(
        <>
        <h1>cart</h1>
        <div className="mt-8">
                      <div className="flow-root m-3">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((item) => (
                            <li key={item.product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.product.img}
                                  alt={item.product.name}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                     {item.product.name}
                                    </h3>
                                    <p className="ml-4">{item.product.price}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {item.quantity}</p>

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
                    </div>
              
        </>
    )
    
}

export async function getServerSideProps(context){
   const res = await fetch(`${BaseURL}/api/cart`)
   const products = await res.json()
   console.log("Products", products)
   if(!products){
       return{
           notFound: true
       }
   }
return{
    props:{products}
}
}


export default cart;

