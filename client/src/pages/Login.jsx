import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

import Welcome from './Welcome';

function Login() {
    const[show, setShow]= useState(false)
    let navigate = useNavigate()
    

    const send = async(event) => {
        event.preventDefault()
        try{
            let response = await axios.post(`post/`,{
                'email': document.getElementById('email').value,
                'important': document.getElementById('pass').value
            })
            console.log(response.data.success)
            if(response.data.success == true){
                setShow(true)
            }
        }catch(error){
            console.log(error)
        }
    }


    return (
        <div>
        
            <h4>Login</h4>
            <Form onSubmit={(event) => {send(event)}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else Promise.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id='pass' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p><a href={`#/signUp`}>Sign Up</a></p>
            </Form>
            {show ? navigate('/welcome') : NaN}
        
        </div>
    )
}
export default Login