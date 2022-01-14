import Link from "next/link"
import { useState } from "react"
import BaseURL from "../lib/baseUrl"
const newProduct =()=>{
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    // event handlers

    const nameHandler=(e)=>{
        setName(e.target.value)
        
    }
    const imgHandler=(e)=>{
        setImg(e.target.value)
        
    }
    const descHandler=(e)=>{
        setDesc(e.target.value)
        
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
        
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
            const res= await fetch(`${BaseURL}/api/products`,{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                name: name,
                price: price,
                desc: desc,
                img: img
            })
             })
            
                setName("")
                setImg("")
                setDesc("")
                setPrice("")
       }
    return(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-gray-500 box-border" >
            
            <h1 className="m-4 p-3">Add New Product</h1>
            <form onSubmit={submitHandler}className="bg-gray-500 box-border container">
                    <div>
                        <label >Enter Product Name</label>
                        <input type="text" onChange={nameHandler} value={name} className="p-3 ml-3 w-1/2 border-none" placeholder="Please enter product name" />
                    </div>
                    <div className="m-3">
                        <label>Img</label>
                        <input type="url" onChange={imgHandler} value={img}className="p-3 ml-10 w-1/2" id="exampleInputPassword1" placeholder="Please enter img url"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" onChange={descHandler} value={desc} className="p-3 ml-3 w-1/2" id="exampleInputPassword1" placeholder="Please enter description"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text"onChange={priceHandler} value={price}className="p-3 ml-3 w-1/2" id="exampleInputPassword1" placeholder="Please enter price"/>
                    </div>
                    
                    <button type="submit" className="rounded-md bg-gray-800 text-white sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm m-4 p-3">Submit</button>
            </form>
            
            
            </div>
       
    )
}

export default newProduct