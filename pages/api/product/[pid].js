import product from "../../../models/productSchema"
import cart from "../../../models/cart"

export default async(req, res)=>{
    switch(req.method){
        case "GET": 
        await getProduct(req, res)
        break;
        case "DELETE":
        await deleteProduct(req, res)
        break; 
        case "GET":
        await addProduct(req,res)
        break;
        
       
    }

}




            // getting product detail

           
            const  getProduct=async(req, res)=>{
                try{
                    const {pid} = req.query;
                    const productID = await product.findOne({_id:pid})

                    if(productID){
                        
                        res.status(200).json(productID)

                    }else{
                        res.status(404).json({message:"Invalid Room ID"})
                        return
                    }
                }catch(error){
                    console.error(error);
                    res.status(500).json({message:"Internal server Error"})

                }
            
                }
         
// deleting the product

const  deleteProduct = async(req, res)=>{
    const {pid}= req.query;
    const productID= await product.findByIdAndDelete({_id:pid})
    res.status(200).json({})
}
// adding the product to cart
 const addProduct = async(req, res)=>{
     const {productId, quantity} = req.body;
    
 }