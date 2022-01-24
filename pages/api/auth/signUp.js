import ConnectDB from "../../../lib/mongodb"
import User from "../../../models/userSchema"
import Cart from "../../../models/cart"




ConnectDB();

export default async(req, res)=>{
  
    const {name, email, password} = req.body;
    
                // creating new user
              try{
                const newUser = await User.create({
                    name,
                    email,
                    password,
                   
                })
                const cart = await Cart.create({user:newUser._id})

                res.status(200).json({
                    message:"Account registered Successfully",
                    success:true
                })
                
              }catch(error){
                  res.send(error)
              }
               
                
                

        }


