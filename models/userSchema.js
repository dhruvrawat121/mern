import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,"Please enter your name"],
        maxlength:[50,"Your name cannot exceed 50 characters"]
    },
    email:{
        type: String,
        required: [true,"Please enter your email"],
        unique: true,
        validate:[validator.isEmail,"Please enter valid email address"]
    },
    password:{
        type: String,
        required: true,
        minlength:[6,"Your password must be longer than 6 characters"],
        select:false
    },
   
    
},{
    timestamps: true
})

// encrypting password 

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password= await bcrypt.hash(this.password,12)
})

module.exports=mongoose.models.User || mongoose.model("User", userSchema)