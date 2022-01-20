import ConnectDB from "../../lib/mongodb";
import bcrypt from "bcryptjs";
import User from "../../models/userSchema"
import jwt from "jsonwebtoken"

ConnectDB();


 export default async(req,res)=>{

        const{email, password}=req.body;
        console.log(email, password)


        try{
            // to check if all the fields are provided
            if(!email || !password){
                return res.status(404).send("Please enter all the fields")
            }
            // check whether the user is already sign Up or not
            const user = await User.findOne({email})
            if(!user){
                 res.status(404).send('No user exists with that email')
            }
            // for password match
            const matchPass= await bcrypt.compare(password, user.password)
            if(matchPass){
               const token= jwt.sign(
                        {userId:user._id}, 
                        process.env.JWT_SECRET,
                        {expiresIn: "1d"}
               )
            //    Sending the token to the client
               res.status(201).json("token",token)  
            }else{
               return res.status(401).send('Either email or password don\'t match')

            }
            

        }catch(error){
            console.error(error);
            res.status(500).send('Error logging in user')

        }
 }