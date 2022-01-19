import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types;


const cartSchema = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    products:[
        {
        product:{type: ObjectId,ref: "product"},
        quantity:{type: Number,default:1}
        }
]
  
})

export default mongoose.models.Cart|| mongoose.model("Cart", cartSchema)