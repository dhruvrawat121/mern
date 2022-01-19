import jwt from "jsonwebtoken";
import User from '../../models/userSchema';
import ConnectDB from "../../lib/mongodb";

ConnectDB();

export default async(req, res)=>{
      // Check if authorization headers is provided with the request
    if(!('authorization' in req.headers)){
        return res.status(401).send("No authorization token")
    }
    try{
        const {userId} = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        )

        const user = await User.findOne({_id: userId});
        if(user){
            res.send(200).json(user)
        }else{
            res.status(400).send('User not Found')
        }

    }catch(error){
        res.status(403).send('Invalid Token');
        // 403 forbidden action

    }
}