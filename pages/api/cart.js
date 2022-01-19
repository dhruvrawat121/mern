import Cart from "../../models/cart";
import ConnectDB from "../../lib/mongodb"
import { ObjectId } from "mongodb";

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

    if(!('authorization' in req.headers)){
        return res.send(401).send("no authorization token")
    }
    try{
        const {userId} = jwt.verfiy(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        const cart = await Cart.findOne({user:userId}).populate({
            path:'products.product',
            model:"product"
        })
        res.status(200).json(cart.products)
    }catch(error){
        return res.status(403).send('Please logIn again')
    }
}

// adding product to cart

const addProduct = async(req, res)=>{
    
        const {productId, quantity} = req.body;

        if(!('authorization' in req.headers)){
            return res.status(401).send("No authorization token found")
        }

        try{
            const cart = await Cart.findOne({user:userId});
            // to check if product already exists
            // Use mongoose's ObjectId() method to convert string productId to objectIds

            const pExist=  cart.products.some(pdoc=>ObjectId (productId) === pdoc.product)
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
                    res.status(200).send("Added to cart")
            }catch(error){
                    console.error(error);
                    res.status(403).send('Please logIn again')
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