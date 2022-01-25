import Link from "next/link";
import React from "react";
import { useState,useEffect } from "react";
import BaseURL from "../lib/baseUrl"
import { useRouter } from "next/router"; 
import {Form,Button,Row,Col,InputGroup,} from 'react-bootstrap'
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from "react-redux";
import {SignUpAction, clearErrors} from "../redux/actions/signUpAction"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';







const SignUp=()=>{
          const dispatch = useDispatch();
          const router = useRouter();
      // states
            const [user,setUser]= useState({
              name:'',
              email:'',
              password:''
            })

            const {name, email, password} = user;
            

            const [validated, setValidated] = useState(false);

// extracting from state

            const{success, error, loading} = useSelector(state=>state.signUpUser);



              useEffect(()=>{
              if(success){
                toast.success("Account registered Successfully")
                setInterval(
                  ()=>{router.push('/login')},2000
                )

              }
              if(error){
                toast.error(error)
                dispatch(clearErrors())
              }
            },[dispatch, success, error])
            
// All the Event Handlers
            const onChange =(e)=>{
                      setUser({
                        ...user,
                        [e.target.name]:e.target.value
                      }) 
            }
         
            const submitHandler=async(e)=>{
              const form = e.currentTarget;
              if (form.checkValidity() === false) {
                e.stopPropagation();
              }
              e.preventDefault();


              setValidated(true);
              const userData = {
                name, email, password, 
              }
              dispatch(SignUpAction(userData))
             
            
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your Account</h2>
         
        </div>
        <Form noValidate validated={validated} onSubmit={submitHandler} className="mt-8 space-y-6">
        <Form.Group  md="4" controlId="" className="2xl:w-full">
          <Form.Label>First name</Form.Label>
          <Form.Control onChange={onChange}
            required
            type="text"
            name="name"
            value={name}
            placeholder="Please Enter your name" className="w-full"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
        </Form.Group>
        
        
        <Form.Group md="4" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control onChange={onChange}
              type="email"
              name="email"
              placeholder="Email Address"
              required
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
            <Form.Control onChange={onChange}
              type="password"
              name="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              value={password}

            />
            <Form.Control.Feedback type="invalid">
              Please provide valid password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button  type="submit">Sign Up!!</Button>
         <div className="text-sm">
              <Link href="/logIn">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account LogIn Instead?
                </a>
              </Link>
            </div>
    </Form>
    <ToastContainer  position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />

      </div>
    </div>
    )
}


export default SignUp;