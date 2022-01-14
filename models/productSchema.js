import mongoose from "mongoose"


const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    img:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true,
    },
   desc:{
        type:String,
        required: true
    },
    
})

export default mongoose.models.product || mongoose.model('product', ProductSchema)