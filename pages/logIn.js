import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseURL from "../lib/baseUrl"
import cookie from "js-cookie";
import {Form,Button,Row,Col,InputGroup,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import {logIn} from "../redux/actions/login";
import { logInFailMessage } from "../redux/actions/message";
import { LogInMessage } from "../redux/actions/message";




const LogIn =()=>{
          const router = useRouter();
          // validation for form
          const [validated, setValidated] = useState(false);
         // state and redux store
          const [email, setEmail]=useState('')
          const [password, setPassword]= useState("")
          const dispatch = useDispatch()
          const logIn = useSelector(state=>state.logIn)
          const message = useSelector(state=>state.message)


      // Event Handlers
          const emailHandler=(e)=>{
            setEmail(e.target.value)
          }

          const passwordHandler=(e)=>{
            setPassword(e.target.value)
          }
// logIn handler
          const logInHandler=async(e)=>{
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                      e.preventDefault();
                      e.stopPropagation();
                  }

            setValidated(true);
            const res = await fetch(`${BaseURL}/api/logIn`,{
              method:"POST",
              headers:{"content-Type":"application/json"},
              body:JSON.stringify({
                email: email,
                password: password
              })
            })
            console.log(res)

            const res2 = await res.json();
            console.log(res2)
            if(res2){
                dispatch(LogInMessage());
            }
            if(res2.error){

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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">LogIn your Account</h2>
       
      </div>
      {/*LogIn form */}
      <Form noValidate validated={validated} onClick={logInHandler}className="mt-8 space-y-6" action="#" method="POST" on={true} onSubmit={logInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={emailHandler} type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your email address.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={passwordHandler} type="password" placeholder="Password" required/>
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <div className="text-sm">
              <Link href="/signUp">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Don't have an Account. SignUp Instead?
                </a>
              </Link>
            </div>
           
      </Form>
    </div>
  </div>
  )
}



export default LogIn;