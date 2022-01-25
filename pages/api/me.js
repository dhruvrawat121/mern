import { getSession } from "next-auth/react";
import User from "../../models/userSchema"
import ConnectDB from "../../lib/mongodb"

ConnectDB();
 const currentUserProfile=async(req, res)=> {
    const session = await getSession({req})
    // console.log("req.user",req.user)
    try{
        if(!session){
              res.send("You need to logIn first", 402)
              res.end()

        }else{
            res.status(200).json({
                success:true,
                session
            })
            res.end()

        }

        
     
    }catch(error){
        res.send(error)
    }
   

  
}

export default currentUserProfile;