import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import Home from './pages/home';
import Login from './pages/Login';
import Forums from './pages/Forums';
import Randomizer from './pages/Randomizer';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';

import SignUP from './components/SignUP';
import SignIN from './components/SignIN';

function App() {

  const [user, setUser]= useState(null)

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken

  const curr_user=async()=>{
    let myResponse=await axios.get('currentUser/')
    let User= myResponse.data
    console.log(User)
    setUser(User)
  }
  

  const signOut=async()=>{
    let myResponse=await axios.post('signOut/')
    if (myResponse.data["signout"]==true){
      window.location.href="/"
    }
  }

  useEffect(()=>{
    curr_user()
  }, [])

  return (
    <div className="App">
    
      <div>
      
        <Router>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{width:'50%', justifyContent:'space-around'}}>
                        
                        <Nav.Item>
                          <Link to='/'> Home </Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                          <Link to='login'> Login </Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Link to='randomPick'> Pick Page </Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Link to='SignUP'> Sign-Up </Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Link to='SignIN'> Sign-IN </Link>
                        </Nav.Item>

                        <Button  size='sm' variant="outline-danger" className='sign_out_btn' onClick={signOut}>
                          Sign Out
                        </Button>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login/' element={<Login/>}/>
              <Route path='forum/' element={<Forums/>}/>
              <Route path='signUp' element={<SignUp/>}/>
              <Route path='randomPick' element={<Randomizer/>}/>
              <Route path='welcome/' element={<Welcome/>}/>
              <Route path='SignUP/' element={<SignUP/>}/>
              <Route path='SignIN/' element={<SignIN/>}/>
            </Routes>

        </Router>
      </div>
      
    </div>
  )
}

export default App
