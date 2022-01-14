// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectDB from "../../lib/mongodb";
import product from "../../models/productSchema"

ConnectDB();

export default async(req, res)=>{

      switch(req.method){
        case "GET":
          await  getProducts(req, res)
          break;
        case "POST":
          await saveProduct(req, res)
          break;
      }
    }



const getProducts = async(req, res)=>{
  try{
    const products= await product.find();
    res.status(200).json(products)
  }catch(err){
    console.log(err)
  }
}

const saveProduct = async(req, res)=>{
  const {name, price, desc,img}=req.body;
  if(!name || !price || !desc || !img){
    res.status(422).json({message:"Please enter all the details"})
  }
  const newProduct = new product({
    name: name,
    img: img,
    desc: desc,
    price: price
  }).save()
  res.status(201).json({message:"New Product Created"})
}