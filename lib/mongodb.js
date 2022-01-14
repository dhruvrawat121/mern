import mongoose from "mongoose"

function ConnectDB(){
  if(mongoose.connections[0].readyState){
    console.log("Already connected")
    return
  }
  
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: "true",
      })
      mongoose.connection.on("error", err => {
        console.log("err", err)
      })
      mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
      })
    

}

export default ConnectDB;

