import ConnectDB from "../../lib/mongodb";
import bcrypt from "bcryptjs";
import User from "../../models/userSchema"
import jwt from "jsonwebtoken"

ConnectDB();


 export default async(req,res)=>{
        const{email, password}=req.body;
        try{
            if(!email || !password){
                return 
            }
            // check whether the user is already sign Up or not
            const user = await User.findOne({email})
            if(!user){
                 res.status(422).json({message:"that username or password don't exist"})
            }
            const matchPass= await bcrypt.compare(password, user.password)
            if(matchPass){
               const token= jwt.sign(
                        {userId:user._id}, 
                        process.env.JWT_SECRET,
                        {expiresIn: "1d"}
               )
               res.status(201).json({message:"login Successful"})
            }else{
               return res.status(202).json({message:"Either email or password don't match"})

            }
            

        }catch(err){
            console.log(err)

        }
 }