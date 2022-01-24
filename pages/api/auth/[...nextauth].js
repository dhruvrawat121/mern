import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/userSchema";
import ConnectDB from "../../../lib/mongodb";
import bcrypt from "bcryptjs"


export default NextAuth({
    //   // Configure one or more authentication providers
    session:{
        jwt:true
    },
    providers:[
       CredentialsProvider({
           async authorize(credentials){
            const {email, password}= credentials;
            ConnectDB();



            //    check if password or email is entered

            if(!email || !password){
                throw new Error("Please enter email or password")
            }
            // Find user in database
            const user = await User.findOne({email}).select("+password")
            if(!user){
                throw new Error("Invalid email or password")
            }
            // check if password is correct or not
            const PasswordMatched = await bcrypt.compare(password, user.password)
            if(!PasswordMatched){
                throw new Error("you have either entered wrong email or password")
            }
            return Promise.resolve(user)
           }
       })
    ],
     callbacks:{
         jwt: async({token, user})=>{
             user&& (token.user = user)
             return Promise.resolve(token)
         },
         session: async({session,  token})=>{
            session.user = token.user
            return Promise.resolve(session)
        },
        secret:"Bye",
        
        

     }

})