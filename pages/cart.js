import BaseURL from "../lib/baseUrl";

const cart =({products})=>{
    console.log(products)
    return(
        <>
            {/* <h1>Cart</h1>
            {products.map(item=>{
                return(
                    <div>
                        <h6>{item.product.name}</h6>
                        <img src={item.product.img}></img>
                    </div>
                )
            })} */}
        </>
    )
    
}

export async function getServerSideProps(context){
   const res = await fetch(`${BaseURL}/api/cart`)
   const products = await res.json()
  
return{
    props:{products}
}
}


export default cart;

