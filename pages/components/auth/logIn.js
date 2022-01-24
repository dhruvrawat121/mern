import {signIn} from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { Link } from "next/link";
import {Form,Button,Row,Col,InputGroup,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../../../redux/actions/signUpAction"




const LogIn = ()=>{
  const dispatch = useDispatch();

     useEffect(()=>{
      dispatch(loadUser())

  },[dispatch])



    // states

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false);



    // submit handler
    const submitHandler =async(e)=>{
      e.preventDefault();

      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.stopPropagation();
      }

      setValidated(true);

      const result =await signIn('credentials',{
            redirect:false,
            email,
            password
        })
        if(result.error){
            toast.error(result.error)
        }else{
          toast.success("Logged In Successfully")
          setInterval(
            ()=>{window.location.href ="/"},2000
          )
        }
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            
            </p>
          </div>
          <Form noValidate validated={validated} className="mt-8 space-y-6" action="#" method="POST"onSubmit={submitHandler}>
            
        <Form.Group md="4" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control 
              type="email"
              name="email"
              placeholder="Email Address"
              required
              name="email"
              onChange={(e)=>setEmail(e.target.value)}


              value={email}
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group  md="4" controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control 
              type="password"
              name="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              value={password}
              name="password"
              onChange={(e)=>setPassword(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
              Please provide valid password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button type="submit">Log In!!</Button>
      
          </Form>
         <ToastContainer 
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
            </div>
            </div>

    )
}
export default LogIn;
