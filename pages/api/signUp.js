import ConnectDB from "../../lib/mongodb"
import User from "../../models/userSchema"
// bcrypt js for hased password
import bcrypt from "bcryptjs";


ConnectDB();

export default async(req, res)=>{
  
    const {name, email, password} = req.body;
    try{
             if(!name || !password || !email){
                 return res.status(422).json({message:"Please enter all the fields before submitting"})
             }  
             
             const user = await User.findOne({email})
             if(user){
                 res.status(422).json({message:"That email is already used"})
             }
                const hashedPassword=await bcrypt.hash(password,12)
                const newUser = await new User({
                    name,
                    email,
                    password: hashedPassword
                }).save();
                res.status(201).json({message:"sign up successful"})

    }catch(err){
        console.log(err)

    }
}

