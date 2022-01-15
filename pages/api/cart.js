import Cart from "../../models/cart";
import ConnectDB from "../../lib/mongodb"

ConnectDB();

export default async(req, res)=>{
    switch(req.method){
        case "GET":
         await fetchCart(req, res)
         break;
         case "PUT":
         await addProduct(req, res)
         break;
        
    }
}
// fetching contents of cart
const fetchCart= async(req, res)=>{
    try{
        const cart = await Cart.findOne({}).populate("products.product")
        res.status(200).json(cart)
    }catch(error){
        return res.status(401).json({error})
    }
}

// adding product to cart

const addProduct = async(req, res)=>{
    
    const {productId, quantity} = req.body;
    const cart = await Cart.findOne({});    // await new cart({}).save();
    const pExist=  cart.products.some(pdoc=> productId === pdoc.product.toString() )
    if(pExist){
        await Cart.findOneAndUpdate(
            {_id:cart._id,"products.product":productId},
            {$inc:{"products.$.quantity": quantity}}
        )
    }else{
        const newProduct = {quantity, product:productId}
        await Cart.findOneAndUpdate(
            {_id:cart._id},
            {$push:{products:newProduct}}
        )
    }
    res.status(200).json({message:'product added successfully'})
      }

    // //   removing product from cart

    // const removeProduct = async(req,res)=>{
    //     const {productId} = req.query;
    //     try{
    //         const cart = await Cart.findOne({})
    //         await Cart.findOneAndUpdate(
    //             {_id:cart._id},{$pull:{products:{product:productId}}},
    //             {new:true}
    //             ).populate("products.product")
    //             res.status(200).json({message:"removed from cart"})
    //     }catch(error){
    //         console.log(error);
    //         res.status(403).send("something bad happened")
    //     }

       
    // }