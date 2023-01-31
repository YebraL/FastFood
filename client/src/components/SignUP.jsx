import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
import { useState } from 'react'

import Welcome from '../pages/Welcome';

function SignUp() {

    const [newAccount, setNewAccount]= useState(false)

    const signUp=async()=>{
        let email=document.getElementById("signUpEmail").value
        let username=document.getElementById("signUpUserName").value
        let first_name=document.getElementById("signUpFirstName").value
        let last_name=document.getElementById("signUpLastName").value
        let password=document.getElementById("signUpPassword").value
        let password2=document.getElementById("signUpPassword2").value
        console.log(email, password, password2)
    
        if (password === password2){
        let myResponse=await axios.post('signUp/',{
            'username': username,
            'first_name': first_name,
            'last_name': last_name,
            'email':email,
            'password':password
        })
        console.log(myResponse.data['signup'])
        if(myResponse.data['signup']===true){
            console.log("new user made")
    
        let username=document.getElementById("signUpUserName").value
            let password=document.getElementById("signUpPassword").value
            await axios.post('signIn/',{
            'username':username,
            'password':password
            })
    
            // window.location.replace("/#/signIn")
            setNewAccount(true) 
        }else{
            alert("Make sure your passwords match!")
        }
        }
    
    }
    return (
        <div className='box position-absolute top-50 start-50 translate-middle'>
            <h1>SignUp</h1>

            <Form onSubmit={signUp}>

 	        <FloatingLabel controlId="signUpFirstName" label="First Name" className="mb-3">
            <Form.Control type="text" placeholder="" />
      	    </FloatingLabel>

 	        <FloatingLabel controlId="signUpLastName" label="Last Name" className="mb-3">
            <Form.Control type="text" placeholder="" />
      	    </FloatingLabel>

            <FloatingLabel controlId="signUpEmail" label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="" />
            </FloatingLabel>
	
	
            <FloatingLabel controlId="signUpUserName" label="UserName" className="mb-3">
            <Form.Control type="text" placeholder="" />
            </FloatingLabel>
                
            <FloatingLabel controlId="signUpPassword" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="" />
            </FloatingLabel>


            <FloatingLabel controlId="signUpPassword2" label="Re-enter Password" className="mb-3">
            <Form.Control type="password" placeholder="" />
            </FloatingLabel>

            <Button onClick={signUp}>Sign Up</Button>
            </Form>
            {newAccount && <Welcome />}
        </div>
    )
}

export default SignUp