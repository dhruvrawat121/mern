import Cart from "../../models/cart";
import ConnectDB from "../../lib/mongodb"
import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";


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
    
   const addProduct =async(req,res)=>{
            const {productId, quantity} = req.body;

    

                try{
                    // if(!session){
                    //     return res.status(401).send("You need to logIn first. Please logIn and try again")
                    // }
                    const cart = await Cart.findOne({});

                    // const cart = await Cart.findOne({user:userId});
                    // to check if product already exists
                    // Use mongoose's ObjectId() method to convert string productId to objectIds

                    const pExist=  await cart.products.some((pdoc)=>ObjectId(productId).equals(pdoc.product))
                    console.log(pExist)
                    if(pExist){
                            await Cart.findOneAndUpdate(
                                {_id:cart._id,"products.product":productId},
                                {$inc:{"products.$.quantity": quantity}}
                                )
                            }else{
                                const newProduct = {quantity, product:productId};
                                await Cart.findOneAndUpdate(
                                    {_id:cart._id},
                                    {$push:{products:newProduct}}
                                )
                            }
                            res.status(200).json( {message:"Added to cart Successfully", success:true})
                    }catch(error){
                            console.error(error);
                            res.status(403).json('Something went wrong,Please logIn and try again')
                    }


            } 




 
// fetching contents of cart

        const fetchCart= async(req, res)=>{
        
                try{
                const cart = await Cart.findOne().populate({
                    path:'products.product',
                    model:"product"
                })
            res.status(200).json(cart.products)
            }catch(error){
                return res.status(403).send('Please logIn again')
            }
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