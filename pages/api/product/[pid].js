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
const {pid} = req.query;
const productID = await product.findOne({_id:pid})
res.status(200).json(productID)
}
// deleting the product

const  deleteProduct = async(req, res)=>{
    const {pid}= req.query;
    const productID= await product.findByIdAndDelete({_id:pid})
    res.status(200).json({})
}
