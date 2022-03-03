import Link from "next/link"
import { useState } from "react"
import BaseURL from "../lib/baseUrl"
import {Form,Button,Row,Col,InputGroup,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const NewProduct =()=>{
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
     // validation for form
     const [validated, setValidated] = useState(false);
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

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
                  e.preventDefault();
                  e.stopPropagation();
              }

        setValidated(true);
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
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter product Details</h2>
           
          </div>
        <Form noValidate validated={validated} onSubmit={submitHandler}className="mt-8 space-y-6" action="#" method="POST">
            <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Product Name</Form.Label>
            <Form.Control onChange={nameHandler} type="text" placeholder="Enter name of the product" required/>
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter the Product Name
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Image URL</Form.Label>
            <Form.Control onChange={imgHandler} type="text" placeholder="Enter name of the product" required/>
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter the Product image
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Pirce($)</Form.Label>
            <Form.Control onChange={priceHandler} type="number" placeholder="image" required/>
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter the Product Price
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={descHandler} type="text" placeholder="description" required/>
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please add the description for the product
            </Form.Control.Feedback>
            </Form.Group>
                    
            
            
            <Button variant="primary" type="submit" className="rounded-md bg-gray-800 text-white sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm m-4 p-3">Submit</Button>
        </Form>
            
            
    </div>
    </div>
       
    )
}

export default NewProduct