import ConnectDB from "../../lib/mongodb"
import User from "../../models/userSchema"
import jwt from "jsonwebtoken";
import Cart from "../../models/cart"
// bcrypt js for hased password
import bcrypt from "bcryptjs";
// validator for server side
// import isEmail from 'validator/lib/isEmail'
// import isLength from 'validator/lib/isLength'



ConnectDB();

export default async(req, res)=>{
  
    const {name, email, password} = req.body;
    try{
             if(!name || !password || !email){
                 return res.status(422).send('Please enter all the required fields')
             }  
             
            // if (!isLength(name, { min: 3, max: 10 })) {
            //     return res.status(422).send('Name must be 3-10 characters long');
            // } else if (!isLength(password, { min: 6 })) {
            //     return res.status(422).send('Password must be at least 6 characters');
            // } else if (!isEmail(email)) {
            //     return res.status(422).send('Email must be valid');
            // }
            const user = await User.findOne({email})
             if(user){
                 return res.status(422).send(`User already exists with that email ${email}`)
             }
            //  for hashing the password
                const hashedPassword=await bcrypt.hash(password,12)
                // creating new user
                const newUser = await new User({
                    name,
                    email,
                    password: hashedPassword
                }).save();
                const cart = await new Cart({user:newUser._id}).save();
                const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET,{
                    expiresIn:'7d'
                });
                // sending the token
                res.status(201).json("token",token)

        }catch(err){
        console.log(err)
        res.status(500).send("Error during signUp.Please try again later")

    }
}

