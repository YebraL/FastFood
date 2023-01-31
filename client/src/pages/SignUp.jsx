import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUp() {

    const[show, setShow] = useState(false)
    let navigate = useNavigate()

    const register = async(event)=>{
        event.preventDefault()
        try{
            if(document.getElementById('password1').value != document.getElementById('password2').value){
                throw new Error("passwords don't match");
            }
            const response = await axios.post(`signUp/`,{
                'fName': document.getElementById('firstName').value,
                'lName': document.getElementById('lastName').value,
                'eMail': document.getElementById('email').value,
                'pass1': document.getElementById('password1').value,
                'pass2': document.getElementById('password2').value
            })
            console.log(response)
            if(response.data.success == true){
                setShow(true)
            }
        }catch(error){
            console.log(error)
        }
        
    }
    


    return (
        <div>
            <h1>Sign Up Page</h1>

            <form onSubmit={(event) => {register(event)}}>
                <input id='firstName' placeholder='First Name'/>
                <input id='lastName' placeholder='Last Name'/>
                <input id='email' type='email' placeholder='Email'/>
                <input id='password1' type='password' placeholder='Password'/>
                <input id='password2' type='password' placeholder='Password'/>
                <input type='submit'/>
            </form>
            {show ? navigate('/') : NaN}
        </div>
    )
}

export default SignUp